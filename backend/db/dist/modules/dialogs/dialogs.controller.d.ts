import { DialogsService } from "./dialogs.service";
import { Dialogs } from "../../common/enities";
import { AddUserToDialogDto, CreateDialogDto, DeleteDialogDto, FindDialogDto, UpdateDialogDto } from "./dto";
import { UsersService } from "../users/users.service";
export declare class DialogsController {
    private readonly dialogsService;
    private readonly usersService;
    constructor(dialogsService: DialogsService, usersService: UsersService);
    findDialog(findDialogData: FindDialogDto): Promise<Dialogs>;
    createDialog(payload: CreateDialogDto): Promise<Dialogs>;
    updateDialog(payload: UpdateDialogDto): Promise<Dialogs>;
    addUserToDialog(payload: AddUserToDialogDto): Promise<Dialogs>;
    deleteDialog(deleteDialogData: DeleteDialogDto): Promise<void>;
}
