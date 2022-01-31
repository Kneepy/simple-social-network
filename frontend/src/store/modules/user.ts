import UserStore from "@/store/types/user/store"
import { Module } from "vuex"
import axios from "axios"
import { API } from "@/api/api.constants"

export const userStore: Module<UserStore, any> = {
    state: () => ({ user: {} } as UserStore),

    actions: {
        async getUser({ commit }) {
            const user = await axios.get(API.user.get)
            commit("setUser", user.data)
        }
    },

    mutations: {
        setUser: (state: UserStore, value: UserStore) =>  Object.assign(state.user, value) as UserStore
    },

    getters: {
        getUser: (state: UserStore) => state.user,
    },
}
