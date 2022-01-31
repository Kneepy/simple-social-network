import { Module } from "vuex"
import { PostStore } from "@/store/types/post/store"

export const postStore: Module<PostStore, any> = {
    state: () =>
        ({
            posts: [
                {
                    title: `This is first post on Faymary`,
                    file: `a1085908240ba23794f6bce41542a64f.jpg`,
                },
            ],
        } as PostStore),
}
