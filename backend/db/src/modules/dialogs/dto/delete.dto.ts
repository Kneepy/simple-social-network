import { IsNotEmpty } from "class-validator"

export class DeleteDialogDto {
    @IsNotEmpty()
    dialog_id: number
}

export interface DeleteDialogInterface {
    id: number
}
