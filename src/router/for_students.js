import EgePreparationView from "@/views/EgePreparationView.vue";
import OgePreparationView from "@/views/OgePreparationView.vue";
import CompetitionsPreparationView from "@/views/CompetitionsPreparationView.vue";

export default {
    path: '/for-students',
    name: 'for-students',
    children: [
        {
            path: '/ege-preparation',
            name: 'ege-preparation',
            component: EgePreparationView,
        },
        {
            path: '/oge-preparation',
            name: 'oge-preparation',
            component: OgePreparationView,
        },
        {
            path: '/competitions-preparation',
            name: 'competitions-preparation',
            component: CompetitionsPreparationView
        }
    ]
}