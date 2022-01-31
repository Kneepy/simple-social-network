import { Posts } from "../../../common/enities";
import { Files } from "../../../common/enities";
export declare class CreatePostDto extends Posts {
    user_id: string;
    file: Files;
    board_id: number;
}
