import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login_v1/login_v1')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
