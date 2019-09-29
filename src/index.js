import VBox from "./v-box.vue"
import HBox from "./h-box.vue"

export default {
    install(Vue, options) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("v-box", VBox)
    },
}
