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
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="6" cy="12" r="1.5"></circle>
        <circle cx="18" cy="12" r="1.5"></circle>
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
