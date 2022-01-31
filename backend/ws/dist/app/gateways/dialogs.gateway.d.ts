import { ClientProxy } from "@nestjs/microservices";
import { Socket } from 'socket.io';
import { BaseGateway } from "./base.gateway";
export declare class DialogsGateway {
    private dbMicroservice;
    private filesMicroservice;
    private baseGateway;
    constructor(dbMicroservice: ClientProxy, filesMicroservice: ClientProxy, baseGateway: BaseGateway);
    private server;
    findDialog(findDialogData: any, client: Socket): Promise<void>;
    createDialog(createDialogData: any, client: Socket): Promise<void>;
    addUserToDialog(addUserToDialogData: any, client: Socket): Promise<void>;
    createMessage(createMessageData: any, client: Socket): Promise<void>;
    updateMessage(addUserToDialogData: any, client: Socket): Promise<void>;
}
