import { IsNotEmpty, IsOptional } from "class-validator"
import { Files } from "../../../common/enities"

export class CreateMessageDto {
    @IsNotEmpty()
    dialog_id: number

    @IsNotEmpty()
    user_id: string

    @IsNotEmpty()
    value: string

    @IsOptional()
    files: Files[]
}
