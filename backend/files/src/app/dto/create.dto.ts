import {IsNotEmpty} from "class-validator";

export class CreateFileDto {
    @IsNotEmpty()
    file: Express.Multer.File

    @IsNotEmpty()
    user_id: string
}

export class CreateFilesDto {
    @IsNotEmpty()
    files: Array<Express.Multer.File>

    @IsNotEmpty()
    user_id: string
}