import { IsNotEmpty, IsOptional } from "class-validator"
import { FindOneOptions } from "../../../index"
import { Likes } from "../../../common/enities/likes.entity"

export class ActionsLikeDto {
    @IsNotEmpty()
    comment_id: number

    @IsNotEmpty()
    user_id: string

    @IsOptional()
    options: FindOneOptions<Likes>
}
