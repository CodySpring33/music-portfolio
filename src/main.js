import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create the app instance
const app = createApp(App)

// Use router
app.use(router)

// Wait for the router to be ready before mounting
router.isReady().then(() => {
  app.mount('#app')
})