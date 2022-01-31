import { FindOneOptions } from "../../../index";
import { Likes } from "../../../common/enities/likes.entity";
export declare class ActionsLikeDto {
    comment_id: number;
    user_id: string;
    options: FindOneOptions<Likes>;
}
