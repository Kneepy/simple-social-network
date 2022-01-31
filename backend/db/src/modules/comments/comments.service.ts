import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Comments } from "../../common"
import { Repository } from "typeorm"
import { FindCommentInterface } from "./dto/find.dto"
import { DeleteCommentInterface } from "./dto/delete.dto"
import { FindOneOptions } from "../../index"

@Injectable()
export class CommentsService {
    constructor(@InjectRepository(Comments) private readonly repository: Repository<Comments>) {}

    async findOne(
        findCommentData: FindCommentInterface,
        options: FindOneOptions<Comments> = { relations: ["user", "answers"] },
    ): Promise<Comments> {
        return await this.repository.findOne(findCommentData, options)
    }

    async update(updateCommentData: Comments): Promise<Comments> {
        return await this.repository.save(updateCommentData)
    }

    async delete(deleteCommentData: DeleteCommentInterface) {
        return await this.repository.delete(deleteCommentData)
    }
}
