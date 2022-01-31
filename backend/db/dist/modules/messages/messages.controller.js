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
exports.MessagesController = void 0;
const common_1 = require("@nestjs/common");
const messages_service_1 = require("./messages.service");
const microservices_1 = require("@nestjs/microservices");
const find_dto_1 = require("./dto/find.dto");
const create_dto_1 = require("./dto/create.dto");
const users_service_1 = require("../users/users.service");
const dialogs_service_1 = require("../dialogs/dialogs.service");
const update_dto_1 = require("./dto/update.dto");
const delete_dto_1 = require("./dto/delete.dto");
const pipes_1 = require("../../common/pipes");
const enities_1 = require("../../common/enities");
let MessagesController = class MessagesController {
    constructor(messagesService, usersService, dialogsService) {
        this.messagesService = messagesService;
        this.usersService = usersService;
        this.dialogsService = dialogsService;
    }
    async findMessages(findMessagesData) {
        return await this.messagesService.findOne({ id: findMessagesData.message_id }, findMessagesData.options);
    }
    async createMessage(payload) {
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] });
        const message = Object.assign(new enities_1.Messages(), {
            user,
            value: payload.value,
            files: payload.files,
        });
        const dialog = await this.dialogsService.findOne({ id: payload.dialog_id }, { relations: ["messages", "users"] });
        dialog.messages.push(message);
        return await this.dialogsService.update(dialog);
    }
    async updateMessage(updateMessageData) {
        return await this.messagesService.update(Object.assign(await this.messagesService.findOne({ id: updateMessageData.message_id }), updateMessageData));
    }
    async deleteMessage(deleteMessageData) { }
};
__decorate([
    (0, microservices_1.EventPattern)("message.find"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_dto_1.FindMessageDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "findMessages", null);
__decorate([
    (0, microservices_1.EventPattern)("message.create"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateMessageDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "createMessage", null);
__decorate([
    (0, microservices_1.EventPattern)("message.update"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.UpdateMessageDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "updateMessage", null);
__decorate([
    (0, microservices_1.EventPattern)("message.delete"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_dto_1.DeleteMessageDto]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "deleteMessage", null);
MessagesController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UsePipes)(pipes_1.ValidationPipe),
    (0, common_1.UseFilters)(microservices_1.BaseRpcExceptionFilter),
    __metadata("design:paramtypes", [messages_service_1.MessagesService,
        users_service_1.UsersService,
        dialogs_service_1.DialogsService])
], MessagesController);
exports.MessagesController = MessagesController;
//# sourceMappingURL=messages.controller.js.map