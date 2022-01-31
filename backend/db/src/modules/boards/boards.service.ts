import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Boards } from "../../common"
import { FindBoardInterface } from "./dto/find.dto"
import { DeleteBoardDto } from "./dto/delete.dto"
import { FindOneOptions } from "../../index"

@Injectable()
export class BoardsService {
    constructor(@InjectRepository(Boards) private repository: Repository<Boards>) {}

    async findOne(
        params: FindBoardInterface,
        options: FindOneOptions<Boards> = { relations: ["user", "posts"] },
    ): Promise<Boards> {
        return this.repository.findOne(params, options)
    }

    async update(updateDataBoard: Boards): Promise<Boards> {
        return this.repository.save(updateDataBoard)
    }

    async delete(params: DeleteBoardDto): Promise<any> {
        return this.repository.delete(params)
    }
}
