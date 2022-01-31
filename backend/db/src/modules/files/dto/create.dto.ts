import { IsNotEmpty } from "class-validator"
import { Users } from "../../../common/enities/users.entity"

export class CreateFileDto {
    @IsNotEmpty()
    fileName: string

    @IsNotEmpty()
    user_id: string
}

export class CreateFilesDto {
    @IsNotEmpty()
    fileNames: string[]

    @IsNotEmpty()
    user_id: string
}

export class CreateFileInterface {
    user: Users
    fileName: string
}

export class CreateFilesInterface {
    [index: number]: CreateFileInterface
}
