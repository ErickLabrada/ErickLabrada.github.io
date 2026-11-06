<template>
  <div class="home-page">
    <NoiseOverlay />
    <Header />

    <main class="home-container">
      <HomeHero />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <AppraisalSection />
      <ContactSection />
      <HomeFooterQuote />
    </main>
  </div>
</template>

<script setup lang="ts">
import NoiseOverlay from '@/components/NoiseOverlay.vue'
import Header from '@/components/Header.vue'
import HomeHero from '@/components/HomeHero.vue'
import AppraisalSection from '@/components/AppraisalSection.vue'
import HomeFooterQuote from '@/components/HomeFooterQuote.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
import ExperienceSection from '@/components/ExperienceSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  position: relative;
  overflow: clip;
}
.home-container {
  position: relative;
  z-index: 1;
  width: var(--page-width);
  margin: 0 auto;
  padding-bottom: 48px;
}
</style>
