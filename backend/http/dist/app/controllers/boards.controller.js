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
const app_constants_1 = require("../app.constants");
const microservices_1 = require("@nestjs/microservices");
const http_filter_1 = require("../filters/http.filter");
let BoardsController = class BoardsController {
    constructor(dbMicroservice) {
        this.dbMicroservice = dbMicroservice;
    }
    async createBoard(createBoardData, headers) {
        return await this.dbMicroservice.send("board.create", Object.assign(Object.assign({}, createBoardData), { user_id: headers.authorization })).toPromise();
    }
    async findBoard(findBoardParams) {
        return await this.dbMicroservice.send("board.find", { board_id: findBoardParams.board_id }).toPromise();
    }
    async deleteBoard(deleteBoardParams) {
        return await this.dbMicroservice.send("board.delete", { board_id: deleteBoardParams.board_id }).toPromise();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "createBoard", null);
__decorate([
    (0, common_1.Get)(":board_id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "findBoard", null);
__decorate([
    (0, common_1.Delete)(":board_id"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoardsController.prototype, "deleteBoard", null);
BoardsController = __decorate([
    (0, common_1.Controller)("board"),
    (0, common_1.UseFilters)(http_filter_1.HttpExceptionFilter),
    __param(0, (0, common_1.Inject)(app_constants_1.DB_MICROSERVICE_MODULE_NAME)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], BoardsController);
exports.BoardsController = BoardsController;
//# sourceMappingURL=boards.controller.js.map