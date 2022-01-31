import { Controller, UseFilters, UsePipes } from "@nestjs/common"
import { BaseRpcExceptionFilter, EventPattern, Payload, RpcException } from "@nestjs/microservices"
import * as bcrypt from "bcryptjs"
import { UsersService } from "./users.service"
import { ValidationPipe } from "../../common/pipes"
import { Users } from "../../common/enities"
import { SubscribeUserDto, CreateUserDto, FindUserDto, UpdateUserDto, AddAccountDto } from "./dto"
import { SubscribeUserInterface } from "./interfaces"
import { Errors } from "../../common"

@Controller()
@UsePipes(ValidationPipe)
@UseFilters(BaseRpcExceptionFilter)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @EventPattern("user.find")
    async findOneUser(@Payload() findOneUserData: FindUserDto): Promise<Users> {
        return await this.usersService.findOne(
            {
                id: findOneUserData.user_id,
                lastName: findOneUserData.lastName,
            },
            findOneUserData.options,
        )
    }

    @EventPattern("user.add.account")
    async addUserAccount(@Payload() payload: AddAccountDto) {
        const user = await this.usersService.findOne({id: payload.user_id}, {relations: ["accounts"]})
        const account = await this.usersService.findOne({id: payload.account_id}, {relations: []})
        user.accounts.push(account)
        return await this.usersService.update(user)
    }

    @EventPattern("user.create")
    async create(@Payload() createUserDto: CreateUserDto): Promise<Users> {
        if (
            !!!(await this.usersService.findOne({ email: createUserDto.email }, { relations: [] }))
        ) {
            return await this.usersService.create({
                ...createUserDto,
                password: bcrypt.hashSync(createUserDto.password, bcrypt.genSaltSync(5)),
                lastName: createUserDto.email.split("@")[0],
            })
        } else throw new RpcException(Errors.user.emailAlreadyExist)
    }

    @EventPattern("user.update")
    async update(@Payload() updateUserData: UpdateUserDto): Promise<Users> {
        const existingUser = await this.usersService.findOne(
            { lastName: updateUserData.lastName },
            { relations: [] },
        )
        if (!!existingUser && existingUser.id !== updateUserData.user_id) {
            throw new RpcException(Errors.user.lastNameAlreadyExist)
        } else {
            return await this.usersService.update(
                Object.assign(
                    await this.usersService.findOne({ id: updateUserData.user_id }),
                    updateUserData,
                ),
            )
        }
    }

    @EventPattern("user.subscribe")
    async subscribeUser(@Payload() subscribeUserData: SubscribeUserDto,): Promise<SubscribeUserInterface> {
        const author = await this.usersService.findOne(
            { id: subscribeUserData.author_id },
            { relations: [] },
        )
        const subscriber = await this.usersService.findOne(
            { id: subscribeUserData.author_id },
            { relations: ["subscriptions"] },
        )
        if (!!subscriber.subscriptions.find((user) => user.id === author.id)) {
            subscriber.subscriptions = subscriber.subscriptions.filter(
                (user) => user.id !== author.id,
            )
        } else {
            subscriber.subscriptions.push(author)
        }
        await this.usersService.update(subscriber)
        return {
            author,
            subscriber,
        }
    }
}
