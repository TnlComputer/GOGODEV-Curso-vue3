import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiFileCodeFill, BiArrowRightSquare } from "oh-vue-icons/icons";


addIcons(BiFileCodeFill, BiArrowRightSquare);

const  app = createApp(App)
app.component("v-icon", OhVueIcon);

app.use(router).mount('#app')
