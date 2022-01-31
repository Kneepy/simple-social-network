import { Dialogs } from "../../../common/enities"
import { IsNotEmpty } from "class-validator"

export class UpdateDialogDto extends Dialogs {
    @IsNotEmpty()
    dialog_id: number
}
