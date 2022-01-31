import { ClientProxy } from "@nestjs/microservices";
import { BaseGateway } from "./base.gateway";
import { Socket, Server } from "socket.io";
export declare class UsersGateway {
    private dbMicroservice;
    private baseGateway;
    constructor(dbMicroservice: ClientProxy, baseGateway: BaseGateway);
    server: Server;
    subscribeUser(subscribeUserData: any, client: Socket): Promise<void>;
}
