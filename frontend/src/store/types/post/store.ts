import { User } from "@/store/types/user/store"

export interface Comment {
    user: User
    post: Post
    value: string
    files: string[]
    answers: Comment[]
}

export interface Post {
    title: string
    description: string
    file: string
    comments: Comment[]
}

export interface PostStore {
    posts: Post[]
}
