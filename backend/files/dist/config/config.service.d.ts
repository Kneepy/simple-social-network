import { ServeStaticModuleOptions, ServeStaticModuleOptionsFactory } from "@nestjs/serve-static";
export declare class ConfigService implements ServeStaticModuleOptionsFactory {
    createLoggerOptions(): Promise<ServeStaticModuleOptions[]>;
}
