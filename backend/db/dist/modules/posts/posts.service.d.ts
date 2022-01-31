import { Repository } from "typeorm";
import { FindOneOptions } from "../../index";
import { Posts } from "../../common/enities";
import { DeletePostDto, FindPostInterface } from "./dto";
export declare class PostsService {
    private repository;
    constructor(repository: Repository<Posts>);
    find(): Promise<Posts[]>;
    findOne(params: FindPostInterface, options?: FindOneOptions<Posts>): Promise<Posts>;
    update(updatePostDto: Posts): Promise<Posts>;
    delete(params: DeletePostDto): Promise<any>;
}
