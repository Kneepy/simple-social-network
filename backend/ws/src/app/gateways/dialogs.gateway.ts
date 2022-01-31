import {
    BaseWsExceptionFilter, ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway, WebSocketServer
} from '@nestjs/websockets';
import {Inject, UseFilters} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {Socket, Server} from 'socket.io'
import {DB_MICROSERVICE_MODULE, EVENTS, FILES_MICROSERVICE_MODULE} from "../app.constants";
import {BaseGateway} from "./base.gateway";

@WebSocketGateway()
@UseFilters(BaseWsExceptionFilter)
export class DialogsGateway {
    constructor(
        @Inject(DB_MICROSERVICE_MODULE) private dbMicroservice: ClientProxy,
        @Inject(FILES_MICROSERVICE_MODULE) private filesMicroservice: ClientProxy,
        private baseGateway: BaseGateway
    ) {}

    @WebSocketServer() private server: Server

    @SubscribeMessage(EVENTS.DIALOG.GET)
    async findDialog(@MessageBody() findDialogData, @ConnectedSocket() client: Socket) {
        const dialog = await this.dbMicroservice.send("dialog.find", findDialogData).toPromise()
        this.server
            .to(this.baseGateway.getSocketIds(dialog.users.map(user => user.id)))
            .emit(EVENTS.DIALOG.GET_RESULT, dialog)
    }

    @SubscribeMessage(EVENTS.DIALOG.CREATE)
    async createDialog(@MessageBody() createDialogData, @ConnectedSocket() client: Socket) {
        const createdDialog = await this.dbMicroservice.send("dialog.create", createDialogData).toPromise()
        this.server
            .to(this.baseGateway.getSocketIds(createdDialog.users.map(user => user.id)))
            .emit(EVENTS.DIALOG.CREATE_RESULT, createdDialog)
    }

    @SubscribeMessage(EVENTS.DIALOG.UPDATE.ADD_USER)
    async addUserToDialog(@MessageBody() addUserToDialogData, @ConnectedSocket() client: Socket) {
        const updatedDialog = await this.dbMicroservice.send("dialog.add_user", addUserToDialogData).toPromise()
        this.server
            .to(updatedDialog.users.map(user => user.id))
            .emit(EVENTS.DIALOG.UPDATE_RESULT, updatedDialog)
    }

    @SubscribeMessage(EVENTS.DIALOG.MESSAGE.CREATE)
    async createMessage(@MessageBody() createMessageData, @ConnectedSocket() client: Socket) {
        if(createMessageData.files) {
            createMessageData.files = await this.filesMicroservice.send("store.upload.multiply", {
                user_id: createMessageData.user_id,
                files: createMessageData.files
            }).toPromise()
        }

        const updatedDialog = await this.dbMicroservice.send("message.create", createMessageData).toPromise()
        this.server
            .to(this.baseGateway.getSocketIds(updatedDialog.users.map(user => user.id)))
            .emit(EVENTS.DIALOG.MESSAGE.CREATE_RESULT, updatedDialog)
    }

    @SubscribeMessage(EVENTS.DIALOG.MESSAGE.UPDATE)
    async updateMessage(@MessageBody() addUserToDialogData, @ConnectedSocket() client: Socket) {
        const updatedMessage = await this.dbMicroservice.send("message.update", addUserToDialogData).toPromise()
        this.server
            .to(this.baseGateway.getSocketIds(updatedMessage.dialog.users.map(user => user.id)))
            .emit(EVENTS.DIALOG.MESSAGE.UPDATE_RESULT, updatedMessage)
    }
}
