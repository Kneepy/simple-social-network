import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Users } from "../../common/enities"
import { Repository } from "typeorm"
import { FindOneOptions } from "../../index"
import { CreateUserDto, DeleteUserInterface, FindUserInterface } from "./dto"

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private repository: Repository<Users>) {}

    async create(createUserDto: CreateUserDto & Pick<Users, "lastName">): Promise<Users> {
        return await this.repository.save(createUserDto)
    }

    async findOne(
        params: FindUserInterface,
        options: FindOneOptions<Users> = {
            relations: [
                "posts",
                "boards",
                "boards.posts",
                "dialogs",
                "dialogs.users",
                "files",
                "likes",
                "comments",
                "messages",
                "avatar",
                "subscriptions",
                "subscribers",
                "accounts"
            ],
        },
    ): Promise<Users> {
        Object.keys(params).forEach((param) => params[param] === undefined && delete params[param])
        return await this.repository.findOne(params, options)
    }

    async update(updateUserDto: Users): Promise<Users> {
        return await this.repository.save(updateUserDto)
    }

    async delete(params: DeleteUserInterface): Promise<any> {
        return await this.repository.delete(params)
    }
}
