import {
    BaseWsExceptionFilter, ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import {Inject, UseFilters} from "@nestjs/common";
import {DB_MICROSERVICE_MODULE, EVENTS, FILES_MICROSERVICE_MODULE} from "../app.constants";
import {ClientProxy} from "@nestjs/microservices";
import {BaseGateway} from "./base.gateway";
import {Socket, Server} from "socket.io";

@WebSocketGateway()
@UseFilters(BaseWsExceptionFilter)
export class UsersGateway {
    constructor(
        @Inject(DB_MICROSERVICE_MODULE) private dbMicroservice: ClientProxy,
        private baseGateway: BaseGateway
    ) {}

    @WebSocketServer() server: Server

    @SubscribeMessage(EVENTS.USER.SUBSCRIBE)
    async subscribeUser(@MessageBody() subscribeUserData, @ConnectedSocket() client: Socket) {
        const subscribeResult = await this.dbMicroservice.send("user.subscribe", subscribeUserData).toPromise()
        this.server
            .to(this.baseGateway.getSocketIds(subscribeResult.subscriber.id, subscribeResult.author.id))
            .emit(EVENTS.USER.SUBSCRIBE_RESULT, subscribeResult)
    }
}