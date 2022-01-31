<template>
    <div class="profile" v-if="isOpenProfile">
        <router-link :to="{ name: `User`, params: { lastName: user.lastName } }">
            <Button class="profile-account profile-accounts__current" transparent>
                <div class="profile-data">
                    <Avatar :size="40" />
                    <div class="info">
                        <span class="fullName">{{ user.fullName }}</span>
                        <span class="email">{{ user.email }}</span>
                    </div>
                </div>
            </Button>
        </router-link>
        <hr />
        <div class="profile-actions">
            <router-link :to="{ name: `UserSaved`, params: { lastName: user.lastName } }">
                <Button class="profile-actions__button" transparent>
                    <div class="icon"><Icon.Bookmark :size="18" /></div>
                    <span>Сохраненное</span>
                </Button>
            </router-link>
            <router-link :to="{ name: `AccountSettings` }">
                <Button class="profile-actions__button" transparent>
                    <div class="icon"><Icon.Settings :size="22" /></div>
                    <span>Настройки</span>
                </Button>
            </router-link>
            <Button @click="openAccountModal" transparent class="profile-actions__button">
                <div class="icon"><Icon.Rotate :size="16" /></div>
                <span>Переключение между аккаунтами</span>
            </Button>
            <hr />
            <Button @click="openExitModal" transparent class="profile-actions__button exit">
                Выйти
            </Button>
        </div>
    </div>
    <Modal.SwitchAccount :handler="closeAccountModal" v-if="isOpenAccountModal" />
    <Modal.ExitAccount :handler="closeExitModal" v-if="isOpenExitModal" />
</template>

<script setup lang="ts">
import Button from "@/components/common/buttons/Button.vue"
import Avatar from "@/components/common/images/Avatar.vue"
import * as Icon from "@/components/common/icons"
import * as Modal from "@/components/common/modals"
import { useStore } from "vuex"
import { ref } from "vue"

const user = useStore().getters.getUser
const isOpenAccountModal = ref(false)
const isOpenExitModal = ref(false)
const isOpenProfile = ref(true)

function openAccountModal() {
    isOpenAccountModal.value = true
    isOpenProfile.value = false
}
function closeAccountModal() {
    isOpenAccountModal.value = false
}

function openExitModal() {
    isOpenExitModal.value = true
    isOpenProfile.value = false
}
function closeExitModal() {
    isOpenExitModal.value = false
}
</script>

<style scoped lang="scss">
.profile {
    @include flexJustifyAlign(unset, unset);
    box-shadow: $popUpShadow;
    background-color: $dark-light;
    min-height: 40px;
    min-width: 180px;
    max-width: 360px;
    position: absolute;
    right: 0;
    top: 50px;
    border-radius: 8px;
    padding: 8px;
    z-index: 10;
    flex-direction: column;
    hr {
        width: 100%;
        height: 1px;
        background-color: $primaryHr;
        border-width: 0;
    }
    .profile-account {
        width: 100%;
        .profile-data {
            @include flexJustifyAlign(unset, center);
            width: 100%;
            .info {
                @include flexJustifyAlign(unset, flex-start);
                color: $whiteText;
                font-size: 14px;
                margin-left: 8px;
                flex-direction: column;
                overflow: hidden;
                width: 100%;
                .fullName {
                    @include textOverflow;
                    font-weight: bold;
                }
                .email {
                    @include textOverflow;
                    color: $primaryText;
                    font-size: 12px;
                }
            }
        }
    }
    .profile-actions {
        @include flexJustifyAlign(flex-start, center);
        width: 100%;
        flex-direction: column;
        a {
            width: 100%;
        }
        .profile-actions__button {
            @include flexJustifyAlign(flex-start, center);
            color: $whiteText;
            .icon {
                width: 20px;
                height: 17px;
                margin-right: 6px;
            }
            span {
                @include textOverflow;
            }
            &.exit {
                font-weight: bold;
            }
        }
    }
}
</style>
