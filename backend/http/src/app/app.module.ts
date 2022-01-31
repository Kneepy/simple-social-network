import { Module } from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {DB_MICROSERVICE_MODULE_NAME, FILES_MICROSERVICE_MODULE_NAME} from "./app.constants";
import {JwtModule} from "@nestjs/jwt";
import {MailerModule} from "../libs/mailer/mailer.module";
import {BoardsController, PostsController, UsersController} from "./controllers";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: DB_MICROSERVICE_MODULE_NAME,
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
                name: FILES_MICROSERVICE_MODULE_NAME,
                transport: Transport.RMQ,
                options: {
                    urls: ['amqp://localhost:5672'],
                    queue: 'files_queue',
                    queueOptions: {
                        durable: false
                    }
                }
            },
        ]),
        JwtModule.register({
            secret: "faymary",
            signOptions: {expiresIn: "240s"}
        }),
        MailerModule.register({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "ilyafamin4@gmail.com",
                pass: "xnklricbedvfooae",
            },
        })
    ],
    controllers: [UsersController, PostsController, BoardsController],
})
export class AppModule {}
