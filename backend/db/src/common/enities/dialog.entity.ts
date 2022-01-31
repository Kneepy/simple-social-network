import { Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Users } from "./users.entity"
import { Messages } from "./message.entity"

@Entity()
export class Dialogs {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToMany(() => Users, (user: Users) => user.dialogs)
    @JoinTable()
    users: Users[]

    @OneToMany(() => Messages, (message: Messages) => message.dialog, { cascade: true })
    @JoinTable()
    messages: Messages[]
}
