import { createApp } from 'vue'
import App from './App.vue'
import router from './router' //index.js imported
import mixins from './mixins'

createApp(App).use(router).mixin(mixins).mount('#app')
