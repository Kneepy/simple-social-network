<template>
    <img :src="logo" alt="" :style="{ width: width + `px` }" />
</template>

<script lang="ts" setup>
import { defineProps } from "vue"

const logo = require("@/assets/xvdHG-usByg.jpg")
const props = defineProps<{ width: number }>()
</script>

<style scoped lang="scss">
img {
    border-radius: 50%;
}
</style>
