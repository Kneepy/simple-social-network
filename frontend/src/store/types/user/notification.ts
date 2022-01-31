import { User } from "@/store/types/user/store"

export type NotificationType = "subscribe" | "like" | "comment"

export type NotificationDataType = ""

export interface Notification {
    user: User
    type: NotificationType
    date: string | number
    data: NotificationDataType
}
