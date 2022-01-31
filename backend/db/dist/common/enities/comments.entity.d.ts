import { Users } from "./users.entity";
import { Posts } from "./posts.entity";
import { Likes } from "./likes.entity";
export declare class Comments {
    id: number;
    value: string;
    user: Users;
    post: Posts;
    answers: Comments[];
    likes: Likes[];
}
