<template>
    <div class="notifications">
        <Button v-for="notification in notifications" class="notification" transparent="">
            <Avatar :link="notification.user.avatar" :size="44" />
            <div class="notification-user">
                <router-link
                    :to="{ name: `User`, params: { lastName: notification.user.lastName } }"
                    class="notification-user__href"
                >
                    {{ notification.user.lastName }}
                </router-link>
                <div class="notification-message">
                    <span>
                        {{ getMessageByType(notification.type) }}.
                        <span class="date">{{ timeago(notification.date) }}</span>
                    </span>
                    <div v-if="notification.post" class="post"></div>
                </div>
            </div>
        </Button>
    </div>
</template>

<script setup lang="ts">
import Avatar from "@/components/common/images/Avatar.vue"
import Button from "@/components/common/buttons/Button.vue"
import timeago from "@/assets/timeago"
import { useStore } from "vuex"
import { NotificationType } from "@/store/types/user/notification"

const notifications = useStore().getters.getUser.notifications

function getMessageByType(type: NotificationType) {
    const messages = {
        subscribe: `подписался(-ась) на ваши обновления.`,
        like: `нравится ваше фото.`,
        comment: `прокомментировал(-а): `,
    }
    return messages[type]
}
</script>

<style lang="scss" scoped>
.notifications {
    box-shadow: $popUpShadow;
    border-radius: 8px;
    width: 500px;
    max-height: 360px;
    position: absolute;
    right: 0;
    top: 50px;
    background-color: $dark-light;
    z-index: 10;
    padding: 6px;
    overflow: auto;
    .notification {
        @include flexJustifyAlign(flex-start, center);
        padding: 6px;
        height: auto;
        .notification-user {
            margin: 0 12px;
            font-size: 14px;
            color: $whiteText;
            display: flex;
            .notification-message {
                margin-left: 6px;
                span {
                    .date {
                        color: $primaryText;
                    }
                }
            }
            .notification-user__href {
                color: $whiteText;
                font-weight: bold;
            }
        }
    }
}
</style>
