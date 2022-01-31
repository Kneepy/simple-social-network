import { IsNotEmpty } from "class-validator"
import { Users } from "../../../common/enities"

export class UpdateUserDto extends Users {
    @IsNotEmpty()
    user_id?: string
}
