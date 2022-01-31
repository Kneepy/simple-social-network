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
var __param =
    (this && this.__param) ||
    function (paramIndex, decorator) {
        return function (target, key) {
            decorator(target, key, paramIndex)
        }
    }
Object.defineProperty(exports, "__esModule", { value: true })
exports.createSearchInterceptor = void 0
const common_1 = require("@nestjs/common")
const microservices_1 = require("@nestjs/microservices")
const interfaces_1 = require("../interfaces")
function createSearchInterceptor(defaultValues, service, options) {
    var _a
    let MixinInterceptor = class MixinInterceptor {
        constructor(service) {
            this.service = service
        }
        async intercept(context, next) {
            var _a, _b
            const data = context.switchToRpc().getData()
            data[defaultValues.returnTo] = await this.service.findOne(
                { id: data[defaultValues.interceptBy] },
                (_a = data.options) !== null && _a !== void 0 ? _a : options,
            )
            if (!data[defaultValues.returnTo])
                throw new microservices_1.RpcException(
                    (_b = this.service.errors) === null || _b === void 0 ? void 0 : _b.notFound,
                )
            return next.handle()
        }
    }
    MixinInterceptor = __decorate(
        [
            __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => service))),
            __metadata("design:paramtypes", [
                typeof (_a =
                    typeof interfaces_1.InjectableService !== "undefined" &&
                    interfaces_1.InjectableService) === "function"
                    ? _a
                    : Object,
            ]),
        ],
        MixinInterceptor,
    )
    return (0, common_1.mixin)(MixinInterceptor)
}
exports.createSearchInterceptor = createSearchInterceptor
//# sourceMappingURL=create-search-interceptor.provider.js.map
