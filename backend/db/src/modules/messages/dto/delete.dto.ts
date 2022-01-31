import { IsNotEmpty } from "class-validator"

export class DeleteMessageDto {
    @IsNotEmpty()
    message_id: number
}
