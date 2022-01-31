import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Posts } from "./posts.entity"
import { Users } from "./users.entity"

@Entity()
export class Boards {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    boardName: string

    @Column({ default: true })
    personal: boolean

    @Column({ nullable: true })
    description?: string

    @ManyToOne(() => Users, (user: Users) => user.boards)
    user: Users

    @ManyToMany(() => Posts, (posts: Posts) => posts.boards, { cascade: true })
    @JoinTable()
    posts: Posts[]
}
