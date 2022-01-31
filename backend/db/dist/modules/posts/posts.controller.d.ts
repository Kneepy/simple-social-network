import { PostsService } from "./posts.service";
import { UsersService } from "../users/users.service";
import { Posts, Users } from "../../common/enities";
import { CreatePostDto, DeletePostDto, FindPostDto, UpdatePostDto } from "./dto";
export declare class PostsController {
    private readonly postsService;
    private readonly usersService;
    constructor(postsService: PostsService, usersService: UsersService);
    create(createPostDto: CreatePostDto): Promise<Users>;
    all(): Promise<Posts[]>;
    findOne(findPostData: FindPostDto): Promise<Posts>;
    update(payload: UpdatePostDto): Promise<Posts>;
    delete(params: DeletePostDto): Promise<void>;
}
