import {Inject, UseFilters} from "@nestjs/common";
import {DB_MICROSERVICE_MODULE, EVENTS} from "../app.constants";
import {ClientProxy} from "@nestjs/microservices";
import {BaseGateway} from "./base.gateway";
import {
    BaseWsExceptionFilter, ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";

@WebSocketGateway()
@UseFilters(BaseWsExceptionFilter)
export class PostsGateway {
    constructor(
        @Inject(DB_MICROSERVICE_MODULE) private dbMicroservice: ClientProxy,
        private baseGateway: BaseGateway
    ) {}

    @WebSocketServer() server: Server

    @SubscribeMessage(EVENTS.POST.ADD_COMMENT)
    async addCommentToPost(@MessageBody() addCommentData, @ConnectedSocket() client: Socket) {
        const updatedPost = await this.dbMicroservice.send("comment.create", addCommentData).toPromise()
        this.server
            .to(this.baseGateway.getSocketIdsFromPostRooms(updatedPost.id))
            .emit(EVENTS.POST.ADD_COMMENT_RESULT, updatedPost)
    }

    @SubscribeMessage(EVENTS.POST.ADD_ANSWER)
    async addAnswerAtCommentToPost(@MessageBody() addCommentData, @ConnectedSocket() client: Socket) {
        const updatedComment = await this.dbMicroservice.send("comment.create.answer", addCommentData).toPromise()
        this.server
            .to(this.baseGateway.getSocketIdsFromPostRooms(updatedComment.post.id))
            .emit(EVENTS.POST.ADD_ANSWER_RESULT, updatedComment)
    }
}