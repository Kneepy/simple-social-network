import { BoardsService } from "./boards.service";
import { CreateBoardDto } from "./dto/create.dto";
import { AttachPostOnBoard, UpdateBoardDto } from "./dto/update.dto";
import { FindBoardDto } from "./dto/find.dto";
import { DeleteBoardDto } from "./dto/delete.dto";
import { UsersService } from "../users/users.service";
import { Boards, Users } from "../../common/enities";
import { PostsService } from "../posts/posts.service";
export declare class BoardsController {
    private readonly boardsService;
    private readonly usersService;
    private readonly postsService;
    constructor(boardsService: BoardsService, usersService: UsersService, postsService: PostsService);
    findBoardById(payload: FindBoardDto): Promise<Boards>;
    createBoard(payload: CreateBoardDto): Promise<Users>;
    attachPostOnBoard(payload: AttachPostOnBoard): Promise<Boards>;
    updateBoard(payload: UpdateBoardDto): Promise<Boards>;
    removeBoard(params: DeleteBoardDto): Promise<any>;
}
