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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const microservices_1 = require("@nestjs/microservices");
const find_dto_1 = require("./dto/find.dto");
const pipes_1 = require("../../common/pipes");
const create_dto_1 = require("./dto/create.dto");
const users_service_1 = require("../users/users.service");
const posts_service_1 = require("../posts/posts.service");
const delete_dto_1 = require("./dto/delete.dto");
const enities_1 = require("../../common/enities");
let CommentsController = class CommentsController {
    constructor(commentsService, usersService, postsService) {
        this.commentsService = commentsService;
        this.usersService = usersService;
        this.postsService = postsService;
    }
    async findComment(payload) {
        return await this.commentsService.findOne({ id: payload.comment_id }, payload.options);
    }
    async createComment(payload) {
        const post = await this.postsService.findOne({ id: payload.post_id }, { relations: ["comments"] });
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] });
        const comment = Object.assign(new enities_1.Comments(), { value: payload.value, user });
        post.comments.push(comment);
        return await this.postsService.update(post);
    }
    async createAnswerComment(payload) {
        const comment = await this.commentsService.findOne({ id: payload.comment_id }, { relations: ["answers", "post", "post.comments"] });
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] });
        const answer = Object.assign(new enities_1.Comments(), { user, value: payload.value });
        comment.post.comments.find((comm) => comm.id === comment.id).answers.push(answer);
        return await this.commentsService.update(comment);
    }
    async deleteComment(deleteCommentData) { }
};
__decorate([
    (0, microservices_1.EventPattern)("comment.find"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_dto_1.FindCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "findComment", null);
__decorate([
    (0, microservices_1.EventPattern)("comment.create"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createComment", null);
__decorate([
    (0, microservices_1.EventPattern)("comment.create.answer"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateAnswerCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "createAnswerComment", null);
__decorate([
    (0, microservices_1.EventPattern)("comment.delete"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_dto_1.DeleteCommentDto]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "deleteComment", null);
CommentsController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UsePipes)(pipes_1.ValidationPipe),
    (0, common_1.UseFilters)(microservices_1.BaseRpcExceptionFilter),
    __metadata("design:paramtypes", [comments_service_1.CommentsService,
        users_service_1.UsersService,
        posts_service_1.PostsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map