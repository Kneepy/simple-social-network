import { ClientProxy } from "@nestjs/microservices";
import { Server, Socket } from "socket.io";
export declare class BoardsGateway {
    private dbMicroservice;
    constructor(dbMicroservice: ClientProxy);
    server: Server;
    addPostToBoard(addPostData: any, client: Socket): Promise<void>;
}
