<template>
    <label v-click-outside="rollUpSearch" v-esc-click="rollUpSearch">
        <input
            type="text"
            placeholder="Поиск"
            :value="props.modelValue"
            @input="$emit(`update:modelValue`, $event.target.value)"
        />
        <div @click="disturbSearch" v-if="isOpen" class="input input-inner">
            <IconRound :size="18" :color="colors.dark">search</IconRound>
            <span class="input-inner__value">
                {{ props.modelValue ?? props.modelValue === "" ? props.modelValue : "Поиск" }}
            </span>
        </div>
        <div class="input-inner__close" v-else>
            <div class="input-inner__close__button">
                <IconButton @click="disturbSearch">
                    <IconRound :size="10" :color="colors.dark">close</IconRound>
                </IconButton>
            </div>
        </div>
    </label>
</template>

<script lang="ts" setup>
import IconRound from "@/components/common/icons/assets/IconRound.vue"
import IconButton from "@/components/common/buttons/IconButton.vue"
import { vEscClick } from "@/components/common/directives/vEscClick"
import { vClickOutside } from "@/components/common/directives/vClickOutside"
import { ref } from "vue"
import { colors } from "@/components/common/icons/assets/colors"

const props = defineProps<{ modelValue?: string }>()
defineEmits(["update:modelValue"])

const isOpen = ref(true)

function disturbSearch() {
    isOpen.value = !isOpen.value
}
function rollUpSearch() {
    isOpen.value = !isOpen.value ? true : isOpen.value
}
</script>

<style lang="scss" scoped>
input {
    height: 100%;
    width: 100%;
    padding: 4px 48px 4px 16px;
    background-color: $inputBackground;
    color: $inputText;
    font-size: 16px;
    font-family: $font;
    &::placeholder {
        color: $primaryText;
        font-size: 16px;
        font-weight: lighter;
        font-family: $font;
    }
}
.input-inner {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: $inputBackground;
    color: $primaryText;
    font-size: 16px;
    font-weight: lighter;
    cursor: text;
    display: flex;
    align-items: center;
    user-select: none;
    .input-inner__value {
        @include textOverflow;
        line-height: 1;
    }
    span {
        margin: 0 2px;
    }
}
.input-inner__close {
    position: absolute;
    top: 0;
    right: 16px;
    display: flex;
    align-items: center;
    height: 100%;
    .input-inner__close__button {
        height: 16px;
        width: 16px;
        button {
            background-color: $buttonBackground;
        }
    }
}
</style>
