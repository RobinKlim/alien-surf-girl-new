import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ShowsView from '../views/ShowsView.vue'
import HitsView from '../views/HitsView.vue'
import PressKitView from '../views/PressKitView.vue'
import ShopView from '../views/ShopView.vue'
import ImpressumView from '../views/ImpressumView.vue'

const routes = [
  {
    path: '/ueber',
    name: 'ueber',
    component: AboutView
  },
  {
    path: '/',
    name: 'home',
    component: AboutView,
    alias: '/ueber'
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
  {
    path: '/shop',
    name: 'shop',
    component: ShopView
  },
  {
    path: '/pressKit',
    name: 'pressKit',
    component: PressKitView
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
