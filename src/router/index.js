import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from '@/views/pages/dashboard/admin-dashboard.vue'
import SignIn from '@/views/pages/auth/sign-in.vue'
import ListCategory from '@/views/pages/category/list-category.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: AdminDashboard,
    },
    {
      path: '/category',
      name: 'category',
      component: ListCategory,
    },
  ],
})

export default router
