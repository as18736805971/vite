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
    },
    {
        path: '/:catchAll(.*)', // vue3使用
        name: 'not-found',
        component:  () => import('../views/404/index.vue')
    }
    // {
    //     path: '*', // vue2使用
    //     redirect: '/404',
    //     name: 'not-found'
    // }，
    // {
    //     path: '/404',
    //     name: '404',
    //     component:  () => import('../views/404/index.vue')
    // },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
