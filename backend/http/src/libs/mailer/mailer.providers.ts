import {MailerOptionsInterface} from "./interfaces/options.interface";
import {Provider} from "@nestjs/common";
import {MAILER_MODULE_OPTIONS} from "./mailer.constants";
import * as nodemailer from "nodemailer"

export function CreateMailerProvider(options: MailerOptionsInterface): Provider[] {
    return [{
        provide: MAILER_MODULE_OPTIONS,
        useFactory: () => nodemailer.createTransport(options)
    }]
}