import Mail from "nodemailer/lib/mailer";
import { MailerSendAuthTokenOptions } from "./interfaces/options.interface";
export declare class MailerService {
    private readonly mailer;
    constructor(mailer: any);
    send(options: Mail.Options): Promise<any>;
    sendAuthToken(options: MailerSendAuthTokenOptions): Promise<any>;
}
