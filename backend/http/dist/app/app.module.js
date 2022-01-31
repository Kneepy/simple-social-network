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
const app_constants_1 = require("./app.constants");
const jwt_1 = require("@nestjs/jwt");
const mailer_module_1 = require("../libs/mailer/mailer.module");
const controllers_1 = require("./controllers");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: app_constants_1.DB_MICROSERVICE_MODULE_NAME,
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
                    name: app_constants_1.FILES_MICROSERVICE_MODULE_NAME,
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'files_queue',
                        queueOptions: {
                            durable: false
                        }
                    }
                },
            ]),
            jwt_1.JwtModule.register({
                secret: "faymary",
                signOptions: { expiresIn: "240s" }
            }),
            mailer_module_1.MailerModule.register({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "ilyafamin4@gmail.com",
                    pass: "xnklricbedvfooae",
                },
            })
        ],
        controllers: [controllers_1.UsersController, controllers_1.PostsController, controllers_1.BoardsController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map