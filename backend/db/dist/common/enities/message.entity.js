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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const typeorm_1 = require("typeorm");
const dialog_entity_1 = require("./dialog.entity");
const users_entity_1 = require("./users.entity");
const files_entity_1 = require("./files.entity");
let Messages = class Messages {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Messages.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Messages.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Messages.prototype, "viewed", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => dialog_entity_1.Dialogs, (dialog) => dialog.messages),
    __metadata("design:type", dialog_entity_1.Dialogs)
], Messages.prototype, "dialog", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (user) => user.messages),
    __metadata("design:type", users_entity_1.Users)
], Messages.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => files_entity_1.Files, (files) => files.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Messages.prototype, "files", void 0);
Messages = __decorate([
    (0, typeorm_1.Entity)()
], Messages);
exports.Messages = Messages;
//# sourceMappingURL=message.entity.js.map