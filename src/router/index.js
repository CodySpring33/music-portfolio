import { createRouter, createWebHistory } from 'vue-router'

// Import components directly instead of using lazy loading
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Add navigation guards to handle loading state
router.beforeResolve((to, from, next) => {
  // You could add a loading state here if needed
  next()
})

export default router