import { Boards } from "../../../common"
import { IsNotEmpty } from "class-validator"

export class UpdateBoardDto extends Boards {
    @IsNotEmpty()
    board_id: number
}

export class AttachPostOnBoard {
    @IsNotEmpty()
    post_id: number

    @IsNotEmpty()
    board_id: number
}
