<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="loading-spinner"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  width: 100%;
  height: calc(100vh - var(--nav-height));
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 