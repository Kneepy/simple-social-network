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
const bcrypt = require("bcryptjs");
const users_service_1 = require("./users.service");
const pipes_1 = require("../../common/pipes");
const dto_1 = require("./dto");
const common_2 = require("../../common");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findOneUser(findOneUserData) {
        return await this.usersService.findOne({
            id: findOneUserData.user_id,
            lastName: findOneUserData.lastName,
        }, findOneUserData.options);
    }
    async addUserAccount(payload) {
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: ["accounts"] });
        const account = await this.usersService.findOne({ id: payload.account_id }, { relations: [] });
        user.accounts.push(account);
        return await this.usersService.update(user);
    }
    async create(createUserDto) {
        if (!!!(await this.usersService.findOne({ email: createUserDto.email }, { relations: [] }))) {
            return await this.usersService.create(Object.assign(Object.assign({}, createUserDto), { password: bcrypt.hashSync(createUserDto.password, bcrypt.genSaltSync(5)), lastName: createUserDto.email.split("@")[0] }));
        }
        else
            throw new microservices_1.RpcException(common_2.Errors.user.emailAlreadyExist);
    }
    async update(updateUserData) {
        const existingUser = await this.usersService.findOne({ lastName: updateUserData.lastName }, { relations: [] });
        if (!!existingUser && existingUser.id !== updateUserData.user_id) {
            throw new microservices_1.RpcException(common_2.Errors.user.lastNameAlreadyExist);
        }
        else {
            return await this.usersService.update(Object.assign(await this.usersService.findOne({ id: updateUserData.user_id }), updateUserData));
        }
    }
    async subscribeUser(subscribeUserData) {
        const author = await this.usersService.findOne({ id: subscribeUserData.author_id }, { relations: [] });
        const subscriber = await this.usersService.findOne({ id: subscribeUserData.author_id }, { relations: ["subscriptions"] });
        if (!!subscriber.subscriptions.find((user) => user.id === author.id)) {
            subscriber.subscriptions = subscriber.subscriptions.filter((user) => user.id !== author.id);
        }
        else {
            subscriber.subscriptions.push(author);
        }
        await this.usersService.update(subscriber);
        return {
            author,
            subscriber,
        };
    }
};
__decorate([
    (0, microservices_1.EventPattern)("user.find"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.FindUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOneUser", null);
__decorate([
    (0, microservices_1.EventPattern)("user.add.account"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.AddAccountDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addUserAccount", null);
__decorate([
    (0, microservices_1.EventPattern)("user.create"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, microservices_1.EventPattern)("user.update"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, microservices_1.EventPattern)("user.subscribe"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.SubscribeUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "subscribeUser", null);
UsersController = __decorate([
    (0, common_1.Controller)(),
    (0, common_1.UsePipes)(pipes_1.ValidationPipe),
    (0, common_1.UseFilters)(microservices_1.BaseRpcExceptionFilter),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map