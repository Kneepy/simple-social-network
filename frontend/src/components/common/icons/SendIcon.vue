<template>
    <svg
        role="img"
        :viewBox="[0, 0, 24, 20]"
        :width="props.size"
        :height="props.size"
        :color="props.color"
        :fill="props.color"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
    >
        <line
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            x1="22"
            x2="9.218"
            y1="3"
            y2="10.083"
        ></line>
        <polygon
            fill="none"
            points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
        ></polygon>
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
