import { DynamicModule } from "@nestjs/common";
import { MailerOptionsInterface } from "./interfaces/options.interface";
export declare class MailerModule {
    static register(options: MailerOptionsInterface): DynamicModule;
}
