import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import axios from "axios"
import cookie from "js-cookie"

axios.defaults.headers.common['Authorization'] = cookie.get("guid") as string
axios.defaults.baseURL = `http://localhost:5000`

createApp(App).use(store).use(router).mount("#app")
