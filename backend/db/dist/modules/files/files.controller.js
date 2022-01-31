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
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const files_service_1 = require("./files.service");
const microservices_1 = require("@nestjs/microservices");
const create_dto_1 = require("./dto/create.dto");
const users_service_1 = require("../users/users.service");
const validation_pipe_1 = require("../../common/pipes/validation.pipe");
let FilesController = class FilesController {
    constructor(usersService, filesService) {
        this.usersService = usersService;
        this.filesService = filesService;
    }
    async createFile(payload) {
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] });
        return await this.filesService.create({ fileName: payload.fileName, user });
    }
    async createFiles(payload) {
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] });
        return await this.filesService.createAreLot(payload.fileNames.map((fileName) => ({ fileName, user })));
    }
};
__decorate([
    (0, microservices_1.EventPattern)("file.create"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateFileDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "createFile", null);
__decorate([
    (0, microservices_1.EventPattern)("files.create"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateFilesDto]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "createFiles", null);
FilesController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.UseFilters)(microservices_1.BaseRpcExceptionFilter),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        files_service_1.FilesService])
], FilesController);
exports.FilesController = FilesController;
//# sourceMappingURL=files.controller.js.map