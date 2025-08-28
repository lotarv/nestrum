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
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;