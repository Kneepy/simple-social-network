import { Module } from "@nestjs/common"
import { MessagesService } from "./messages.service"
import { MessagesController } from "./messages.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Messages } from "../../common"
import { UsersModule } from "../users/users.module"
import { DialogsModule } from "../dialogs/dialogs.module"

@Module({
    imports: [TypeOrmModule.forFeature([Messages]), UsersModule, DialogsModule],
    controllers: [MessagesController],
    providers: [MessagesService],
    exports: [MessagesService],
})
export class MessagesModule {}
