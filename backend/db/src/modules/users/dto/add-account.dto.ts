import { IsNotEmpty } from "class-validator"

export class AddAccountDto {
    @IsNotEmpty()
    user_id: string

    @IsNotEmpty()
    account_id: string
}