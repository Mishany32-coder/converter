import {createRouter, createWebHistory} from "vue-router";
import Main                             from "@/views/Main";

const routes=[
    {
        path:'/',
        component:Main,
    }, {
        path:'/second',
        component: Main,
    }, {
        path:'/third',
        component: Main,
    }, {
        path:'/fourth',
        component: Main,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;