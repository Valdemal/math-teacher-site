import StudentsAchievementsView from "@/views/StudentsAchievementsView.vue";
import StudentsResultsView from "@/views/StudentsResultsView.vue";
import TeachingExperienceView from "@/views/TeachingExperienceView.vue";

export default {
    path: '/portfolio',
    name: 'portfolio',
    children: [
        {
            path: '/students-achievements',
            name: 'students-achievements',
            component: StudentsAchievementsView,
        },
        {
            path: '/students-results',
            name: 'students-results',
            component: StudentsResultsView
        },
        {
            path: '/teaching-experience',
            name: 'teaching-experience',
            component: TeachingExperienceView
        }
    ]
}