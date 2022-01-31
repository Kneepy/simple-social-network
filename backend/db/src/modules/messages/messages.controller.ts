import { Controller, UseFilters, UsePipes } from "@nestjs/common"
import { MessagesService } from "./messages.service"
import { BaseRpcExceptionFilter, EventPattern, Payload } from "@nestjs/microservices"
import { FindMessageDto } from "./dto/find.dto"
import { CreateMessageDto } from "./dto/create.dto"
import { UsersService } from "../users/users.service"
import { DialogsService } from "../dialogs/dialogs.service"
import { UpdateMessageDto } from "./dto/update.dto"
import { DeleteMessageDto } from "./dto/delete.dto"
import { ValidationPipe } from "../../common/pipes"
import { Dialogs, Messages } from "../../common/enities"

@Controller()
@UsePipes(ValidationPipe)
@UseFilters(BaseRpcExceptionFilter)
export class MessagesController {
    constructor(
        private readonly messagesService: MessagesService,
        private readonly usersService: UsersService,
        private readonly dialogsService: DialogsService,
    ) {}

    @EventPattern("message.find")
    async findMessages(@Payload() findMessagesData: FindMessageDto): Promise<Messages> {
        return await this.messagesService.findOne(
            { id: findMessagesData.message_id },
            findMessagesData.options,
        )
    }

    @EventPattern("message.create")
    async createMessage(@Payload() payload: CreateMessageDto): Promise<Dialogs> {
        const user = await this.usersService.findOne({ id: payload.user_id }, { relations: [] })
        const message = Object.assign(new Messages(), {
            user,
            value: payload.value,
            files: payload.files,
        })
        const dialog = await this.dialogsService.findOne(
            { id: payload.dialog_id },
            { relations: ["messages", "users"] },
        )
        dialog.messages.push(message)

        return await this.dialogsService.update(dialog)
    }

    @EventPattern("message.update")
    async updateMessage(@Payload() updateMessageData: UpdateMessageDto): Promise<Messages> {
        return await this.messagesService.update(
            Object.assign(
                await this.messagesService.findOne({ id: updateMessageData.message_id }),
                updateMessageData,
            ),
        )
    }

    @EventPattern("message.delete")
    async deleteMessage(@Payload() deleteMessageData: DeleteMessageDto) {}
}
