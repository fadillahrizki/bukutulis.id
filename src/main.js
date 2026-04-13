import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import api from '@/services/api'
// main.js / main.ts
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

/********* Layout component**********/
import Header from '@/views/layouts/pos-header.vue'
import Sidebar from '@/views/layouts/pos-sidebar.vue'
import { useAuthStore } from './stores/auth'

const app = createApp(App)

/********* Layout component**********/
app.component('layout-header', Header)
app.component('layout-sidebar', Sidebar)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

const auth = useAuthStore()

await auth.initAuth()

router.beforeEach(async (to, from) => {
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return '/sign-in'
    // next('/sign-in')
  } else if (to.path == '/'){
    return '/page/dashboard'
    // next('/page/dashboard')
  } else {
    // next()
  }
})

app.use(router).mount('#app')
