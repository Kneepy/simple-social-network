module.exports = {
    env: {
        "vue/setup-compiler-macros": true,
    },
    extends: ["plugin:vue/base", "plugin:vue/vue3-essential"],
    rules: {
        "vue/script-setup-uses-vars": "error",
        "vue/no-unused-components": "error",
    },
}
