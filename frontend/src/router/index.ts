import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/auth",
        name: "Authorization",
        component: () => {},
    },
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/messenger",
        name: "Messenger",
        component: () => {},
    },
    {
        path: "/user/:lastName",
        name: "User",
        component: () => {},
        children: [
            {
                path: "saved",
                name: "UserSaved",
                component: () => {},
            },
        ],
    },
    {
        path: "/account",
        name: "Account",
        component: () => {},
        children: [
            {
                path: "settings",
                name: "AccountSettings",
                component: () => {},
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
