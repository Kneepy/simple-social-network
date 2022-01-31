import { MessagesService } from "./messages.service";
import { FindMessageDto } from "./dto/find.dto";
import { CreateMessageDto } from "./dto/create.dto";
import { UsersService } from "../users/users.service";
import { DialogsService } from "../dialogs/dialogs.service";
import { UpdateMessageDto } from "./dto/update.dto";
import { DeleteMessageDto } from "./dto/delete.dto";
import { Dialogs, Messages } from "../../common/enities";
export declare class MessagesController {
    private readonly messagesService;
    private readonly usersService;
    private readonly dialogsService;
    constructor(messagesService: MessagesService, usersService: UsersService, dialogsService: DialogsService);
    findMessages(findMessagesData: FindMessageDto): Promise<Messages>;
    createMessage(payload: CreateMessageDto): Promise<Dialogs>;
    updateMessage(updateMessageData: UpdateMessageDto): Promise<Messages>;
    deleteMessage(deleteMessageData: DeleteMessageDto): Promise<void>;
}
