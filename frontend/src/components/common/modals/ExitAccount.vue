<template>
    <Modal :handler="props.handler">
        <div class="card">
            <div class="card-title">
                <div class="card-title__bold">Выход</div>
                <span>Вам необходимо авторизоваться заново</span>
            </div>
            <hr />
            <router-link :to="{ name: `Authorization` }">
                <Button transparent class="card-bth">Войти</Button>
            </router-link>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import Button from "@/components/common/buttons/Button.vue"
import Avatar from "@/components/common/images/Avatar.vue"
import * as Icon from "@/components/common/icons"
import { colors } from "@/components/common/icons/assets/colors"
import Modal from "@/components/common/modals/Modal.vue"

const props = defineProps<{ handler: Function }>()
</script>

<style scoped lang="scss">
.card {
    @include modalBox;
    width: 400px;
    .card-title {
        @include flexJustifyAlign(center, center);
        font-weight: bold;
        padding: 16px;
        color: $whiteText;
        flex-direction: column;
        .card-title__bold {
            font-size: 20px;
        }
        span {
            font-size: 14px;
            font-weight: normal;
            color: $primaryText;
        }
    }
    .card-bth {
        padding: 20px;
        border-radius: 0 0 8px 8px;
        color: $whiteText;
    }
}
</style>
