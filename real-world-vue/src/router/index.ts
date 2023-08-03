import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventListView2 from '../views/EventListView2.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView
    },
    {
      path: '/event2',
      name: 'event-list2',
      component: EventListView2
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
