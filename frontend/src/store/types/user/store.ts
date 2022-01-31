import { Notification } from "@/store/types/user/notification"

export interface User {
    lastName: string
    firstName: string
    fullName: string
    email: string
    surname: string
    info: string
    website: string
    avatar: string
    id: string
    accounts: User[]
    notifications: Notification[]
}

export default interface UserStore {
    user: User
}
