<template>
    <svg
        role="img"
        :viewBox="[0, 0, 24, 24]"
        :width="props.size"
        :height="props.size"
        :color="props.color"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
    >
        <polygon points="20 21 12 13.44 4 21 4 3 20 3 20 21"></polygon>
    </svg>
</template>

<script setup lang="ts">
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
