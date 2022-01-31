import { Dialogs } from "../../common/enities";
import { Repository } from "typeorm";
import { FindOneOptions } from "../../index";
import { DeleteDialogInterface, FindDialogInterface } from "./dto";
export declare class DialogsService {
    private repository;
    constructor(repository: Repository<Dialogs>);
    findOne(findDialogData: FindDialogInterface, options?: FindOneOptions<Dialogs>): Promise<Dialogs>;
    update(updateDialogData: Dialogs): Promise<Dialogs>;
    delete(deleteDialogData: DeleteDialogInterface): Promise<import("typeorm").DeleteResult>;
}
