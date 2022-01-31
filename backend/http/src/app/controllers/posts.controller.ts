import {
    Body,
    Controller,
    Inject,
    Post,
    UploadedFile,
    UseInterceptors,
    Headers,
    Get,
    Param,
    Patch, Delete, UseFilters
} from "@nestjs/common";
import {DB_MICROSERVICE_MODULE_NAME, FILES_MICROSERVICE_MODULE_NAME} from "../app.constants";
import {ClientProxy} from "@nestjs/microservices";
import {FileInterceptor} from "@nestjs/platform-express";
import {HeadersInterface} from "../interfaces/headers.interface";
import {HttpExceptionFilter} from "../filters/http.filter";

@Controller("post")
@UseFilters(HttpExceptionFilter)
export class PostsController {
    constructor(
        @Inject(DB_MICROSERVICE_MODULE_NAME) private readonly dbMicroservice: ClientProxy,
        @Inject(FILES_MICROSERVICE_MODULE_NAME) private readonly filesMicroservice: ClientProxy,
    ) {}

    @Post()
    @UseInterceptors(FileInterceptor("file"))
    async createPost(@UploadedFile() file, @Body() createPostData, @Headers() headers: HeadersInterface) {
        createPostData.file = await this.filesMicroservice.send("store.upload", {file, user_id: headers.authorization}).toPromise()

        return await this.dbMicroservice.send("post.create", {...createPostData, user_id: headers.authorization}).toPromise()
    }

    @Get(":post_id")
    async getPost(@Param() getPostData) {
        return await this.dbMicroservice.send("post.find", {post_id: getPostData.post_id}).toPromise()
    }

    @Patch(":post_id")
    async updatePost(@Body() updatePostData, @Param() updatePostParams) {
        return await this.dbMicroservice.send("post.update", {...updatePostData, post_id: updatePostParams.post_id}).toPromise()
    }

    @Delete(":post_id")
    async deletePost(@Param() deletePostParams) {
        return await this.dbMicroservice.send("post.delete", {post_id: deletePostParams.post_id}).toPromise()
    }
}