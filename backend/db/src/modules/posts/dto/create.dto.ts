import { Posts } from "../../../common/enities"
import { IsNotEmpty, IsOptional } from "class-validator"
import { Files } from "../../../common/enities"

export class CreatePostDto extends Posts {
    @IsNotEmpty()
    user_id: string

    @IsNotEmpty()
    file: Files

    @IsOptional()
    board_id: number
}
