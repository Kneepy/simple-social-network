import { createStore } from "vuex"
import { userStore } from "@/store/modules/user"
import { postStore } from "@/store/modules/post"
import Store from "@/store/types/user/store"

export default createStore<Store>({
    modules: { userStore, postStore },
})
