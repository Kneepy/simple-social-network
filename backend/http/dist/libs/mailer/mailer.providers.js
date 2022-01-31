"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMailerProvider = void 0;
const mailer_constants_1 = require("./mailer.constants");
const nodemailer = require("nodemailer");
function CreateMailerProvider(options) {
    return [{
            provide: mailer_constants_1.MAILER_MODULE_OPTIONS,
            useFactory: () => nodemailer.createTransport(options)
        }];
}
exports.CreateMailerProvider = CreateMailerProvider;
//# sourceMappingURL=mailer.providers.js.map