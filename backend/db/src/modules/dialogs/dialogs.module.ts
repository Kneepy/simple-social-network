import { Module } from "@nestjs/common"
import { DialogsService } from "./dialogs.service"
import { DialogsController } from "./dialogs.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Dialogs } from "../../common/enities"
import { UsersModule } from "../users/users.module"

@Module({
    imports: [TypeOrmModule.forFeature([Dialogs]), UsersModule],
    controllers: [DialogsController],
    providers: [DialogsService],
    exports: [DialogsService],
})
export class DialogsModule {}
