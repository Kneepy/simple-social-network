import { IsNotEmpty, IsOptional } from "class-validator"
import { FindOneOptions } from "../../../index"
import { Posts } from "../../../common/enities"

export class FindPostDto {
    @IsNotEmpty()
    post_id: number

    @IsOptional()
    options: FindOneOptions<Posts>
}

export interface FindPostInterface {
    id: number
}
