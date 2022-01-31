import { Module } from "@nestjs/common"
import { BoardsService } from "./boards.service"
import { BoardsController } from "./boards.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Boards } from "../../common/enities"
import { UsersModule } from "../users/users.module"
import { PostsModule } from "../posts/posts.module"

@Module({
    imports: [TypeOrmModule.forFeature([Boards]), UsersModule, PostsModule],
    controllers: [BoardsController],
    providers: [BoardsService],
    exports: [BoardsService],
})
export class BoardsModule {}
