import {
    BaseWsExceptionFilter, ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import {Inject, UseFilters} from "@nestjs/common";
import {DB_MICROSERVICE_MODULE, EVENTS} from "../app.constants";
import {ClientProxy} from "@nestjs/microservices";
import {BaseGateway} from "./base.gateway";
import {Server, Socket} from "socket.io";

@WebSocketGateway()
@UseFilters(BaseWsExceptionFilter)
export class BoardsGateway {
    constructor(
        @Inject(DB_MICROSERVICE_MODULE) private dbMicroservice: ClientProxy,
    ) {}

    @WebSocketServer() server: Server

    @SubscribeMessage(EVENTS.BOARD.ADD_POST)
    async addPostToBoard(@MessageBody() addPostData, @ConnectedSocket() client: Socket) {
        const updatedBoard = await this.dbMicroservice.send("board.save.post", addPostData)
        this.server.to(client.id).emit(EVENTS.BOARD.ADD_POST_RESULT, updatedBoard)
    }
}