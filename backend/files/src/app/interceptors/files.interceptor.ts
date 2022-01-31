import {CallHandler, ExecutionContext, Inject, mixin, NestInterceptor, Type} from "@nestjs/common";
import {CONFIG_MODULE_NAME} from "../app.constants";
import {ServeStaticModuleOptions} from "@nestjs/serve-static";
import * as md5 from "md5";
import {extname} from "path";
import * as path from "path";
import * as fs from "fs";
import {Buffer} from "buffer";
import {RpcException} from "@nestjs/microservices";
import {Observable} from "rxjs";

export function FilesRpcInterceptor(fieldName: string): Type<NestInterceptor> {
    class MixinFilesRpcInterceptor implements NestInterceptor {
        constructor(
            @Inject(CONFIG_MODULE_NAME) private readonly config: ServeStaticModuleOptions,
        ) {}

        async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
            const files: Array<Express.Multer.File> = context.switchToRpc().getData()[fieldName]
            if(!!files.length) {
                for(const file of files) {
                    const fileName = md5(Date.now().toString() + Math.random()) + extname(file.originalname)
                    const filePath = path.join(this.config.rootPath, fileName)
                    fs.writeFileSync(filePath, Buffer.from(file.buffer).toString("base64"), {encoding: 'base64'})

                    file.originalname = fileName
                }
                return next.handle()
            }
            else throw new RpcException(`Field ${fieldName} does not exist!`)
        }
    }
    return mixin(MixinFilesRpcInterceptor)
}