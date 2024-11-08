<template>
  <div class="app">
    <nav class="navbar">
      <div class="logo">Your Name</div>
      <div class="nav-links">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/works" class="nav-link">Works</router-link>
        <router-link to="/media" class="nav-link">Media</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </div>
    </nav>

    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
:root {
  --primary-color: #3498db;
  --background-color: #ffffff;
  --text-color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
  color: var(--text-color);
  background-color: var(--background-color);
}

.app {
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--background-color);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-color);
}

.content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style> 