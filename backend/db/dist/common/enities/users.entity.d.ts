import { Boards } from "./boards.entity";
import { Posts } from "./posts.entity";
import { Dialogs } from "./dialog.entity";
import { Messages } from "./message.entity";
import { Comments } from "./comments.entity";
import { Likes } from "./likes.entity";
import { Files } from "./files.entity";
export declare class Users {
    id: string;
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    surname: string;
    info: string;
    website: string;
    active: boolean;
    avatar: Files;
    boards: Boards[];
    posts: Posts[];
    dialogs: Dialogs[];
    subscriptions: Users[];
    subscribers: Users[];
    messages: Messages[];
    comments: Comments[];
    likes: Likes[];
    files: Files[];
    accounts: Users[];
}
