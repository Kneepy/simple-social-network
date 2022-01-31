import { IsNotEmpty } from "class-validator"

export class AddUserToDialogDto {
    @IsNotEmpty()
    dialog_id: number

    @IsNotEmpty()
    user_id: string
}
