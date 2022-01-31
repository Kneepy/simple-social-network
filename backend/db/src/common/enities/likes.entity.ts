import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Users } from "./users.entity"
import { Comments } from "./comments.entity"

@Entity()
export class Likes {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Users, (user: Users) => user.likes)
    user: Users
}
