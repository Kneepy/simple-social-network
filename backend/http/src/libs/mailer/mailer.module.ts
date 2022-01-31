import {DynamicModule, Module} from "@nestjs/common";
import {MailerOptionsInterface} from "./interfaces/options.interface";
import {CreateMailerProvider} from "./mailer.providers";
import {MailerService} from "./mailer.service";

@Module({
    providers: [MailerService],
    exports: [MailerService]
})
export class MailerModule {
    static register(options: MailerOptionsInterface): DynamicModule {
        return {
            module: MailerModule,
            providers: CreateMailerProvider(options)
        }
    }
}
