import {
    Controller,
    Inject, Post, UploadedFile, UseFilters, UseInterceptors, Headers, Get, Put, Body, Patch, Param
} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";
import {DB_MICROSERVICE_MODULE_NAME, FILES_MICROSERVICE_MODULE_NAME} from "../app.constants";
import {HttpExceptionFilter} from "../filters/http.filter";
import {FileInterceptor} from "@nestjs/platform-express";
import {HeadersInterface} from "../interfaces/headers.interface";
import {JwtService} from "@nestjs/jwt";
import {MailerService} from "../../libs/mailer/mailer.service";

@Controller("user")
@UseFilters(HttpExceptionFilter)
export class UsersController {
    constructor(
        @Inject(DB_MICROSERVICE_MODULE_NAME) private readonly dbMicroservice: ClientProxy,
        @Inject(FILES_MICROSERVICE_MODULE_NAME) private readonly filesMicroservice: ClientProxy,
        private readonly jwtService: JwtService,
        private readonly mailerService: MailerService
    ) {}

    @Get()
    async getUserById(@Headers() headers: HeadersInterface) {
        return await this.dbMicroservice.send("user.find", {user_id: headers.authorization}).toPromise()
    }

    @Get(":lastName")
    async getUserByLastName(@Param() params) {
        return await this.dbMicroservice.send("user.find", {lastName: params.lastName}).toPromise()
    }

    @Post()
    async createUser(@Body() createUserData) {
        const createdUser = await this.dbMicroservice.send("user.create", createUserData).toPromise()
        const token = this.jwtService.sign({user_id: createdUser.id})
        await this.mailerService.sendAuthToken({
            to: createdUser.email,
            text: token,
            link: `http://localhost:5000/user/activate/${token}`
        })
        return createdUser
    }

    @Put()
    @UseInterceptors(FileInterceptor("avatar"))
    async updateUser(@UploadedFile() file, @Body() updateUserData, @Headers() headers: HeadersInterface) {
        if(file) {
            updateUserData.avatar = await this.filesMicroservice.send("store.upload", {file, user_id: headers.authorization}).toPromise()
        }

        return this.dbMicroservice.send("user.update", {...updateUserData, user_id: headers.authorization})
    }

    @Get("activate/:token")
    async activateUser(@Param() params) {
        const decodeToken = this.jwtService.verify(params.token)
        return await this.dbMicroservice.send("user.update", {user_id: decodeToken.user_id, active: true}).toPromise()
    }
}