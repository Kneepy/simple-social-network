import { NestFactory } from '@nestjs/core';
import {useContainer} from "class-validator";
import {ValidationPipe} from "@nestjs/common";
import {ApplicationModule} from "./app.module";

(async () => {
    const app = await NestFactory.create(ApplicationModule)
    app.enableCors()
    useContainer(app.select(ApplicationModule), { fallbackOnErrors: true })
    app.useGlobalPipes(new ValidationPipe({validateCustomDecorators: true}))
    await app.listen(5000)
})()
