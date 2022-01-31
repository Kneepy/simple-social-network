<template>
    <span class="material-icons-round" :style="style"><slot /></span>
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

const style = ref({
    fontSize: props.size + "px",
    color: props.color,
})
</script>
