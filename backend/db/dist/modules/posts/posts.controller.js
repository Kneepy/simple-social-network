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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const posts_service_1 = require("./posts.service");
const pipes_1 = require("../../common/pipes");
const users_service_1 = require("../users/users.service");
const dto_1 = require("./dto");
let PostsController = class PostsController {
    constructor(postsService, usersService) {
        this.postsService = postsService;
        this.usersService = usersService;
    }
    async create(createPostDto) {
        const user = await this.usersService.findOne({ id: createPostDto.user_id }, { relations: ["posts"] });
        user.posts.push(createPostDto);
        return await this.usersService.update(user);
    }
    async all() {
        return this.postsService.find();
    }
    async findOne(findPostData) {
        return await this.postsService.findOne({ id: findPostData.post_id }, findPostData.options);
    }
    async update(payload) {
        return await this.postsService.update(Object.assign(await this.postsService.findOne({ id: payload.post_id }), payload));
    }
    async delete(params) { }
};
__decorate([
    (0, microservices_1.EventPattern)("post.create"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreatePostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "create", null);
__decorate([
    (0, microservices_1.EventPattern)("post.all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "all", null);
__decorate([
    (0, microservices_1.EventPattern)("post.find"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FindPostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.EventPattern)("post.update"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdatePostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "update", null);
__decorate([
    (0, microservices_1.EventPattern)("post.delete"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.DeletePostDto]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "delete", null);
PostsController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UsePipes)(pipes_1.ValidationPipe),
    (0, common_1.UseFilters)(microservices_1.BaseRpcExceptionFilter),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        users_service_1.UsersService])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map