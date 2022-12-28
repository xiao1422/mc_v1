import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login')
    },
    {
        path: '/',
        name: 'home',
        component: () => import('@/layout'),
        redirect: '/users',
        children: [
            {
                path: 'users',
                name: 'users',
                component: () => import('@/layout')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
