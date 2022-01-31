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
const app_controller_1 = require("./app.controller");
const app_constants_1 = require("./app.constants");
const config_module_1 = require("../config/config.module");
const config_service_1 = require("../config/config.service");
const serve_static_1 = require("@nestjs/serve-static");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_module_1.ConfigModule,
            microservices_1.ClientsModule.register([{
                    name: app_constants_1.DB_MICROSERVICE_MODULE_NAME,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'db_queue',
                        queueOptions: {
                            durable: false
                        }
                    }
                }]),
            serve_static_1.ServeStaticModule.forRootAsync({
                useClass: config_service_1.ConfigService
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            {
                provide: app_constants_1.CONFIG_MODULE_NAME,
                useFactory: async (configService) => (await configService.createLoggerOptions())[0],
                inject: [config_service_1.ConfigService]
            }
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map