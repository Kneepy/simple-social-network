import {
    BaseWsExceptionFilter, MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    SubscribeMessage,
    WebSocketGateway
} from "@nestjs/websockets";
import {UseFilters} from "@nestjs/common";
import {Socket} from "socket.io";
import {EVENTS} from "../app.constants";
import {PostRoomConnectionInterface} from "../interfaces";

@WebSocketGateway({cors: {origin: "*"}})
@UseFilters(BaseWsExceptionFilter)
export class BaseGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private users: Map<string, string> = new Map()
    private postRooms: Map<string, Set<string>> = new Map()

    getSocketIds(...args: string[]): Array<string> {
        return args.map(uid => {
            const id = this.users.get(uid)
            if(!!id) return id
        })
    }

    getSocketIdsFromPostRooms(roomName: string) {
        return this.getSocketIds(...this.postRooms.get(roomName))
    }

    @SubscribeMessage(EVENTS.ROOM.POST.CONNECT)
    handlePostRoomConnection(@MessageBody() connectionData: PostRoomConnectionInterface, client: Socket) {
        let roomValues = this.postRooms.get(connectionData.postId)
        if(!roomValues) {
            this.postRooms.set(connectionData.postId, new Set())
            roomValues = this.postRooms.get(connectionData.postId)
        }
        roomValues.add(client.handshake.headers.authorization)
    }

    @SubscribeMessage(EVENTS.ROOM.POST.DISCONNECT)
    handlePostRoomDisconnection(@MessageBody() disconnectionData: PostRoomConnectionInterface, client: Socket) {
        let roomValues = this.postRooms.get(disconnectionData.postId)
        roomValues.delete(client.handshake.headers.authorization)
    }

    handleConnection(client: Socket, ...args: any[]) {
        this.users.set(client.handshake.headers.authorization, client.id)
    }

    handleDisconnect(client: Socket) {
        this.users.delete(client.handshake.headers.authorization)
    }
}