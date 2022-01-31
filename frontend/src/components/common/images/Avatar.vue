<template>
    <img v-if="props.link && avatar" :src="href()" :style="{ height: sizeImg, width: sizeImg }" alt=""/>
    <div v-else class="avatar" :style="{ height: sizeImg, width: sizeImg }"></div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useStore } from "vuex"
import { API } from "@/api/api.constants"

const props = defineProps<{ link?: string; size?: number | string }>()
const sizeImg = ref(typeof props.size === "string" ? props.size : (props.size ?? 32) + `px`)
const avatar = useStore().getters.getUser.avatar

function href() {
    if(props.link) {
        if(!!props.link.match(/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9][A-Za-zА-Яа-я0-9\-]*\.?)*\.[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/)) {
            return props.link
        } else {
            return API.files + props.link
        }
    } else {
        if(avatar) {
            return API.files + avatar
        } else {
            return null
        }
    }
}
</script>

<style lang="scss" scoped>
img {
    border-radius: 50%;
}
</style>
