import { createApp,Vue } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueLazyLoad from 'vue-lazyload'

import fastclick from 'fastclick'



createApp(App).use(store).use(router).mount('#app')


fastclick.attach(document.body)

