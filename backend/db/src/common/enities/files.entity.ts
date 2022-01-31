import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Users } from "./users.entity"

@Entity()
export class Files {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    fileName: string

    @ManyToOne(() => Users, (user: Users) => user.files)
    @JoinColumn()
    user: Users
}
