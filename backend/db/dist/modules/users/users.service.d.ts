import { Users } from "../../common/enities";
import { Repository } from "typeorm";
import { FindOneOptions } from "../../index";
import { CreateUserDto, DeleteUserInterface, FindUserInterface } from "./dto";
export declare class UsersService {
    private repository;
    constructor(repository: Repository<Users>);
    create(createUserDto: CreateUserDto & Pick<Users, "lastName">): Promise<Users>;
    findOne(params: FindUserInterface, options?: FindOneOptions<Users>): Promise<Users>;
    update(updateUserDto: Users): Promise<Users>;
    delete(params: DeleteUserInterface): Promise<any>;
}
