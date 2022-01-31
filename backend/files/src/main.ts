import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {MicroserviceOptions, Transport} from "@nestjs/microservices";

(async () => {
    const app = await NestFactory.create(AppModule)
    app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'files_queue',
            queueOptions: {
                durable: false
            }
        }
    })
    await app.startAllMicroservices()
    await app.listen(5001)
})()
