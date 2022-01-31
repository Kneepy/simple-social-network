import { UsersService } from "./users.service";
import { Users } from "../../common/enities";
import { SubscribeUserDto, CreateUserDto, FindUserDto, UpdateUserDto, AddAccountDto } from "./dto";
import { SubscribeUserInterface } from "./interfaces";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findOneUser(findOneUserData: FindUserDto): Promise<Users>;
    addUserAccount(payload: AddAccountDto): Promise<Users>;
    create(createUserDto: CreateUserDto): Promise<Users>;
    update(updateUserData: UpdateUserDto): Promise<Users>;
    subscribeUser(subscribeUserData: SubscribeUserDto): Promise<SubscribeUserInterface>;
}
