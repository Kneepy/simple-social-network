import { Posts } from "../../../common/enities"
import { IsNotEmpty } from "class-validator"

export class UpdatePostDto extends Posts {
    @IsNotEmpty()
    post_id: number
}
