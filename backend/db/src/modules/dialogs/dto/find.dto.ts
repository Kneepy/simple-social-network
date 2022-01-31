import { IsNotEmpty } from "class-validator"
import { FindOneOptions } from "../../../index"
import { Dialogs } from "../../../common/enities/dialog.entity"

export class FindDialogDto {
    @IsNotEmpty()
    dialog_id: number

    options: FindOneOptions<Dialogs>
}

export interface FindDialogInterface {
    id: number
}
