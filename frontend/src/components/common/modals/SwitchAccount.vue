<template>
    <Modal :handler="props.handler">
        <div class="card">
            <div class="card-title">Переключение между аккаунтами</div>
            <hr />
            <div class="card-content">
                <Button
                    v-for="account in user.accounts"
                    :key="account.id"
                    transparent
                    class="account"
                    @click="switchToAccount(account.id)"
                >
                    <div class="account-data">
                        <Avatar :link="account.avatar" :size="40" />
                        <div class="account-data__info">
                            <span class="lastName">{{ account.lastName }}</span>
                            <span class="email">{{ account.email }}</span>
                        </div>
                    </div>
                    <Icon.Done :size="12" v-if="account.id === user.id" />
                </Button>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import Button from "@/components/common/buttons/Button.vue"
import Avatar from "@/components/common/images/Avatar.vue"
import * as Icon from "@/components/common/icons"
import { colors } from "@/components/common/icons/assets/colors"
import Modal from "@/components/common/modals/Modal.vue"
import { useStore } from "vuex"

const props = defineProps<{ handler: Function }>()
const user = useStore().getters.getUser

function switchToAccount(id: string) {}
</script>

<style scoped lang="scss">
.card {
    @include modalBox;
    width: 400px;
    .card-title {
        @include flexJustifyAlign(center, center);
        font-size: 20px;
        font-weight: bold;
        padding: 16px;
        color: $whiteText;
    }
    .card-content {
        padding: 8px 12px;
        max-height: 400px;
        overflow: auto;
        .account {
            @include flexJustifyAlign(space-between, center);
            .account-data {
                @include flexJustifyAlign(flex-start, center);
                .account-data__info {
                    @include flexJustifyAlign(unset, flex-start);
                    flex-direction: column;
                    margin-left: 12px;
                    .email {
                        color: $primaryText;
                    }
                    .lastName {
                        color: $whiteText;
                        font-size: 16px;
                    }
                }
            }
        }
    }
}
</style>
