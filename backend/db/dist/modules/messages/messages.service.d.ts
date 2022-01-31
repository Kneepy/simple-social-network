import { Repository } from "typeorm";
import { Messages } from "../../common";
import { FindMessageInterface } from "./dto/find.dto";
import { FindOneOptions } from "../../index";
export declare class MessagesService {
    private repository;
    constructor(repository: Repository<Messages>);
    findOne(findMessageData: FindMessageInterface, options?: FindOneOptions<Messages>): Promise<Messages>;
    update(updateMessageData: Messages): Promise<Messages>;
}
