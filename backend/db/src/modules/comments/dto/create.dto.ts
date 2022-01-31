import { IsNotEmpty } from "class-validator"

export class CreateCommentDto {
    @IsNotEmpty()
    value: string

    @IsNotEmpty()
    user_id: string

    @IsNotEmpty()
    post_id: number
}

export class CreateAnswerCommentDto {
    @IsNotEmpty()
    comment_id: number

    @IsNotEmpty()
    user_id: string

    @IsNotEmpty()
    value: string
}
