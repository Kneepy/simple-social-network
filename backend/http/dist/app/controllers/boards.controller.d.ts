import { ClientProxy } from "@nestjs/microservices";
import { HeadersInterface } from "../interfaces/headers.interface";
export declare class BoardsController {
    private readonly dbMicroservice;
    constructor(dbMicroservice: ClientProxy);
    createBoard(createBoardData: any, headers: HeadersInterface): Promise<any>;
    findBoard(findBoardParams: any): Promise<any>;
    deleteBoard(deleteBoardParams: any): Promise<any>;
}
