<template>
    <article class="post">
        <header class="post-top">
            <div class="post-top__author">
                <Avatar
                    link="https://images.unsplash.com/photo-1642698793538-d4a99feec837?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                ></Avatar>
                <div class="post-author">javascript.js</div>
            </div>
            <div class="post-top__menu">
                <IconButton>
                    <Icon.Menu :size="20" />
                </IconButton>
            </div>
        </header>
        <div
            class="post-file"
            :style="{
                backgroundImage: `url(${'https://images.unsplash.com/photo-1637194385332-ceaf83a4f578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'})`,
            }"
        ></div>
        <div class="post-move-bar">
            <div class="post-move-bar__button like">
                <IconButton transparent>
                    <Icon.Like :size="24" />
                </IconButton>
            </div>
            <div class="post-move-bar__button comment">
                <IconButton transparent>
                    <Icon.Comment :size="24" />
                </IconButton>
            </div>
            <div class="post-move-bar__button share">
                <IconButton transparent>
                    <Icon.Send :size="24" />
                </IconButton>
            </div>
        </div>
        <div class="post-info">
            <div class="likes"></div>
            <div class="description"></div>
            <div class="tags"></div>
        </div>
        <div class="post-comment"></div>
    </article>
</template>

<script setup lang="ts">
import IconButton from "@/components/common/buttons/IconButton.vue"
import IconRound from "@/components/common/icons/assets/IconRound.vue"
import Avatar from "@/components/common/images/Avatar.vue"
import * as Icon from "@/components/common/icons"
</script>

<style scoped lang="scss">
.post {
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    background-color: $postBackground;
    width: inherit;
    .post-top {
        @include flexJustifyAlign(space-between, center);
        padding: 14px 16px;
        .post-top__author {
            @include flexJustifyAlign(space-between, center);
            color: $whiteText;
            .post-author {
                margin-left: 14px;
                font-size: 14px;
            }
        }
        .post-top__menu {
            width: 32px;
            button {
                padding: 6px;
            }
        }
    }
    .post-file {
        width: inherit;
        height: 448px;
        aspect-ratio: 4/5;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .post-move-bar {
        display: flex;
        align-items: center;
        padding: 6px 16px 8px;
        .post-move-bar__button {
            margin-right: 5px;
        }
    }
}
</style>
