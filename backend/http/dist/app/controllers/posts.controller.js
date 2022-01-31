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
const app_constants_1 = require("../app.constants");
const microservices_1 = require("@nestjs/microservices");
const platform_express_1 = require("@nestjs/platform-express");
const http_filter_1 = require("../filters/http.filter");
let PostsController = class PostsController {
    constructor(dbMicroservice, filesMicroservice) {
        this.dbMicroservice = dbMicroservice;
        this.filesMicroservice = filesMicroservice;
    }
    async createPost(file, createPostData, headers) {
        createPostData.file = await this.filesMicroservice.send("store.upload", { file, user_id: headers.authorization }).toPromise();
        return await this.dbMicroservice.send("post.create", Object.assign(Object.assign({}, createPostData), { user_id: headers.authorization })).toPromise();
    }
    async getPost(getPostData) {
        return await this.dbMicroservice.send("post.find", { post_id: getPostData.post_id }).toPromise();
    }
    async updatePost(updatePostData, updatePostParams) {
        return await this.dbMicroservice.send("post.update", Object.assign(Object.assign({}, updatePostData), { post_id: updatePostParams.post_id })).toPromise();
    }
    async deletePost(deletePostParams) {
        return await this.dbMicroservice.send("post.delete", { post_id: deletePostParams.post_id }).toPromise();
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("file")),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)(":post_id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "getPost", null);
__decorate([
    (0, common_1.Patch)(":post_id"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "updatePost", null);
__decorate([
    (0, common_1.Delete)(":post_id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostsController.prototype, "deletePost", null);
PostsController = __decorate([
    (0, common_1.Controller)("post"),
    (0, common_1.UseFilters)(http_filter_1.HttpExceptionFilter),
    __param(0, (0, common_1.Inject)(app_constants_1.DB_MICROSERVICE_MODULE_NAME)),
    __param(1, (0, common_1.Inject)(app_constants_1.FILES_MICROSERVICE_MODULE_NAME)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], PostsController);
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map