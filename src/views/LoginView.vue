<template>
  <div class="login-page">
    <NoiseOverlay />

    <Header />

    <main class="login-container">
      <LoginGate />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import NoiseOverlay from '@/components/NoiseOverlay.vue'
import LoginGate from '@/components/LoginGate.vue'
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  background: #0c0e14;
  display: flex;
  flex-direction: column;
}

.login-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 16px;
}
</style>