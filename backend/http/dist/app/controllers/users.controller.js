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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const app_constants_1 = require("../app.constants");
const http_filter_1 = require("../filters/http.filter");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_1 = require("@nestjs/jwt");
const mailer_service_1 = require("../../libs/mailer/mailer.service");
let UsersController = class UsersController {
    constructor(dbMicroservice, filesMicroservice, jwtService, mailerService) {
        this.dbMicroservice = dbMicroservice;
        this.filesMicroservice = filesMicroservice;
        this.jwtService = jwtService;
        this.mailerService = mailerService;
    }
    async getUserById(headers) {
        return await this.dbMicroservice.send("user.find", { user_id: headers.authorization }).toPromise();
    }
    async getUserByLastName(params) {
        return await this.dbMicroservice.send("user.find", { lastName: params.lastName }).toPromise();
    }
    async createUser(createUserData) {
        const createdUser = await this.dbMicroservice.send("user.create", createUserData).toPromise();
        const token = this.jwtService.sign({ user_id: createdUser.id });
        await this.mailerService.sendAuthToken({
            to: createdUser.email,
            text: token,
            link: `http://localhost:5000/user/activate/${token}`
        });
        return createdUser;
    }
    async updateUser(file, updateUserData, headers) {
        if (file) {
            updateUserData.avatar = await this.filesMicroservice.send("store.upload", { file, user_id: headers.authorization }).toPromise();
        }
        return this.dbMicroservice.send("user.update", Object.assign(Object.assign({}, updateUserData), { user_id: headers.authorization }));
    }
    async activateUser(params) {
        const decodeToken = this.jwtService.verify(params.token);
        return await this.dbMicroservice.send("user.update", { user_id: decodeToken.user_id, active: true }).toPromise();
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, common_1.Get)(":lastName"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserByLastName", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)("avatar")),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)("activate/:token"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "activateUser", null);
UsersController = __decorate([
    (0, common_1.Controller)("user"),
    (0, common_1.UseFilters)(http_filter_1.HttpExceptionFilter),
    __param(0, (0, common_1.Inject)(app_constants_1.DB_MICROSERVICE_MODULE_NAME)),
    __param(1, (0, common_1.Inject)(app_constants_1.FILES_MICROSERVICE_MODULE_NAME)),
    __metadata("design:paramtypes", [microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        jwt_1.JwtService,
        mailer_service_1.MailerService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map