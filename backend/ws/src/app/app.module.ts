import { Module } from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {BaseGateway, DialogsGateway, BoardsGateway, UsersGateway} from "./gateways";
import {DB_MICROSERVICE_MODULE, FILES_MICROSERVICE_MODULE} from "./app.constants";
import { PostsGateway } from "./gateways/posts.gateway"

@Module({
    imports: [
        ClientsModule.register([
            {
                name: DB_MICROSERVICE_MODULE,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'db_queue',
                    queueOptions: {
                        durable: false
                    }
                }
            },
            {
                name: FILES_MICROSERVICE_MODULE,
                transport: Transport.RMQ,
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
    providers: [BaseGateway, DialogsGateway, UsersGateway, BoardsGateway, PostsGateway]
})
export class AppModule {}
