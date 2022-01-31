import { Module } from "@nestjs/common"
import { LikesController } from "./likes.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Likes } from "../../common/enities"
import { CommentsModule } from "../comments/comments.module"
import { UsersModule } from "../users/users.module"

@Module({
    imports: [TypeOrmModule.forFeature([Likes]), CommentsModule, UsersModule],
    controllers: [LikesController],
})
export class LikesModule {}
