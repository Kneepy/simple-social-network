import { Repository } from "typeorm";
import { Files } from "../../common/enities";
import { CreateFileInterface, CreateFilesInterface } from "./dto/create.dto";
export declare class FilesService {
    private readonly repository;
    constructor(repository: Repository<Files>);
    create(createFileData: CreateFileInterface): Promise<Files>;
    createAreLot(createFilesData: CreateFilesInterface): Promise<CreateFilesInterface & Files>;
}
