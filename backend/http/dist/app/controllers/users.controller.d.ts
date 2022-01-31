import { ClientProxy } from "@nestjs/microservices";
import { HeadersInterface } from "../interfaces/headers.interface";
import { JwtService } from "@nestjs/jwt";
import { MailerService } from "../../libs/mailer/mailer.service";
export declare class UsersController {
    private readonly dbMicroservice;
    private readonly filesMicroservice;
    private readonly jwtService;
    private readonly mailerService;
    constructor(dbMicroservice: ClientProxy, filesMicroservice: ClientProxy, jwtService: JwtService, mailerService: MailerService);
    getUserById(headers: HeadersInterface): Promise<any>;
    getUserByLastName(params: any): Promise<any>;
    createUser(createUserData: any): Promise<any>;
    updateUser(file: any, updateUserData: any, headers: HeadersInterface): Promise<import("rxjs").Observable<any>>;
    activateUser(params: any): Promise<any>;
}
