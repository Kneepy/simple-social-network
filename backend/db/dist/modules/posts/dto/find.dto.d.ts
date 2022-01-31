import { FindOneOptions } from "../../../index";
import { Posts } from "../../../common/enities";
export declare class FindPostDto {
    post_id: number;
    options: FindOneOptions<Posts>;
}
export interface FindPostInterface {
    id: number;
}
