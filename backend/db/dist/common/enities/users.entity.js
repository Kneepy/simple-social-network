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
var Users_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const boards_entity_1 = require("./boards.entity");
const typeorm_1 = require("typeorm");
const posts_entity_1 = require("./posts.entity");
const dialog_entity_1 = require("./dialog.entity");
const message_entity_1 = require("./message.entity");
const comments_entity_1 = require("./comments.entity");
const likes_entity_1 = require("./likes.entity");
const files_entity_1 = require("./files.entity");
let Users = Users_1 = class Users {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "info", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Users.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, default: false }),
    __metadata("design:type", Boolean)
], Users.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => files_entity_1.Files, (file) => file.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", files_entity_1.Files)
], Users.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => boards_entity_1.Boards, (boards) => boards.user, { cascade: true }),
    __metadata("design:type", Array)
], Users.prototype, "boards", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => posts_entity_1.Posts, (posts) => posts.user, { cascade: true }),
    __metadata("design:type", Array)
], Users.prototype, "posts", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => dialog_entity_1.Dialogs, (dialog) => dialog.users),
    __metadata("design:type", Array)
], Users.prototype, "dialogs", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Users_1, (users) => users.subscribers),
    __metadata("design:type", Array)
], Users.prototype, "subscriptions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Users_1, (users) => users.subscriptions),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Users.prototype, "subscribers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => message_entity_1.Messages, (message) => message.user),
    __metadata("design:type", Array)
], Users.prototype, "messages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comments_entity_1.Comments, (comments) => comments.user),
    __metadata("design:type", Array)
], Users.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => likes_entity_1.Likes, (likes) => likes.user),
    __metadata("design:type", Array)
], Users.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => files_entity_1.Files, (files) => files.user),
    __metadata("design:type", Array)
], Users.prototype, "files", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Users_1, (users) => users.accounts),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Users.prototype, "accounts", void 0);
Users = Users_1 = __decorate([
    (0, typeorm_1.Entity)()
], Users);
exports.Users = Users;
//# sourceMappingURL=users.entity.js.map