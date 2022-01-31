import { ClientProxy } from "@nestjs/microservices";
import { CreateFileDto, CreateFilesDto } from "./dto/create.dto";
export declare class AppController {
    private readonly dbMicroservice;
    constructor(dbMicroservice: ClientProxy);
    createFile(createFileData: CreateFileDto): Promise<any>;
    createFiles(createFilesData: CreateFilesDto): Promise<any>;
}
