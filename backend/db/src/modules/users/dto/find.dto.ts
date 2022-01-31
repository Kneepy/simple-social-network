import { IsNotEmpty, IsOptional } from "class-validator"
import { FindOneOptions } from "../../../index"
import { Users } from "../../../common/enities"

export class FindUserDto {
    @IsOptional()
    user_id: string

    @IsOptional()
    lastName: string

    @IsOptional()
    options: FindOneOptions<Users>
}

export class FindUserInterface {
    lastName?: string
    id?: string
    email?: string
}
