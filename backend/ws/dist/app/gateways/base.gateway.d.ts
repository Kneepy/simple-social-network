import { OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Socket } from "socket.io";
import { PostRoomConnectionInterface } from "../interfaces";
export declare class BaseGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private users;
    private postRooms;
    getSocketIds(...args: string[]): Array<string>;
    getSocketIdsFromPostRooms(roomName: string): string[];
    handlePostRoomConnection(connectionData: PostRoomConnectionInterface, client: Socket): void;
    handlePostRoomDisconnection(disconnectionData: PostRoomConnectionInterface, client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
}
