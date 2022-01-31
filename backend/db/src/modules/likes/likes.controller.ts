import { Controller, UseFilters, UsePipes } from "@nestjs/common"
import { BaseRpcExceptionFilter, EventPattern, Payload } from "@nestjs/microservices"
import { CommentsService } from "../comments/comments.service"
import { UsersService } from "../users/users.service"
import { ActionsLikeDto } from "./dto/create.dto"
import { ValidationPipe } from "../../common/pipes"
import { Comments, Likes } from "../../common/enities"

@Controller()
@UsePipes(ValidationPipe)
@UseFilters(BaseRpcExceptionFilter)
export class LikesController {
    constructor(
        private readonly usersService: UsersService,
        private readonly commentsService: CommentsService,
    ) {}

    @EventPattern("like.create.comment")
    async addLikeToComment(@Payload() payload: ActionsLikeDto): Promise<Comments> {
        const comment = await this.commentsService.findOne(
            { id: payload.comment_id },
            { relations: ["likes"] },
        )
        const user = await this.usersService.findOne({ id: payload.user_id })

        if (!!comment.likes.find((like) => like.user.id === payload.user_id)) {
            comment.likes.filter((like) => like.user.id !== payload.user_id)
        } else {
            const like = Object.assign(new Likes(), { user })
            comment.likes.push(like)
        }

        return await this.commentsService.update(comment)
    }
}
