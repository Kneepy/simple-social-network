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
exports.PostsGateway = void 0;
const common_1 = require("@nestjs/common");
const app_constants_1 = require("../app.constants");
const microservices_1 = require("@nestjs/microservices");
const base_gateway_1 = require("./base.gateway");
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let PostsGateway = class PostsGateway {
    constructor(dbMicroservice, baseGateway) {
        this.dbMicroservice = dbMicroservice;
        this.baseGateway = baseGateway;
    }
    async addCommentToPost(addCommentData, client) {
        const updatedPost = await this.dbMicroservice.send("comment.create", addCommentData).toPromise();
        this.server
            .to(this.baseGateway.getSocketIdsFromPostRooms(updatedPost.id))
            .emit(app_constants_1.EVENTS.POST.ADD_COMMENT_RESULT, updatedPost);
    }
    async addAnswerAtCommentToPost(addCommentData, client) {
        const updatedComment = await this.dbMicroservice.send("comment.create.answer", addCommentData).toPromise();
        this.server
            .to(this.baseGateway.getSocketIdsFromPostRooms(updatedComment.post.id))
            .emit(app_constants_1.EVENTS.POST.ADD_ANSWER_RESULT, updatedComment);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], PostsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)(app_constants_1.EVENTS.POST.ADD_COMMENT),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], PostsGateway.prototype, "addCommentToPost", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(app_constants_1.EVENTS.POST.ADD_ANSWER),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], PostsGateway.prototype, "addAnswerAtCommentToPost", null);
PostsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    (0, common_1.UseFilters)(websockets_1.BaseWsExceptionFilter),
    __param(0, (0, common_1.Inject)(app_constants_1.DB_MICROSERVICE_MODULE)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        base_gateway_1.BaseGateway])
], PostsGateway);
exports.PostsGateway = PostsGateway;
//# sourceMappingURL=posts.gateway.js.map