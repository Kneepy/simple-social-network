<template>
    <transition name="modal" mode="out-in" appear>
        <div class="background">
            <transition name="scale" mode="in-out" appear>
                <div class="box" v-esc-click="props.handler" v-click-outside="props.handler">
                    <slot />
                </div>
            </transition>
        </div>
    </transition>
</template>

<script setup lang="ts">
import { vClickOutside } from "@/components/common/directives/vClickOutside"
import { vEscClick } from "@/components/common/directives/vEscClick"

const props = defineProps<{ handler: Function }>()
</script>

<style scoped lang="scss">
.modal-enter-active,
.modal-leave-active {
    transition: all 50ms;
}
.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
    transition: all 70ms;
}
.scale-enter-from,
.scale-leave-to {
    transform: scale(0);
}

.background {
    @include flexJustifyAlign(center, center);
    background-color: rgba(11, 11, 11, 0.8);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10000;
    cursor: pointer;
}
</style>
