<template>
  <div class="skills-view">
    <section class="page-intro">
      <div class="page-intro-copy">
        <p class="page-intro-label">
          TAPE_03
        </p>

        <h1>
          Skills And Tools
        </h1>

        <p>
          Backend development, frameworks, AI and machine learning,
          infrastructure, and languages are grouped here in one scan.
        </p>
      </div>

      <figure class="section-accent">
        <img
          :src="snoopyWriting"
          alt=""
        >
      </figure>
    </section>

    <SkillsSection />

    <section class="mix-strip">
      <div>
        <p class="mix-label">
          WHERE_TO_APPLY
        </p>

        <h2>
          Connect The Stack To The Work
        </h2>
      </div>

      <ul class="mix-list">
        <li>
          Professional project entries include Python, MongoDB, Hugging Face,
          Django, JavaScript, PostgreSQL, Redis, NestJS, and PostgreSQL.
        </li>

        <li>
          Experiment entries include Python, Playwright, OpenAI API, NestJS,
          RabbitMQ, MongoDB, MySQL, Java, TypeScript, Go, and automation.
        </li>

        <li>
          <router-link
            to="/projects"
            class="mix-link"
          >
            [ OPEN_PROJECT_ARCHIVE ]
          </router-link>
        </li>
      </ul>

      <figure class="section-accent">
        <img
          :src="snoopyReading"
          alt=""
        >
      </figure>
    </section>

    <RouteCue />
  </div>
</template>

<script setup lang="ts">
import RouteCue from '@/components/RouteCue.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import snoopyReading from '@/assets/snoopy/snoopy-reading.png'
import snoopyWriting from '@/assets/snoopy/snoopy_writting.png'
</script>
