import { createRouter, createWebHistory } from "vue-router";
import MainView from "@/features/mainView/MainView.vue";
const routes = [
    {
        path: "/",
        name: "MainView",
        component: MainView
    },
    {
        path:"/stopwatch",
        name: "stopwatch",
        component: () => import('@/features/stopwatch/Stopwatch.vue')
    },
    {
        path:"/timer",
        name:"timer",
        component: () => import('@/features/timer/Timer.vue')
    },
    {
        path:"/calendar",
        name:"calendar",
        component: () => import('@/features/someNewFeature/NewFeature.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;