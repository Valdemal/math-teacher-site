import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import portfolio from "@/router/portfolio.js";
import for_students from "@/router/for_students.js";

export default createRouter({
    routes: [
        {
            path: '/',
            component: BaseLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeView
                },
                portfolio,
                for_students,
            ]
        }
    ],
    history: createWebHistory()
})