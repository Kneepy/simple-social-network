import { IsNotEmpty } from "class-validator"

export class DeleteUserDto {
    @IsNotEmpty()
    user_id: string
}

export class DeleteUserInterface {
    id: string
}
