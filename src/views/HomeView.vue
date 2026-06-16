<template>
  <div class="home-page">
    <NoiseOverlay />
    <Header />

    <main class="home-container">
      <HomeHero />
      <HomeInfoGrid />
      <ProjectsSection />
      <HomeFooterQuote />
    </main>
  </div>
</template>


<script setup lang="ts">
import NoiseOverlay from '@/components/NoiseOverlay.vue'
import Header from '@/components/Header.vue'
import HomeHero from '@/components/HomeHero.vue'
import HomeInfoGrid from '@/components/HomeInfoGrid.vue'
import HomeFooterQuote from '@/components/HomeFooterQuote.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;

  position: relative;

  background: #0c0e14;


  color: #f3f4f6;
}

.home-container {
  position: relative;

  z-index: 1;

  width: min(1100px, 92%);

  margin: 0 auto;

  padding-bottom: 80px;
}
</style>
