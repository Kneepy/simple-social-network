import { Module } from "@nestjs/common"
import { FilesService } from "./files.service"
import { FilesController } from "./files.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { Files } from "../../common/enities"
import { UsersModule } from "../users/users.module"

@Module({
    imports: [TypeOrmModule.forFeature([Files]), UsersModule],
    controllers: [FilesController],
    providers: [FilesService],
})
export class FilesModule {}
