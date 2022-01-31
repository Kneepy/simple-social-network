import { Controller, UseFilters, UsePipes } from "@nestjs/common"
import { CommentsService } from "./comments.service"
import { BaseRpcExceptionFilter, EventPattern, Payload } from "@nestjs/microservices"
import { FindCommentDto } from "./dto/find.dto"
import { ValidationPipe } from "../../common/pipes"
import { CreateAnswerCommentDto, CreateCommentDto } from "./dto/create.dto"
import { UsersService } from "../users/users.service"
import { PostsService } from "../posts/posts.service"
import { DeleteCommentDto } from "./dto/delete.dto"
import { Comments, Posts } from "../../common/enities"

@Controller()
@UsePipes(ValidationPipe)
@UseFilters(BaseRpcExceptionFilter)
export class CommentsController {
    constructor(
        private readonly commentsService: CommentsService,
        private readonly usersService: UsersService,
        private readonly postsService: PostsService,
    ) {}

    @EventPattern("comment.find")
    async findComment(@Payload() payload: FindCommentDto): Promise<Comments> {
        return await this.commentsService.findOne({ id: payload.comment_id }, payload.options)
    }

    @EventPattern("comment.create")
    async createComment(@Payload() payload: CreateCommentDto): Promise<Posts> {
        const post = await this.postsService.findOne(
            { id: payload.post_id },
            { relations: ["comments"] },
        )
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] })
        const comment: Comments = Object.assign(new Comments(), { value: payload.value, user })
        post.comments.push(comment)
        return await this.postsService.update(post)
    }

    @EventPattern("comment.create.answer")
    async createAnswerComment(@Payload() payload: CreateAnswerCommentDto): Promise<Comments> {
        const comment = await this.commentsService.findOne(
            { id: payload.comment_id },
            { relations: ["answers", "post", "post.comments"] },
        )
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] })
        const answer: Comments = Object.assign(new Comments(), { user, value: payload.value })
        comment.post.comments.find((comm) => comm.id === comment.id).answers.push(answer)

        return await this.commentsService.update(comment)
    }

    @EventPattern("comment.delete")
    async deleteComment(@Payload() deleteCommentData: DeleteCommentDto) {}
}
