import { IsNotEmpty } from "class-validator"

export class CreateDialogDto {
    @IsNotEmpty()
    author_id: string

    @IsNotEmpty()
    interlocutor_id: string
}
