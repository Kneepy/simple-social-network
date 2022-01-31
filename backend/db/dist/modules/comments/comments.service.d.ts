import { Comments } from "../../common";
import { Repository } from "typeorm";
import { FindCommentInterface } from "./dto/find.dto";
import { DeleteCommentInterface } from "./dto/delete.dto";
import { FindOneOptions } from "../../index";
export declare class CommentsService {
    private readonly repository;
    constructor(repository: Repository<Comments>);
    findOne(findCommentData: FindCommentInterface, options?: FindOneOptions<Comments>): Promise<Comments>;
    update(updateCommentData: Comments): Promise<Comments>;
    delete(deleteCommentData: DeleteCommentInterface): Promise<import("typeorm").DeleteResult>;
}
