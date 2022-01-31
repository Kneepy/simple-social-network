<template>
    <ul>
        <li>
            <router-link :to="{ name: `Home` }" v-slot="{ isActive }">
                <IconButton placeholder="Главная" :active="isActive">
                    <Icon.Home :size="22" :color="checkActive(isActive)">home</Icon.Home>
                </IconButton>
            </router-link>
        </li>
        <li>
            <router-link :to="{ name: `Messenger` }" v-slot="{ isActive }">
                <IconButton placeholder="Messenger" :active="isActive">
                    <Icon.Send :size="22" :color="checkActive(isActive)">send</Icon.Send>
                </IconButton>
            </router-link>
        </li>
        <li>
            <IconButton @click="" placeholder="Создать">
                <Icon.Add :size="22" />
            </IconButton>
        </li>
        <li class="notifications" v-click-outside="closeNotifications">
            <IconButton
                @click="openNotifications"
                :placeholder="!isOpenNotifications ? `Уведомления` : ``"
            >
                <Icon.Like :size="22" />
            </IconButton>
            <Notifications v-if="isOpenNotifications" />
        </li>
        <li class="profile" v-click-outside="closeProfile">
            <IconButton
                :placeholder="!isOpenProfile ? `Профиль` : ``"
                transparent
                @click="openProfile"
            >
                <Avatar />
            </IconButton>
            <Profile v-if="isOpenProfile" />
        </li>
    </ul>
</template>

<script setup lang="ts">
import IconButton from "@/components/common/buttons/IconButton.vue"
import IconRound from "@/components/common/icons/assets/IconRound.vue"
import * as Icon from "@/components/common/icons"
import Profile from "@/components/header/Profile.vue"
import Notifications from "@/components/header/Notifications.vue"
import Avatar from "@/components/common/images/Avatar.vue"
import { vClickOutside } from "@/components/common/directives/vClickOutside"
import { colors } from "@/components/common/icons/assets/colors"
import { ref } from "vue"

const isOpenProfile = ref(false)
const isOpenNotifications = ref(false)

function checkActive(isActive: boolean) {
    return isActive ? colors.active : undefined
}

function openProfile() {
    isOpenProfile.value = !isOpenProfile.value
}
function closeProfile() {
    isOpenProfile.value = false
}

function openNotifications() {
    isOpenNotifications.value = !isOpenNotifications.value
}
function closeNotifications() {
    isOpenNotifications.value = false
}
</script>

<style lang="scss" scoped>
ul {
    @include flexJustifyAlign(center, center);
    list-style: none;
    margin: 0;
    height: 100%;
    padding-left: 0;
    li {
        height: 100%;
        aspect-ratio: 1;
        margin-left: 8px;
        &.profile,
        &.notifications {
            position: relative;
        }
    }
}
</style>
