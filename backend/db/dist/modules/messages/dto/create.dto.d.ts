import { Files } from "../../../common/enities";
export declare class CreateMessageDto {
    dialog_id: number;
    user_id: string;
    value: string;
    files: Files[];
}
