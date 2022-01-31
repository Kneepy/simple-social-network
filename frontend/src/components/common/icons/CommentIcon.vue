<template>
    <svg
        role="img"
        :viewBox="[0, 0, 24, 24]"
        :width="props.size"
        :height="props.size"
        :color="props.color"
        :fill="props.color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
    >
        <path
            d="
            M 20.656 17.008a9.993 9.993 0 10-3.59 3.615
            L 22 22 z
        "
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
        />
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
