import {Inject, Injectable} from "@nestjs/common";
import Mail from "nodemailer/lib/mailer";
import {MAILER_MODULE_OPTIONS} from "./mailer.constants";
import {MailerSendAuthTokenOptions} from "./interfaces/options.interface";

@Injectable()
export class MailerService {
    constructor(@Inject(MAILER_MODULE_OPTIONS) private readonly mailer) {}

    async send(options: Mail.Options) {
        return await this.mailer.sendMail(options)
    }

    async sendAuthToken(options: MailerSendAuthTokenOptions) {
        return await this.mailer.sendMail({
            from: 'Faymary "<ilyafamin4@gmail.com>"',
            to: options.to,
            subject: 'Account confirmation',
            text: options.text,
            html: `
                <a href="${options.link}">${options.link}</a>
            `
        })
    }
}