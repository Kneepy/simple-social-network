import { Module } from "@nestjs/common"
import { CommentsService } from "./comments.service"
import { CommentsController } from "./comments.controller"
import { Comments } from "../../common/enities"
import { TypeOrmModule } from "@nestjs/typeorm"
import { PostsModule } from "../posts/posts.module"
import { UsersModule } from "../users/users.module"

@Module({
    imports: [TypeOrmModule.forFeature([Comments]), PostsModule, UsersModule],
    controllers: [CommentsController],
    providers: [CommentsService],
    exports: [CommentsService],
})
export class CommentsModule {}
