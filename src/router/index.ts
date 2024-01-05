import { createRouter, createWebHistory } from "vue-router";
import HomePageVue from "../views/HomePage.vue";
import QuestionsPageVue from "../views/QuestionsPage.vue";
import ResultsPageVue from "../views/ResultsPage.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePageVue,
        },
        {
            path: '/question',
            component: QuestionsPageVue,
        },
        {
            path: '/results',
            component: ResultsPageVue,
        },
    ]
})


export default router