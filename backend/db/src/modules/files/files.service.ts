import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Files } from "../../common/enities"
import { CreateFileInterface, CreateFilesInterface } from "./dto/create.dto"

@Injectable()
export class FilesService {
    constructor(@InjectRepository(Files) private readonly repository: Repository<Files>) {}

    async create(createFileData: CreateFileInterface): Promise<Files> {
        return this.repository.save(createFileData)
    }

    async createAreLot(createFilesData: CreateFilesInterface) {
        return this.repository.save(createFilesData)
    }
}
