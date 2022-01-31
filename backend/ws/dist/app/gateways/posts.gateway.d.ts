import { ClientProxy } from "@nestjs/microservices";
import { BaseGateway } from "./base.gateway";
import { Server, Socket } from "socket.io";
export declare class PostsGateway {
    private dbMicroservice;
    private baseGateway;
    constructor(dbMicroservice: ClientProxy, baseGateway: BaseGateway);
    server: Server;
    addCommentToPost(addCommentData: any, client: Socket): Promise<void>;
    addAnswerAtCommentToPost(addCommentData: any, client: Socket): Promise<void>;
}
