<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Polaroid from '@/components/Polaroid.vue'
import { personalProjects, professionalProjects } from '@/data/projects'

const { t } = useI18n()
</script>

<template>
  <section id="projects" class="projects-section">
    <!-- PROFESSIONAL -->
    <div class="projects-group">
      <div class="group-header">
        <h2>
          {{ t('projects.professional.title') }}
        </h2>

        <p>
          {{ t('projects.professional.description') }}
        </p>
      </div>

      <div class="featured-grid">
        <Polaroid
          v-for="project in professionalProjects"
          :key="project.slug"
          :title="project.title"
          :project-url="`/projects/${project.slug}`"
          :description="t(`projects.items.${project.translationKey}.description`)"
          :full-description="t(`projects.items.${project.translationKey}.fullDescription`)"
          :image-src="project.image"
          :portrait="project.imageOrientation === 'portrait'"
          :rotation="project.rotation"
          :technologies="project.technologies"
        />
      </div>
    </div>

    <!-- PERSONAL -->
    <div class="projects-group">
      <div class="group-header">
        <h2>
          {{ t('projects.personal.title') }}
        </h2>

        <p>
          {{ t('projects.personal.description') }}
        </p>
      </div>

      <div class="stagger-grid">
        <Polaroid
          v-for="project in personalProjects"
          :key="project.slug"
          :title="project.title"
          :project-url="`/projects/${project.slug}`"
          :description="t(`projects.items.${project.translationKey}.description`)"
          :full-description="t(`projects.items.${project.translationKey}.fullDescription`)"
          :image-src="project.image"
          :portrait="project.imageOrientation === 'portrait'"
          :rotation="project.rotation"
          :technologies="project.technologies"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  display: flex;
  flex-direction: column;
  gap: 100px;
  scroll-margin-top: 32px;
}
.group-header {
  border-top: 1px solid var(--line);
  padding-top: 30px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
.group-header h2 {
  font-size: clamp(2.2rem, 4vw, 3.25rem);
  margin: 0;
}
.group-header p {
  margin: 0;
  max-width: 56ch;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.75;
}
.featured-grid,
.stagger-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 48px 34px;
  align-items: start;
  padding: 10px 8px;
}
.featured-grid > :nth-child(3n + 2),
.stagger-grid > :nth-child(3n + 2) {
  margin-top: 32px;
}
@media (max-width: 950px) {
  .featured-grid,
  .stagger-grid {
    gap: 32px 22px;
  }
}
@media (max-width: 760px) {
  .group-header {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 28px;
  }
  .featured-grid,
  .stagger-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px 20px;
  }
  .featured-grid > :nth-child(3n + 2),
  .stagger-grid > :nth-child(3n + 2) {
    margin-top: 0;
  }
  .projects-section {
    gap: 64px;
  }
}
@media (max-width: 480px) {
  .featured-grid,
  .stagger-grid {
    grid-template-columns: minmax(0, 1fr);
    justify-items: center;
    gap: 34px;
    padding-inline: 15px;
  }
}
</style>
