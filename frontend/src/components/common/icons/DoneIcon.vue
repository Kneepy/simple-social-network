<template>
    <svg
        :width="props.size"
        :height="props.size"
        :color="props.color"
        :stroke="props.color"
        fill="currentColor"
        role="img"
        :viewBox="[0, 0, 24, 24]"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
    >
        <path
            d="
            M9.17 21.75.73 12.79c-.97-1.04-.97-2.71 0-3.75a2.403 2.403 0 0 1 3.53 0l4.91 5.22L19.74 3.03c.98-1.04 2.55-1.04 3.53 0 .97 1.03.97 2.71 0 3.74L9.17 21.75z
        "
        ></path>
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
