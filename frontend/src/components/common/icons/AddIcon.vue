<template>
    <svg
        role="img"
        :viewBox="[0, 0, 24, 24]"
        :width="props.size"
        :height="props.size"
        :color="props.color"
        :stroke="props.color"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
        stroke-width="2"
    >
        <path
            d="
            M 1 10
            v 4
            q 0 9, 9 9
            h 4
            q 9 0, 9 -9
            v -4
            q 0 -9, -9 -9
            h -4
            q -9 0, -9 9
        "
        />
        <line x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line>
        <line x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line>
    </svg>
</template>

<script setup lang="ts">
import { ref } from "@vue/runtime-core"
import { colors } from "@/components/common/icons/assets/colors"

const props = defineProps({
    size: {
        type: [String, Number],
        default: 24,
    },
    color: {
        type: String,
        default: colors.primary,
    },
})
</script>

<style lang="scss" scoped>
svg {
    line {
        stroke-linecap: round;
        stroke-linejoin: round;
    }
}
</style>
