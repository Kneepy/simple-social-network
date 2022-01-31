import { Repository } from "typeorm";
import { Boards } from "../../common";
import { FindBoardInterface } from "./dto/find.dto";
import { DeleteBoardDto } from "./dto/delete.dto";
import { FindOneOptions } from "../../index";
export declare class BoardsService {
    private repository;
    constructor(repository: Repository<Boards>);
    findOne(params: FindBoardInterface, options?: FindOneOptions<Boards>): Promise<Boards>;
    update(updateDataBoard: Boards): Promise<Boards>;
    delete(params: DeleteBoardDto): Promise<any>;
}
