<template>
    <button
        @mouseover="$emit(`mouseover`, true)"
        @mouseout="$emit(`mouseout`, false)"
        :class="[props.active ? `activeButton` : ``, props.transparent ? `transparent` : ``]"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    active?: boolean
    transparent?: boolean
}>()
defineEmits(["mouseover", "mouseout"])
</script>

<style scoped lang="scss">
button {
    @include flexJustifyAlign(center, center);
    outline: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    color: $primaryText;
    background-color: $buttonBackground;
    &:hover {
        background-color: $buttonHoverBackground;
    }
}
</style>
