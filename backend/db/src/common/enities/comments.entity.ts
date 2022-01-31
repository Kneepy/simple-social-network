import {
    Column,
    Entity,
    JoinColumn,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from "typeorm"
import { Users } from "./users.entity"
import { Posts } from "./posts.entity"
import { Likes } from "./likes.entity"

@Entity()
export class Comments {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    value: string

    @ManyToOne(() => Users, (user: Users) => user.comments)
    user: Users

    @ManyToOne(() => Posts, (post: Posts) => post.comments)
    post: Posts

    @OneToMany(() => Comments, (comments: Comments) => comments.answers)
    answers: Comments[]

    @ManyToMany(() => Likes, (likes: Likes) => likes.id, { cascade: true })
    @JoinColumn()
    likes: Likes[]
}
