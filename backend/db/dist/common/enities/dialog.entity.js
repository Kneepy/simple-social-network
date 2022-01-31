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
exports.Dialogs = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const message_entity_1 = require("./message.entity");
let Dialogs = class Dialogs {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Dialogs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => users_entity_1.Users, (user) => user.dialogs),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Dialogs.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Messages, (message) => message.dialog, { cascade: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Dialogs.prototype, "messages", void 0);
Dialogs = __decorate([
    (0, typeorm_1.Entity)()
], Dialogs);
exports.Dialogs = Dialogs;
//# sourceMappingURL=dialog.entity.js.map