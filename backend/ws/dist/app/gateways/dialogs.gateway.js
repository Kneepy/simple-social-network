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
exports.DialogsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const socket_io_1 = require("socket.io");
const app_constants_1 = require("../app.constants");
const base_gateway_1 = require("./base.gateway");
let DialogsGateway = class DialogsGateway {
    constructor(dbMicroservice, filesMicroservice, baseGateway) {
        this.dbMicroservice = dbMicroservice;
        this.filesMicroservice = filesMicroservice;
        this.baseGateway = baseGateway;
    }
    async findDialog(findDialogData, client) {
        const dialog = await this.dbMicroservice.send("dialog.find", findDialogData).toPromise();
        this.server
            .to(this.baseGateway.getSocketIds(dialog.users.map(user => user.id)))
            .emit(app_constants_1.EVENTS.DIALOG.GET_RESULT, dialog);
    }
    async createDialog(createDialogData, client) {
        const createdDialog = await this.dbMicroservice.send("dialog.create", createDialogData).toPromise();
        this.server
            .to(this.baseGateway.getSocketIds(createdDialog.users.map(user => user.id)))
            .emit(app_constants_1.EVENTS.DIALOG.CREATE_RESULT, createdDialog);
    }
    async addUserToDialog(addUserToDialogData, client) {
        const updatedDialog = await this.dbMicroservice.send("dialog.add_user", addUserToDialogData).toPromise();
        this.server
            .to(updatedDialog.users.map(user => user.id))
            .emit(app_constants_1.EVENTS.DIALOG.UPDATE_RESULT, updatedDialog);
    }
    async createMessage(createMessageData, client) {
        if (createMessageData.files) {
            createMessageData.files = await this.filesMicroservice.send("store.upload.multiply", {
                user_id: createMessageData.user_id,
                files: createMessageData.files
            }).toPromise();
        }
        const updatedDialog = await this.dbMicroservice.send("message.create", createMessageData).toPromise();
        this.server
            .to(this.baseGateway.getSocketIds(updatedDialog.users.map(user => user.id)))
            .emit(app_constants_1.EVENTS.DIALOG.MESSAGE.CREATE_RESULT, updatedDialog);
    }
    async updateMessage(addUserToDialogData, client) {
        const updatedMessage = await this.dbMicroservice.send("message.update", addUserToDialogData).toPromise();
        this.server
            .to(this.baseGateway.getSocketIds(updatedMessage.dialog.users.map(user => user.id)))
            .emit(app_constants_1.EVENTS.DIALOG.MESSAGE.UPDATE_RESULT, updatedMessage);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], DialogsGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)(app_constants_1.EVENTS.DIALOG.GET),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], DialogsGateway.prototype, "findDialog", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(app_constants_1.EVENTS.DIALOG.CREATE),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], DialogsGateway.prototype, "createDialog", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(app_constants_1.EVENTS.DIALOG.UPDATE.ADD_USER),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], DialogsGateway.prototype, "addUserToDialog", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(app_constants_1.EVENTS.DIALOG.MESSAGE.CREATE),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], DialogsGateway.prototype, "createMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(app_constants_1.EVENTS.DIALOG.MESSAGE.UPDATE),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], DialogsGateway.prototype, "updateMessage", null);
DialogsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    (0, common_1.UseFilters)(websockets_1.BaseWsExceptionFilter),
    __param(0, (0, common_1.Inject)(app_constants_1.DB_MICROSERVICE_MODULE)),
    __param(1, (0, common_1.Inject)(app_constants_1.FILES_MICROSERVICE_MODULE)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        base_gateway_1.BaseGateway])
], DialogsGateway);
exports.DialogsGateway = DialogsGateway;
//# sourceMappingURL=dialogs.gateway.js.map