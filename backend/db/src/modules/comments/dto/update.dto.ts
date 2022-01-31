import { Comments } from "../../../common/enities/comments.entity"
import { IsNotEmpty } from "class-validator"

export class UpdateCommentDto extends Comments {
    @IsNotEmpty()
    comment_id: number
}
