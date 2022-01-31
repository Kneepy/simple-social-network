import { Controller, forwardRef, Inject, UseFilters, UsePipes } from "@nestjs/common"
import { BaseRpcExceptionFilter, EventPattern, Payload } from "@nestjs/microservices"
import { PostsService } from "./posts.service"
import { ValidationPipe } from "../../common/pipes"
import { UsersService } from "../users/users.service"
import { Posts, Users } from "../../common/enities"
import { CreatePostDto, DeletePostDto, FindPostDto, UpdatePostDto } from "./dto"

@Controller()
@UsePipes(ValidationPipe)
@UseFilters(BaseRpcExceptionFilter)
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
        private readonly usersService: UsersService,
    ) {}

    @EventPattern("post.create")
    async create(@Payload() createPostDto: CreatePostDto): Promise<Users> {
        const user = await this.usersService.findOne(
            { id: createPostDto.user_id },
            { relations: ["posts"] },
        )
        user.posts.push(createPostDto)
        return await this.usersService.update(user)
    }

    @EventPattern("post.all")
    async all(): Promise<Posts[]> {
        return this.postsService.find()
    }

    @EventPattern("post.find")
    async findOne(@Payload() findPostData: FindPostDto): Promise<Posts> {
        return await this.postsService.findOne({ id: findPostData.post_id }, findPostData.options)
    }

    @EventPattern("post.update")
    async update(@Payload() payload: UpdatePostDto): Promise<Posts> {
        return await this.postsService.update(
            Object.assign(await this.postsService.findOne({ id: payload.post_id }), payload),
        )
    }

    @EventPattern("post.delete")
    async delete(@Payload() params: DeletePostDto) {}
}
