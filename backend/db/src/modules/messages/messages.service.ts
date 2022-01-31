import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Messages } from "../../common"
import { FindMessageInterface } from "./dto/find.dto"
import { FindOneOptions } from "../../index"

@Injectable()
export class MessagesService {
    constructor(@InjectRepository(Messages) private repository: Repository<Messages>) {}

    async findOne(
        findMessageData: FindMessageInterface,
        options: FindOneOptions<Messages> = {
            relations: ["user", "dialog", "dialog.users", "files"],
        },
    ): Promise<Messages> {
        return await this.repository.findOne(findMessageData, options)
    }

    async update(updateMessageData: Messages): Promise<Messages> {
        return await this.repository.save(updateMessageData)
    }
}
