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
exports.BoardsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const boards_service_1 = require("./boards.service");
const create_dto_1 = require("./dto/create.dto");
const update_dto_1 = require("./dto/update.dto");
const find_dto_1 = require("./dto/find.dto");
const delete_dto_1 = require("./dto/delete.dto");
const users_service_1 = require("../users/users.service");
const pipes_1 = require("../../common/pipes");
const posts_service_1 = require("../posts/posts.service");
const common_2 = require("../../common");
let BoardsController = class BoardsController {
    constructor(boardsService, usersService, postsService) {
        this.boardsService = boardsService;
        this.usersService = usersService;
        this.postsService = postsService;
    }
    async findBoardById(payload) {
        return await this.boardsService.findOne({ id: payload.board_id }, payload.options);
    }
    async createBoard(payload) {
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: ["boards"] });
        if (!!user.boards.find((board) => board.boardName === payload.boardName)) {
            throw new microservices_1.RpcException(common_2.Errors.board.alreadyExists);
        }
        user.boards.push(payload);
        return await this.usersService.update(user);
    }
    async attachPostOnBoard(payload) {
        const board = await this.boardsService.findOne({ id: payload.board_id }, { relations: ["posts", "content.user"] });
        const post = await this.postsService.findOne({ id: payload.post_id }, { relations: [] });
        board.posts.push(post);
        return await this.boardsService.update(board);
    }
    async updateBoard(payload) {
        return await this.boardsService.update(Object.assign(await this.boardsService.findOne({ id: payload.board_id }), payload));
    }
    async removeBoard(params) { }
};
__decorate([
    (0, microservices_1.EventPattern)("board.find"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_dto_1.FindBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "findBoardById", null);
__decorate([
    (0, microservices_1.EventPattern)("board.create"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "createBoard", null);
__decorate([
    (0, microservices_1.EventPattern)("board.save.post"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.AttachPostOnBoard]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "attachPostOnBoard", null);
__decorate([
    (0, microservices_1.EventPattern)("board.update"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.UpdateBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "updateBoard", null);
__decorate([
    (0, microservices_1.EventPattern)("board.delete"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_dto_1.DeleteBoardDto]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "removeBoard", null);
BoardsController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UsePipes)(pipes_1.ValidationPipe),
    (0, common_1.UseFilters)(microservices_1.BaseRpcExceptionFilter),
    __metadata("design:paramtypes", [boards_service_1.BoardsService,
        users_service_1.UsersService,
        posts_service_1.PostsService])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map