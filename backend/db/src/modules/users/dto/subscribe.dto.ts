import { IsNotEmpty } from "class-validator"

export class SubscribeUserDto {
    @IsNotEmpty()
    author_id: string

    @IsNotEmpty()
    subscriber_id: string
}
