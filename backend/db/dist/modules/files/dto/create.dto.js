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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFilesInterface = exports.CreateFileInterface = exports.CreateFilesDto = exports.CreateFileDto = void 0;
const class_validator_1 = require("class-validator");
class CreateFileDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFileDto.prototype, "fileName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFileDto.prototype, "user_id", void 0);
exports.CreateFileDto = CreateFileDto;
class CreateFilesDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Array)
], CreateFilesDto.prototype, "fileNames", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFilesDto.prototype, "user_id", void 0);
exports.CreateFilesDto = CreateFilesDto;
class CreateFileInterface {
}
exports.CreateFileInterface = CreateFileInterface;
class CreateFilesInterface {
}
exports.CreateFilesInterface = CreateFilesInterface;
//# sourceMappingURL=create.dto.js.map