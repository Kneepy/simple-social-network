import { FindOneOptions } from "../../../index";
import { Boards } from "../../../common/enities/boards.entity";
export declare class FindBoardDto {
    board_id: number;
    options: FindOneOptions<Boards>;
}
export interface FindBoardInterface {
    id: number;
}
