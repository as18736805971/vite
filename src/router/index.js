import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/index.vue'),
    },
    {
        path: '/aaa',
        name: 'aaa',
        component: () => import('../views/aaa.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
