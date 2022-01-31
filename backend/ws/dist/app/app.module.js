"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const gateways_1 = require("./gateways");
const app_constants_1 = require("./app.constants");
const posts_gateway_1 = require("./gateways/posts.gateway");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: app_constants_1.DB_MICROSERVICE_MODULE,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'db_queue',
                        queueOptions: {
                            durable: false
                        }
                    }
                },
                {
                    name: app_constants_1.FILES_MICROSERVICE_MODULE,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'files_queue',
                        queueOptions: {
                            durable: false
                        }
                    }
                },
            ])
        ],
        providers: [gateways_1.BaseGateway, gateways_1.DialogsGateway, gateways_1.UsersGateway, gateways_1.BoardsGateway, posts_gateway_1.PostsGateway]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map