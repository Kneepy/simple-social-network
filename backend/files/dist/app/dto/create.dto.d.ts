/// <reference types="multer" />
export declare class CreateFileDto {
    file: Express.Multer.File;
    user_id: string;
}
export declare class CreateFilesDto {
    files: Array<Express.Multer.File>;
    user_id: string;
}
