import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Dialogs } from "../../common/enities"
import { Repository } from "typeorm"
import { FindOneOptions } from "../../index"
import { DeleteDialogInterface, FindDialogInterface } from "./dto"

@Injectable()
export class DialogsService {
    constructor(@InjectRepository(Dialogs) private repository: Repository<Dialogs>) {}

    async findOne(
        findDialogData: FindDialogInterface,
        options: FindOneOptions<Dialogs> = { relations: ["users"] },
    ): Promise<Dialogs> {
        return await this.repository.findOne(findDialogData, options)
    }

    async update(updateDialogData: Dialogs): Promise<Dialogs> {
        return await this.repository.save(updateDialogData)
    }

    async delete(deleteDialogData: DeleteDialogInterface) {
        return await this.repository.delete(deleteDialogData)
    }
}
