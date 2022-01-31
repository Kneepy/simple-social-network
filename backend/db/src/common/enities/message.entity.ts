import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Dialogs } from "./dialog.entity"
import { Users } from "./users.entity"
import { Files } from "./files.entity"

@Entity()
export class Messages {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: string

    @Column({ default: false })
    viewed: boolean

    @ManyToOne(() => Dialogs, (dialog: Dialogs) => dialog.messages)
    dialog: Dialogs

    @ManyToOne(() => Users, (user: Users) => user.messages)
    user: Users

    @OneToMany(() => Files, (files: Files) => files.id)
    @JoinColumn()
    files: Files[]
}
