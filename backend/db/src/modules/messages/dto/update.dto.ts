import { Messages } from "../../../common/enities"
import { IsNotEmpty } from "class-validator"

export class UpdateMessageDto extends Messages {
    @IsNotEmpty()
    message_id: number
}
