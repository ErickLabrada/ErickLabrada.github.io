<template>
  <div class="projects-view">
    <section class="page-intro">
      <div class="page-intro-copy">
        <p class="page-intro-label">
          TAPE_02
        </p>

        <h1>
          Project Archive
        </h1>

        <p>
          Professional work, experiments, automation tools, and side projects are
          collected here as separate archive entries.
        </p>
      </div>

      <figure class="section-accent">
        <img
          :src="fallingCube"
          alt=""
        >
      </figure>
    </section>

    <section class="mix-strip">
      <div>
        <p class="mix-label">
          CROSS_REFERENCE
        </p>

        <h2>
          Read This With The Other Pages
        </h2>
      </div>

      <div class="mix-list">
        <router-link
          to="/skills"
          class="mix-card"
        >
          <strong>Skills</strong>
          <p>See the backend, AI, framework, infrastructure, and language groups listed in the portfolio.</p>
        </router-link>

        <router-link
          to="/contact"
          class="mix-card"
        >
          <strong>Contact</strong>
          <p>Use email, GitHub, or LinkedIn after checking the work.</p>
        </router-link>
      </div>

      <figure class="section-accent">
        <img
          :src="supermanLogo"
          alt=""
        >
      </figure>
    </section>

    <ProjectsSection />
    <RouteCue />
  </div>
</template>

<script setup lang="ts">
import ProjectsSection from '@/components/ProjectsSection.vue'
import RouteCue from '@/components/RouteCue.vue'
import supermanLogo from '@/assets/comics/superman_logo.png'
import fallingCube from '@/assets/portal/falling_cube.png'
</script>
