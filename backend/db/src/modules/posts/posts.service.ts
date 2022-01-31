import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { FindOneOptions } from "../../index"
import { Posts } from "../../common/enities"
import { DeletePostDto, FindPostInterface } from "./dto"

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Posts) private repository: Repository<Posts>) {}

    async find(): Promise<Posts[]> {
        return this.repository.find()
    }

    async findOne(
        params: FindPostInterface,
        options: FindOneOptions<Posts> = { relations: ["user", "file", "comments", "boards"] },
    ): Promise<Posts> {
        return this.repository.findOne(params, options)
    }

    async update(updatePostDto: Posts): Promise<Posts> {
        return this.repository.save(updatePostDto)
    }

    async delete(params: DeletePostDto): Promise<any> {
        return this.repository.delete({ id: params.post_id })
    }
}
