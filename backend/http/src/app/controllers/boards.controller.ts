import {Body, Controller, Inject, Post, Headers, UseFilters, Get, Param, Delete} from "@nestjs/common";
import {DB_MICROSERVICE_MODULE_NAME} from "../app.constants";
import {ClientProxy} from "@nestjs/microservices";
import {HeadersInterface} from "../interfaces/headers.interface";
import {HttpExceptionFilter} from "../filters/http.filter";

@Controller("board")
@UseFilters(HttpExceptionFilter)
export class BoardsController {
    constructor(
        @Inject(DB_MICROSERVICE_MODULE_NAME) private readonly dbMicroservice: ClientProxy,
    ) {}

    @Post()
    async createBoard(@Body() createBoardData, @Headers() headers: HeadersInterface) {
        return await this.dbMicroservice.send("board.create", {...createBoardData, user_id: headers.authorization}).toPromise()
    }

    @Get(":board_id")
    async findBoard(@Param() findBoardParams) {
        return await this.dbMicroservice.send("board.find", {board_id: findBoardParams.board_id}).toPromise()
    }

    @Delete(":board_id")
    async deleteBoard(@Param() deleteBoardParams) {
        return await this.dbMicroservice.send("board.delete", {board_id: deleteBoardParams.board_id}).toPromise()
    }
}