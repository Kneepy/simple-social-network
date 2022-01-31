import { CommentsService } from "../comments/comments.service";
import { UsersService } from "../users/users.service";
import { ActionsLikeDto } from "./dto/create.dto";
import { Comments } from "../../common/enities";
export declare class LikesController {
    private readonly usersService;
    private readonly commentsService;
    constructor(usersService: UsersService, commentsService: CommentsService);
    addLikeToComment(payload: ActionsLikeDto): Promise<Comments>;
}
