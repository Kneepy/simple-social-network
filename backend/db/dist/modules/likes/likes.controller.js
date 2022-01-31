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
exports.LikesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const comments_service_1 = require("../comments/comments.service");
const users_service_1 = require("../users/users.service");
const create_dto_1 = require("./dto/create.dto");
const pipes_1 = require("../../common/pipes");
const enities_1 = require("../../common/enities");
let LikesController = class LikesController {
    constructor(usersService, commentsService) {
        this.usersService = usersService;
        this.commentsService = commentsService;
    }
    async addLikeToComment(payload) {
        const comment = await this.commentsService.findOne({ id: payload.comment_id }, { relations: ["likes"] });
        const user = await this.usersService.findOne({ id: payload.user_id });
        if (!!comment.likes.find((like) => like.user.id === payload.user_id)) {
            comment.likes.filter((like) => like.user.id !== payload.user_id);
        }
        else {
            const like = Object.assign(new enities_1.Likes(), { user });
            comment.likes.push(like);
        }
        return await this.commentsService.update(comment);
    }
};
__decorate([
    (0, microservices_1.EventPattern)("like.create.comment"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.ActionsLikeDto]),
    __metadata("design:returntype", Promise)
], LikesController.prototype, "addLikeToComment", null);
LikesController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UsePipes)(pipes_1.ValidationPipe),
    (0, common_1.UseFilters)(microservices_1.BaseRpcExceptionFilter),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        comments_service_1.CommentsService])
], LikesController);
exports.LikesController = LikesController;
//# sourceMappingURL=likes.controller.js.map