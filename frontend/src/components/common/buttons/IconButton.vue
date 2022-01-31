<template>
    <Button
        @mouseover="isOver = $event"
        @mouseout="isOver = $event"
        :active="props.active"
        class="button"
        :class="[props.transparent ? `transparent` : ``]"
    >
        <slot />
        <div v-if="isOver && props.placeholder" class="placeholder">{{ props.placeholder }}</div>
    </Button>
</template>

<script setup lang="ts">
import Button from "@/components/common/buttons/Button.vue"
import IconRound from "@/components/common/icons/assets/IconRound.vue"
import { ref } from "vue"

const props = defineProps<{
    placeholder?: string
    active?: boolean
    transparent?: boolean
}>()
const isOver = ref(false)
</script>

<style scoped lang="scss">
.button {
    position: relative;
    border-radius: 50%;
    .placeholder {
        position: absolute;
        bottom: -45px;
        padding: 10px 12px;
        border-radius: 8px;
        font-size: 12px;
        color: $headerBthPlaceholderColor;
        background-color: $primaryIcon;
        opacity: 0.8;
        box-shadow: $popUpShadow;
    }
    &:hover {
        background-color: $iconButtonHoverBackground;
    }
}
</style>
