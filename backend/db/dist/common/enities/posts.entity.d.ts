import { Users } from "./users.entity";
import { Boards } from "./boards.entity";
import { Comments } from "./comments.entity";
import { Files } from "./files.entity";
export declare class Posts {
    id: number;
    title: string;
    description: string;
    link: string;
    file: Files;
    user: Users;
    comments: Comments[];
    boards: Boards[];
}
