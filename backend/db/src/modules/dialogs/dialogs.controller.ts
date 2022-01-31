import { Controller, UseFilters, UsePipes } from "@nestjs/common"
import { BaseRpcExceptionFilter, EventPattern, Payload } from "@nestjs/microservices"
import { DialogsService } from "./dialogs.service"
import { ValidationPipe } from "../../common/pipes"
import { Dialogs } from "../../common/enities"
import {
    AddUserToDialogDto,
    CreateDialogDto,
    DeleteDialogDto,
    FindDialogDto,
    UpdateDialogDto,
} from "./dto"
import { UsersService } from "../users/users.service"

@Controller()
@UseFilters(BaseRpcExceptionFilter)
@UsePipes(ValidationPipe)
export class DialogsController {
    constructor(
        private readonly dialogsService: DialogsService,
        private readonly usersService: UsersService,
    ) {}

    @EventPattern("dialog.find")
    async findDialog(@Payload() findDialogData: FindDialogDto): Promise<Dialogs> {
        return await this.dialogsService.findOne(
            { id: findDialogData.dialog_id },
            findDialogData.options,
        )
    }

    @EventPattern("dialog.create")
    async createDialog(@Payload() payload: CreateDialogDto): Promise<Dialogs> {
        const author = await this.usersService.findOne(
            { id: payload.author_id },
            { relations: ["dialogs"] },
        )
        const interlocutor = await this.usersService.findOne(
            { id: payload.interlocutor_id },
            { relations: ["dialogs"] },
        )
        const dialog = Object.assign(new Dialogs(), { users: [author, interlocutor] })

        return await this.dialogsService.update(dialog)
    }

    @EventPattern("dialog.update")
    async updateDialog(@Payload() payload: UpdateDialogDto): Promise<Dialogs> {
        return await this.dialogsService.update(
            Object.assign(await this.dialogsService.findOne({ id: payload.dialog_id }), payload),
        )
    }

    @EventPattern("dialog.add_user")
    async addUserToDialog(@Payload() payload: AddUserToDialogDto): Promise<Dialogs> {
        const dialog = await this.dialogsService.findOne(
            { id: payload.dialog_id },
            { relations: ["users"] },
        )
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] })
        dialog.users.push(user)
        return await this.dialogsService.update(dialog)
    }

    @EventPattern("dialog.delete")
    async deleteDialog(@Payload() deleteDialogData: DeleteDialogDto) {}
}
