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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const file_interceptor_1 = require("./interceptors/file.interceptor");
const app_constants_1 = require("./app.constants");
const validation_pipe_1 = require("../pipes/validation.pipe");
const create_dto_1 = require("./dto/create.dto");
const files_interceptor_1 = require("./interceptors/files.interceptor");
let AppController = class AppController {
    constructor(dbMicroservice) {
        this.dbMicroservice = dbMicroservice;
    }
    async createFile(createFileData) {
        return await this.dbMicroservice.send("file.create", { user_id: createFileData.user_id, fileName: createFileData.file.originalname }).toPromise();
    }
    async createFiles(createFilesData) {
        return await this.dbMicroservice.send("files.create", { user_id: createFilesData.user_id, fileNames: createFilesData.files.map(file => file.originalname) }).toPromise();
    }
};
__decorate([
    (0, microservices_1.EventPattern)("store.upload"),
    (0, common_1.UseInterceptors)((0, file_interceptor_1.FileRpcInterceptor)("file")),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateFileDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createFile", null);
__decorate([
    (0, microservices_1.EventPattern)("store.upload.multiply"),
    (0, common_1.UseInterceptors)((0, files_interceptor_1.FilesRpcInterceptor)("files")),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateFilesDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createFiles", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UsePipes)(validation_pipe_1.ValidationPipe),
    (0, common_1.UseFilters)(microservices_1.BaseRpcExceptionFilter),
    __param(0, (0, common_1.Inject)(app_constants_1.DB_MICROSERVICE_MODULE_NAME)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map