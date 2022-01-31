import {CallHandler, ExecutionContext, Inject, mixin, NestInterceptor, Type} from '@nestjs/common';
import { Observable } from 'rxjs';
import * as fs from "fs";
import * as path from "path";
import * as md5 from "md5";
import {extname} from "path";
import {Buffer} from "buffer";
import {CONFIG_MODULE_NAME} from "../app.constants";
import {RpcException} from "@nestjs/microservices";
import {ServeStaticModuleOptions} from "@nestjs/serve-static";

export function FileRpcInterceptor(fieldName: string): Type<NestInterceptor> {
    class MixinsFileRpcInterceptor implements NestInterceptor {
        constructor(
            @Inject(CONFIG_MODULE_NAME) private readonly config: ServeStaticModuleOptions,
        ) {}

        async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
            const file: Express.Multer.File = context.switchToRpc().getData()[fieldName]
            if(!!file) {
                const fileName = md5(Date.now().toString()) + extname(file.originalname)
                const filePath = path.join(this.config.rootPath, fileName)
                fs.writeFileSync(filePath, Buffer.from(file.buffer).toString("base64"), {encoding: 'base64'})

                file.originalname = fileName

                return next.handle()
            }
            else throw new RpcException(`Field ${fieldName} does not exist!`)
        }
    }
    return mixin(MixinsFileRpcInterceptor)
}