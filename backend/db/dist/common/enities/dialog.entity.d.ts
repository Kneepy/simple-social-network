import { Users } from "./users.entity";
import { Messages } from "./message.entity";
export declare class Dialogs {
    id: number;
    users: Users[];
    messages: Messages[];
}
