import {Module} from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {AppController} from './app.controller';
import {CONFIG_MODULE_NAME, DB_MICROSERVICE_MODULE_NAME} from "./app.constants";
import {ConfigModule} from "../config/config.module";
import {ConfigService} from "../config/config.service";
import {ServeStaticModule} from "@nestjs/serve-static";

@Module({
    imports: [
        ConfigModule,
        ClientsModule.register([{
            name: DB_MICROSERVICE_MODULE_NAME,
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'db_queue',
                queueOptions: {
                    durable: false
                }
            }
        }]),
        ServeStaticModule.forRootAsync({
            useClass: ConfigService
        }),
    ],
    controllers: [AppController],
    providers: [
        {
            provide: CONFIG_MODULE_NAME,
            useFactory: async (configService: ConfigService) => (await configService.createLoggerOptions())[0],
            inject: [ConfigService]
        }
    ]
})
export class AppModule {}
