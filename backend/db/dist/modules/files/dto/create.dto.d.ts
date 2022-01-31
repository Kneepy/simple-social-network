import { Users } from "../../../common/enities/users.entity";
export declare class CreateFileDto {
    fileName: string;
    user_id: string;
}
export declare class CreateFilesDto {
    fileNames: string[];
    user_id: string;
}
export declare class CreateFileInterface {
    user: Users;
    fileName: string;
}
export declare class CreateFilesInterface {
    [index: number]: CreateFileInterface;
}
