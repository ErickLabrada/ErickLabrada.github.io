<template>
  <div class="contact-view">
    <section class="page-intro">
      <div class="page-intro-copy">
        <p class="page-intro-label">
          TAPE_04
        </p>

        <h1>
          Contact Channel
        </h1>

        <p>
          Email, GitHub, and LinkedIn are grouped here. The project and skills
          pages stay one click away if you want context first.
        </p>
      </div>

      <figure class="section-accent">
        <img
          :src="turret"
          alt=""
        >
      </figure>
    </section>

    <section class="mix-strip">
      <div>
        <p class="mix-label">
          BEFORE_SIGNAL
        </p>

        <h2>
          Browse Context First
        </h2>
      </div>

      <div class="mix-list">
        <router-link
          to="/projects"
          class="mix-card"
        >
          <strong>Projects</strong>
          <p>Open the software, experiments, and automation archive.</p>
        </router-link>

        <router-link
          to="/skills"
          class="mix-card"
        >
          <strong>Skills</strong>
          <p>Open the grouped backend, AI, infrastructure, and language list.</p>
        </router-link>
      </div>

      <figure class="section-accent">
        <img
          :src="cake"
          alt=""
        >
      </figure>
    </section>

    <ContactSection />
    <RouteCue />
  </div>
</template>

<script setup lang="ts">
import ContactSection from '@/components/ContactSection.vue'
import RouteCue from '@/components/RouteCue.vue'
import cake from '@/assets/portal/cake.png'
import turret from '@/assets/portal/turret.png'
</script>
