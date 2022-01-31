import { Boards } from "./boards.entity"
import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Posts } from "./posts.entity"
import { Dialogs } from "./dialog.entity"
import { Messages } from "./message.entity"
import { Comments } from "./comments.entity"
import { Likes } from "./likes.entity"
import { Files } from "./files.entity"

@Entity()
export class Users {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({ nullable: false })
    lastName: string

    @Column({ nullable: false })
    firstName: string

    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    password: string

    @Column({ nullable: true })
    surname: string

    @Column({ nullable: true })
    info: string

    @Column({ nullable: true })
    website: string

    @Column({ nullable: false, default: false })
    active: boolean

    @OneToOne(() => Files, (file: Files) => file.id)
    @JoinColumn()
    avatar: Files

    @OneToMany(() => Boards, (boards: Boards) => boards.user, { cascade: true })
    boards: Boards[]

    @OneToMany(() => Posts, (posts: Posts) => posts.user, { cascade: true })
    posts: Posts[]

    @ManyToMany(() => Dialogs, (dialog: Dialogs) => dialog.users)
    dialogs: Dialogs[]

    @ManyToMany(() => Users, (users: Users) => users.subscribers)
    subscriptions: Users[]

    @ManyToMany(() => Users, (users: Users) => users.subscriptions)
    @JoinTable()
    subscribers: Users[]

    @OneToMany(() => Messages, (message: Messages) => message.user)
    messages: Messages[]

    @OneToMany(() => Comments, (comments: Comments) => comments.user)
    comments: Comments[]

    @OneToMany(() => Likes, (likes: Likes) => likes.user)
    likes: Likes[]

    @OneToMany(() => Files, (files: Files) => files.user)
    files: Files[]

    @ManyToMany(() => Users, (users: Users) => users.accounts)
    @JoinTable()
    accounts: Users[]
}
