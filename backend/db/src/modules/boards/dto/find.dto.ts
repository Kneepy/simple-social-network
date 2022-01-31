import { IsNotEmpty } from "class-validator"
import { FindOneOptions } from "../../../index"
import { Boards } from "../../../common/enities/boards.entity"

export class FindBoardDto {
    @IsNotEmpty()
    board_id: number

    options: FindOneOptions<Boards>
}

export interface FindBoardInterface {
    id: number
}
