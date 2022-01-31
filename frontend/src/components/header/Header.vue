<template>
    <header>
        <div class="header-inner">
            <div class="header-inner__logotype">
                <Logotype :width="40" />
            </div>
            <div class="header-inner__search">
                <SearchInput v-model.trim="searchValue" />
            </div>
            <ButtonsMenu class="header-inner__buttons" />
        </div>
    </header>
</template>

<script lang="ts" setup>
import Logotype from "@/components/common/images/Logotype.vue"
import SearchInput from "@/components/common/inputs/SearchInput.vue"
import ButtonsMenu from "@/components/header/ButtonsMenu.vue"
import { ref } from "vue"

const searchValue = ref()
</script>

<style scoped lang="scss">
header {
    @include flexJustifyAlign(center, center);
    background-color: $dark-light;
    border-bottom: 1px solid $primaryBorder;
    .header-inner {
        @include flexJustifyAlign(space-between, center);
        display: flex;
        max-width: 979px;
        padding: 8px 20px;
        width: 100%;
        max-height: 60px;
        height: 60px;
        .header-inner__logotype {
            @include flexJustifyAlign(unset, center);
            width: 25%;
        }
        .header-inner__search {
            width: 268px;
            min-width: 125px;
            height: 36px;
            position: relative;
        }
        .header-inner__buttons {
            width: 25%;
        }
    }
}
</style>
