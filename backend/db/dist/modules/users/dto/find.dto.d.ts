import { FindOneOptions } from "../../../index";
import { Users } from "../../../common/enities";
export declare class FindUserDto {
    user_id: string;
    lastName: string;
    options: FindOneOptions<Users>;
}
export declare class FindUserInterface {
    lastName?: string;
    id?: string;
    email?: string;
}
