import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { PostsModule } from "./modules/posts/posts.module"
import { UsersModule } from "./modules/users/users.module"
import { BoardsModule } from "./modules/boards/boards.module"
import { DialogsModule } from "./modules/dialogs/dialogs.module"
import { MessagesModule } from "./modules/messages/messages.module"
import { CommentsModule } from "./modules/comments/comments.module"
import { LikesModule } from "./modules/likes/likes.module"
import { FilesModule } from "./modules/files/files.module"

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        BoardsModule,
        PostsModule,
        UsersModule,
        DialogsModule,
        MessagesModule,
        CommentsModule,
        LikesModule,
        FilesModule,
    ],
})
export class AppModule {}
