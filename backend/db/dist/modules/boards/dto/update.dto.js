"use strict"
var __decorate =
    (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        var c = arguments.length,
            r =
                c < 3
                    ? target
                    : desc === null
                    ? (desc = Object.getOwnPropertyDescriptor(target, key))
                    : desc,
            d
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc)
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if ((d = decorators[i]))
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
        return c > 3 && r && Object.defineProperty(target, key, r), r
    }
var __metadata =
    (this && this.__metadata) ||
    function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(k, v)
    }
Object.defineProperty(exports, "__esModule", { value: true })
exports.AttachPostOnBoard = exports.UpdateBoardDto = void 0
const common_1 = require("../../../common")
const class_validator_1 = require("class-validator")
class UpdateBoardDto extends common_1.Boards {}
__decorate(
    [(0, class_validator_1.IsNotEmpty)(), __metadata("design:type", Number)],
    UpdateBoardDto.prototype,
    "board_id",
    void 0,
)
exports.UpdateBoardDto = UpdateBoardDto
class AttachPostOnBoard {}
__decorate(
    [(0, class_validator_1.IsNotEmpty)(), __metadata("design:type", Number)],
    AttachPostOnBoard.prototype,
    "post_id",
    void 0,
)
__decorate(
    [(0, class_validator_1.IsNotEmpty)(), __metadata("design:type", Number)],
    AttachPostOnBoard.prototype,
    "board_id",
    void 0,
)
exports.AttachPostOnBoard = AttachPostOnBoard
//# sourceMappingURL=update.dto.js.map
