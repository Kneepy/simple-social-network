import { Directive } from "vue"

export const vClickOutside: Directive = {
    beforeMount(el: HTMLElement, { value }) {
        document.addEventListener(
            "click",
            (e) => {
                const path = e.composedPath()
                if (path ? path.indexOf(el) < 0 : !el.contains(e.target as Node)) value()
            },
            true,
        )
    },
    beforeUnmount() {
        document.removeEventListener("click", () => {}, true)
    },
}
