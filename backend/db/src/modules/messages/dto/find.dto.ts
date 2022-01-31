import { IsNotEmpty } from "class-validator"
import { FindOneOptions } from "../../../index"
import { Messages } from "../../../common/enities/message.entity"

export class FindMessageDto {
    @IsNotEmpty()
    message_id: number

    options: FindOneOptions<Messages>
}

export interface FindMessageInterface {
    id: number
}
