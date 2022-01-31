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
exports.DialogsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const dialogs_service_1 = require("./dialogs.service");
const pipes_1 = require("../../common/pipes");
const enities_1 = require("../../common/enities");
const dto_1 = require("./dto");
const users_service_1 = require("../users/users.service");
let DialogsController = class DialogsController {
    constructor(dialogsService, usersService) {
        this.dialogsService = dialogsService;
        this.usersService = usersService;
    }
    async findDialog(findDialogData) {
        return await this.dialogsService.findOne({ id: findDialogData.dialog_id }, findDialogData.options);
    }
    async createDialog(payload) {
        const author = await this.usersService.findOne({ id: payload.author_id }, { relations: ["dialogs"] });
        const interlocutor = await this.usersService.findOne({ id: payload.interlocutor_id }, { relations: ["dialogs"] });
        const dialog = Object.assign(new enities_1.Dialogs(), { users: [author, interlocutor] });
        return await this.dialogsService.update(dialog);
    }
    async updateDialog(payload) {
        return await this.dialogsService.update(Object.assign(await this.dialogsService.findOne({ id: payload.dialog_id }), payload));
    }
    async addUserToDialog(payload) {
        const dialog = await this.dialogsService.findOne({ id: payload.dialog_id }, { relations: ["users"] });
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] });
        dialog.users.push(user);
        return await this.dialogsService.update(dialog);
    }
    async deleteDialog(deleteDialogData) { }
};
__decorate([
    (0, microservices_1.EventPattern)("dialog.find"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FindDialogDto]),
    __metadata("design:returntype", Promise)
], DialogsController.prototype, "findDialog", null);
__decorate([
    (0, microservices_1.EventPattern)("dialog.create"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateDialogDto]),
    __metadata("design:returntype", Promise)
], DialogsController.prototype, "createDialog", null);
__decorate([
    (0, microservices_1.EventPattern)("dialog.update"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateDialogDto]),
    __metadata("design:returntype", Promise)
], DialogsController.prototype, "updateDialog", null);
__decorate([
    (0, microservices_1.EventPattern)("dialog.add_user"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AddUserToDialogDto]),
    __metadata("design:returntype", Promise)
], DialogsController.prototype, "addUserToDialog", null);
__decorate([
    (0, microservices_1.EventPattern)("dialog.delete"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DeleteDialogDto]),
    __metadata("design:returntype", Promise)
], DialogsController.prototype, "deleteDialog", null);
DialogsController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UseFilters)(microservices_1.BaseRpcExceptionFilter),
    (0, common_1.UsePipes)(pipes_1.ValidationPipe),
    __metadata("design:paramtypes", [dialogs_service_1.DialogsService,
        users_service_1.UsersService])
], DialogsController);
exports.DialogsController = DialogsController;
//# sourceMappingURL=dialogs.controller.js.map