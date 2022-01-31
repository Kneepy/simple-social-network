<template>
    <router-view />
</template>

<script lang="ts" setup>
    import { useStore } from "vuex"

    const store = useStore()
    store.dispatch("getUser")
</script>

<style lang="scss">
* {
    transition-duration: 100ms;
}
body {
    font-family: $font;
    background-color: $dark;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}
a {
    text-decoration: none;
}
::-webkit-scrollbar {
    width: 8px;
}
::-webkit-scrollbar-track {
    background: transparent;
}
::-webkit-scrollbar-thumb {
    background: #777;
    border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
    background: #666;
}
</style>
