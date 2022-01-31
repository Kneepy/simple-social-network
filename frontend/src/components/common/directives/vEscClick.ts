import { Directive } from "vue"

export const vEscClick: Directive = {
    beforeMount(el, bind) {
        document.addEventListener("keydown", (el) => {
            if (el.key === "Escape") {
                bind.value()
            }
        })
    },
    beforeUnmount(el, bind) {
        document.removeEventListener("keydown", () => {})
    },
}
