import {createApp} from "vue"
import App from './components/App.vue'
import route from "./route";

createApp(App)
    .use(route)
    .mount("#app")

require('./bootstrap')


