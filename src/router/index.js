import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import WorksPage from '../views/WorksPage.vue'
import MediaPage from '../views/MediaPage.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/works',
    name: 'WorksPage',
    component: WorksPage
  },
  {
    path: '/media',
    name: 'MediaPage',
    component: MediaPage
  },
  {
    path: '/contact',
    name: 'ContactPage',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router