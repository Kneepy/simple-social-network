import { IsNotEmpty } from "class-validator"

export class DeleteCommentDto {
    @IsNotEmpty()
    comment_id: number
}

export interface DeleteCommentInterface {
    id: number
}
