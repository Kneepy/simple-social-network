import {Injectable} from "@nestjs/common";
import * as path from "path";
import {ServeStaticModuleOptions, ServeStaticModuleOptionsFactory} from "@nestjs/serve-static";

@Injectable()
export class ConfigService implements ServeStaticModuleOptionsFactory {
    async createLoggerOptions(): Promise<ServeStaticModuleOptions[]> {
        return [{
            rootPath: path.resolve(process.cwd(), './store')
        }]
    }
}