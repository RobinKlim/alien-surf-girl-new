import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ShowsView from '../views/ShowsView.vue'
import HitsView from '../views/HitsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ueber',
    name: 'ueber',
    component: AboutView
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: ContactView
  },
  {
    path: '/shows',
    name: 'shows',
    component: ShowsView
  },
  {
    path: '/hits',
    name: 'hits',
    component: HitsView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
