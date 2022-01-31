import { IsNotEmpty } from "class-validator"
import { FindOneOptions } from "../../../index"
import { Comments } from "../../../common/enities/comments.entity"

export class FindCommentDto {
    @IsNotEmpty()
    comment_id: number

    options: FindOneOptions<Comments>
}

export interface FindCommentInterface {
    id: number
}
