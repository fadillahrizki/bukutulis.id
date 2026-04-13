import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '@/views/pages/auth/sign-in.vue'
import Admin from '@/components/Admin.vue'
import Page from '@/views/pages/Page.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: "/page",
      component: Admin,
      meta: { requiresAuth: true }, // Proteksi
      children: [
        { path: ":pathMatch(.*)*", name: 'page', component: Page, meta: {title: 'Page'}},
      ]
    },
  ],
})

export default router
