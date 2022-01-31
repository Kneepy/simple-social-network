"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const socket_io_1 = require("socket.io");
const app_constants_1 = require("../app.constants");
let BaseGateway = class BaseGateway {
    constructor() {
        this.users = new Map();
        this.postRooms = new Map();
    }
    getSocketIds(...args) {
        return args.map(uid => {
            const id = this.users.get(uid);
            if (!!id)
                return id;
        });
    }
    getSocketIdsFromPostRooms(roomName) {
        return this.getSocketIds(...this.postRooms.get(roomName));
    }
    handlePostRoomConnection(connectionData, client) {
        let roomValues = this.postRooms.get(connectionData.postId);
        if (!roomValues) {
            this.postRooms.set(connectionData.postId, new Set());
            roomValues = this.postRooms.get(connectionData.postId);
        }
        roomValues.add(client.handshake.headers.authorization);
    }
    handlePostRoomDisconnection(disconnectionData, client) {
        let roomValues = this.postRooms.get(disconnectionData.postId);
        roomValues.delete(client.handshake.headers.authorization);
    }
    handleConnection(client, ...args) {
        this.users.set(client.handshake.headers.authorization, client.id);
    }
    handleDisconnect(client) {
        this.users.delete(client.handshake.headers.authorization);
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)(app_constants_1.EVENTS.ROOM.POST.CONNECT),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], BaseGateway.prototype, "handlePostRoomConnection", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(app_constants_1.EVENTS.ROOM.POST.DISCONNECT),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], BaseGateway.prototype, "handlePostRoomDisconnection", null);
BaseGateway = __decorate([
    (0, websockets_1.WebSocketGateway)({ cors: { origin: "*" } }),
    (0, common_1.UseFilters)(websockets_1.BaseWsExceptionFilter)
], BaseGateway);
exports.BaseGateway = BaseGateway;
//# sourceMappingURL=base.gateway.js.map