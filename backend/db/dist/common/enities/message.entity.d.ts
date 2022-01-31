import { Dialogs } from "./dialog.entity";
import { Users } from "./users.entity";
import { Files } from "./files.entity";
export declare class Messages {
    id: number;
    value: string;
    viewed: boolean;
    dialog: Dialogs;
    user: Users;
    files: Files[];
}
