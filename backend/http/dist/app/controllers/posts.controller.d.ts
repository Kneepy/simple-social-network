import { ClientProxy } from "@nestjs/microservices";
import { HeadersInterface } from "../interfaces/headers.interface";
export declare class PostsController {
    private readonly dbMicroservice;
    private readonly filesMicroservice;
    constructor(dbMicroservice: ClientProxy, filesMicroservice: ClientProxy);
    createPost(file: any, createPostData: any, headers: HeadersInterface): Promise<any>;
    getPost(getPostData: any): Promise<any>;
    updatePost(updatePostData: any, updatePostParams: any): Promise<any>;
    deletePost(deletePostParams: any): Promise<any>;
}
