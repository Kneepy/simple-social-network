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
exports.FilesRpcInterceptor = void 0;
const common_1 = require("@nestjs/common");
const app_constants_1 = require("../app.constants");
const md5 = require("md5");
const path_1 = require("path");
const path = require("path");
const fs = require("fs");
const buffer_1 = require("buffer");
const microservices_1 = require("@nestjs/microservices");
function FilesRpcInterceptor(fieldName) {
    let MixinFilesRpcInterceptor = class MixinFilesRpcInterceptor {
        constructor(config) {
            this.config = config;
        }
        async intercept(context, next) {
            const files = context.switchToRpc().getData()[fieldName];
            if (!!files.length) {
                for (const file of files) {
                    const fileName = md5(Date.now().toString() + Math.random()) + (0, path_1.extname)(file.originalname);
                    const filePath = path.join(this.config.rootPath, fileName);
                    fs.writeFileSync(filePath, buffer_1.Buffer.from(file.buffer).toString("base64"), { encoding: 'base64' });
                    file.originalname = fileName;
                }
                return next.handle();
            }
            else
                throw new microservices_1.RpcException(`Field ${fieldName} does not exist!`);
        }
    };
    MixinFilesRpcInterceptor = __decorate([
        __param(0, (0, common_1.Inject)(app_constants_1.CONFIG_MODULE_NAME)),
        __metadata("design:paramtypes", [Object])
    ], MixinFilesRpcInterceptor);
    return (0, common_1.mixin)(MixinFilesRpcInterceptor);
}
exports.FilesRpcInterceptor = FilesRpcInterceptor;
//# sourceMappingURL=files.interceptor.js.map