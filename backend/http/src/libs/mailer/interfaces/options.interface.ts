import Mail from "nodemailer/lib/mailer";

export interface MailerOptionsInterface {
    host: string,
    port: number,
    secure: boolean,
    auth: {
        user: string,
        pass: string,
    }
}

export interface MailerSendAuthTokenOptions extends Pick<Mail.Options, "to" | "text"> {
    link: string
}

