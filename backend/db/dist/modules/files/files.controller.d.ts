import { FilesService } from "./files.service";
import { CreateFileDto, CreateFilesDto } from "./dto/create.dto";
import { UsersService } from "../users/users.service";
export declare class FilesController {
    private readonly usersService;
    private readonly filesService;
    constructor(usersService: UsersService, filesService: FilesService);
    createFile(payload: CreateFileDto): Promise<import("../../common").Files>;
    createFiles(payload: CreateFilesDto): Promise<import("./dto/create.dto").CreateFilesInterface & import("../../common").Files>;
}
