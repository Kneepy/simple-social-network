import { CommentsService } from "./comments.service";
import { FindCommentDto } from "./dto/find.dto";
import { CreateAnswerCommentDto, CreateCommentDto } from "./dto/create.dto";
import { UsersService } from "../users/users.service";
import { PostsService } from "../posts/posts.service";
import { DeleteCommentDto } from "./dto/delete.dto";
import { Comments, Posts } from "../../common/enities";
export declare class CommentsController {
    private readonly commentsService;
    private readonly usersService;
    private readonly postsService;
    constructor(commentsService: CommentsService, usersService: UsersService, postsService: PostsService);
    findComment(payload: FindCommentDto): Promise<Comments>;
    createComment(payload: CreateCommentDto): Promise<Posts>;
    createAnswerComment(payload: CreateAnswerCommentDto): Promise<Comments>;
    deleteComment(deleteCommentData: DeleteCommentDto): Promise<void>;
}
