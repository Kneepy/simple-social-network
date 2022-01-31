import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Users } from "./users.entity"
import { Boards } from "./boards.entity"
import { Comments } from "./comments.entity"
import { Files } from "./files.entity"

@Entity()
export class Posts {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    title: string

    @Column({ nullable: true })
    description: string

    @Column({ nullable: true })
    link: string

    @OneToOne(() => Files, (file: Files) => file.id)
    @JoinColumn()
    file: Files

    @ManyToOne(() => Users, (user: Users) => user.posts)
    user: Users

    @OneToMany(() => Comments, (comments: Comments) => comments.post, { cascade: true })
    comments: Comments[]

    @ManyToMany(() => Boards, (boards: Boards) => boards.posts)
    boards: Boards[]
}
