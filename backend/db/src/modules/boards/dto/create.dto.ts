import { IsNotEmpty } from "class-validator"
import { Boards } from "../../../common/enities"

export class CreateBoardDto extends Boards {
    @IsNotEmpty()
    user_id: string

    @IsNotEmpty()
    boardName: string
}
