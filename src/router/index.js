import {createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
import portfolio from "@/router/portfolio.js";

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
            ]
        }
    ],
    history: createWebHistory()
})