import { Module } from "@nestjs/common"
import { PostsService } from "./posts.service"
import { PostsController } from "./posts.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Posts } from "../../common/enities"
import { UsersModule } from "../users/users.module"

@Module({
    imports: [TypeOrmModule.forFeature([Posts]), UsersModule],
    controllers: [PostsController],
    providers: [PostsService],
    exports: [PostsService],
})
export class PostsModule {}
