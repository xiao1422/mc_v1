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
                component: () => import('@/views/users')
            },
            {
                path: 'categories',
                name: 'categories',
                component: () => import('@/views/categories')
            },
            {
                path: 'goods',
                name: 'goods',
                component: () => import('@/views/goods')
            },
            {
                path: 'orders',
                name: 'orders',
                component: () => import('@/views/orders')
            },
            {
                path: 'params',
                name: 'params',
                component: () => import('@/views/params')
            },
            {
                path: 'reports',
                name: 'reports',
                component: () => import('@/views/reports')
            },
            {
                path: 'rights',
                name: 'rights',
                component: () => import('@/views/rights')
            },
            {
                path: 'roles',
                name: 'roles',
                component: () => import('@/views/roles')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
