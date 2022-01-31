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
var Comments_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comments = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const posts_entity_1 = require("./posts.entity");
const likes_entity_1 = require("./likes.entity");
let Comments = Comments_1 = class Comments {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Comments.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comments.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.Users, (user) => user.comments),
    __metadata("design:type", users_entity_1.Users)
], Comments.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => posts_entity_1.Posts, (post) => post.comments),
    __metadata("design:type", posts_entity_1.Posts)
], Comments.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Comments_1, (comments) => comments.answers),
    __metadata("design:type", Array)
], Comments.prototype, "answers", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => likes_entity_1.Likes, (likes) => likes.id, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Comments.prototype, "likes", void 0);
Comments = Comments_1 = __decorate([
    (0, typeorm_1.Entity)()
], Comments);
exports.Comments = Comments;
//# sourceMappingURL=comments.entity.js.map