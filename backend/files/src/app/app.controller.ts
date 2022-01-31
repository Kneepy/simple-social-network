import {Controller, Inject, UseFilters, UseInterceptors, UsePipes} from '@nestjs/common';
import {BaseRpcExceptionFilter, ClientProxy, EventPattern, Payload} from "@nestjs/microservices";
import {FileRpcInterceptor} from "./interceptors/file.interceptor";
import {DB_MICROSERVICE_MODULE_NAME} from "./app.constants";
import {ValidationPipe} from "../pipes/validation.pipe";
import {CreateFileDto, CreateFilesDto} from "./dto/create.dto";
import {FilesRpcInterceptor} from "./interceptors/files.interceptor";

@Controller()
@UsePipes(ValidationPipe)
@UseFilters(BaseRpcExceptionFilter)
export class AppController {
    constructor(
        @Inject(DB_MICROSERVICE_MODULE_NAME) private readonly dbMicroservice: ClientProxy,
    ) {}

    @EventPattern("store.upload")
    @UseInterceptors(FileRpcInterceptor("file"))
    async createFile(@Payload() createFileData: CreateFileDto) {
        return await this.dbMicroservice.send("file.create", {user_id: createFileData.user_id, fileName: createFileData.file.originalname}).toPromise()
    }

    @EventPattern("store.upload.multiply")
    @UseInterceptors(FilesRpcInterceptor("files"))
    async createFiles(@Payload() createFilesData: CreateFilesDto) {
        return await this.dbMicroservice.send("files.create", {user_id: createFilesData.user_id, fileNames: createFilesData.files.map(file => file.originalname)}).toPromise()
    }
}
