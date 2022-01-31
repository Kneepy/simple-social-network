import { Posts } from "./posts.entity";
import { Users } from "./users.entity";
export declare class Boards {
    id: number;
    boardName: string;
    personal: boolean;
    description?: string;
    user: Users;
    posts: Posts[];
}
