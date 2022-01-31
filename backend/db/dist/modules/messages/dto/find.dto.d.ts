import { FindOneOptions } from "../../../index";
import { Messages } from "../../../common/enities/message.entity";
export declare class FindMessageDto {
    message_id: number;
    options: FindOneOptions<Messages>;
}
export interface FindMessageInterface {
    id: number;
}
