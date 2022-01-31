import { FindOneOptions } from "../../../index";
import { Dialogs } from "../../../common/enities/dialog.entity";
export declare class FindDialogDto {
    dialog_id: number;
    options: FindOneOptions<Dialogs>;
}
export interface FindDialogInterface {
    id: number;
}
