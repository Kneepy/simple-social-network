import { Controller, UseFilters, UsePipes } from "@nestjs/common"
import { FilesService } from "./files.service"
import { BaseRpcExceptionFilter, EventPattern, Payload } from "@nestjs/microservices"
import { CreateFileDto, CreateFilesDto } from "./dto/create.dto"
import { UsersService } from "../users/users.service"
import { ValidationPipe } from "../../common/pipes/validation.pipe"

@Controller()
@UsePipes(ValidationPipe)
@UseFilters(BaseRpcExceptionFilter)
export class FilesController {
    constructor(
        private readonly usersService: UsersService,
        private readonly filesService: FilesService,
    ) {}

    @EventPattern("file.create")
    async createFile(@Payload() payload: CreateFileDto) {
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] })
        return await this.filesService.create({ fileName: payload.fileName, user })
    }

    @EventPattern("files.create")
    async createFiles(@Payload() payload: CreateFilesDto) {
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] })
        return await this.filesService.createAreLot(
            payload.fileNames.map((fileName) => ({ fileName, user })),
        )
    }
}
