<template>
    <div class="content">
        <div class="posts">
            <Posts />
        </div>
    </div>
</template>

<script setup lang="ts">
import Posts from "@/components/content/Posts.vue"
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    .posts {
        width: 670px;
        margin: 0 auto;
    }
}
</style>
