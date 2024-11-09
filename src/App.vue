<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">Jack Conklin</div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/works" class="nav-link">Works</router-link>
        <router-link to="/media" class="nav-link">Media</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
    </div>
  </nav>

  <loading-screen :isLoading="isLoading" />
  
  <main class="content" v-show="!isLoading">
    <keep-alive>
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
  </main>
</template>

<script>
import LoadingScreen from './components/LoadingScreen.vue'

export default {
  name: 'App',
  components: {
    LoadingScreen
  },
  data() {
    return {
      isLoading: true
    }
  },
  watch: {
    '$route'() {
      this.handleRouteChange()
    }
  },
  mounted() {
    this.preloadImages()
  },
  methods: {
    async handleRouteChange() {
      this.isLoading = true
      await this.preloadImages()
      this.isLoading = false
    },
    preloadImages() {
      return new Promise((resolve) => {
        this.$nextTick(() => {
          const images = document.querySelectorAll('img')
          let loadedImages = 0
          
          if (images.length === 0) {
            this.isLoading = false
            resolve()
            return
          }

          const checkIfComplete = () => {
            loadedImages++
            if (loadedImages === images.length) {
              resolve()
            }
          }

          images.forEach(img => {
            if (img.complete) {
              checkIfComplete()
            } else {
              img.addEventListener('load', checkIfComplete)
              img.addEventListener('error', checkIfComplete)
            }
          })
        })
      })
    }
  }
}
</script>

<style>
:root {
  --primary-color: #3498db;
  --background-color: #ffffff;
  --text-color: #2c3e50;
  --nav-height: 80px;
  --transition-speed: 0.3s;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
  line-height: 1.6;
}

.app {
  min-height: 100vh;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.navbar-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  letter-spacing: 0.5px;
  flex-shrink: 0;
}

.nav-links {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2.5rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  transition: color var(--transition-speed) ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
  transform: scaleX(0);
  transition: transform var(--transition-speed) ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.router-link-active {
  color: var(--primary-color);
}

.router-link-active::after {
  transform: scaleX(1);
}

.content {
  padding-top: calc(var(--nav-height) + 2rem);
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-speed) ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .navbar-container {
    flex-direction: column;
    padding: 1rem;
  }

  .nav-links {
    position: static;
    transform: none;
    margin-top: 1rem;
    gap: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .content {
    padding-top: calc(var(--nav-height) + 4rem);
  }
}
</style> 