import { FindOneOptions } from "../../../index";
import { Comments } from "../../../common/enities/comments.entity";
export declare class FindCommentDto {
    comment_id: number;
    options: FindOneOptions<Comments>;
}
export interface FindCommentInterface {
    id: number;
}
