import { Controller, UseFilters, UsePipes } from "@nestjs/common"
import { BaseRpcExceptionFilter, EventPattern, Payload, RpcException } from "@nestjs/microservices"
import { BoardsService } from "./boards.service"
import { CreateBoardDto } from "./dto/create.dto"
import { AttachPostOnBoard, UpdateBoardDto } from "./dto/update.dto"
import { FindBoardDto } from "./dto/find.dto"
import { DeleteBoardDto } from "./dto/delete.dto"
import { UsersService } from "../users/users.service"
import { ValidationPipe } from "../../common/pipes"
import { Boards, Users } from "../../common/enities"
import { PostsService } from "../posts/posts.service"
import { Errors } from "../../common"

@Controller()
@UsePipes(ValidationPipe)
@UseFilters(BaseRpcExceptionFilter)
export class BoardsController {
    constructor(
        private readonly boardsService: BoardsService,
        private readonly usersService: UsersService,
        private readonly postsService: PostsService,
    ) {}

    @EventPattern("board.find")
    async findBoardById(@Payload() payload: FindBoardDto): Promise<Boards> {
        return await this.boardsService.findOne({ id: payload.board_id }, payload.options)
    }

    @EventPattern("board.create")
    async createBoard(@Payload() payload: CreateBoardDto): Promise<Users> {
        const user = await this.usersService.findOne(
            { id: payload.user_id },
            { relations: ["boards"] },
        )

        if (!!user.boards.find((board) => board.boardName === payload.boardName)) {
            throw new RpcException(Errors.board.alreadyExists)
        }

        user.boards.push(payload)
        return await this.usersService.update(user)
    }

    @EventPattern("board.save.post")
    async attachPostOnBoard(@Payload() payload: AttachPostOnBoard): Promise<Boards> {
        const board = await this.boardsService.findOne(
            { id: payload.board_id },
            { relations: ["posts", "content.user"] },
        )
        const post = await this.postsService.findOne({ id: payload.post_id }, { relations: [] })
        board.posts.push(post)

        return await this.boardsService.update(board)
    }

    @EventPattern("board.update")
    async updateBoard(@Payload() payload: UpdateBoardDto): Promise<Boards> {
        return await this.boardsService.update(
            Object.assign(await this.boardsService.findOne({ id: payload.board_id }), payload),
        )
    }

    @EventPattern("board.delete")
    async removeBoard(@Payload() params: DeleteBoardDto): Promise<any> {}
}
