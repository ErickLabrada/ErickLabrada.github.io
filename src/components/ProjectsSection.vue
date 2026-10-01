<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Polaroid from "@/components/Polaroid.vue";
import { personalProjects, professionalProjects } from "@/data/projects";

const { t } = useI18n();
</script>

<template>
  <section class="projects-section">
    <!-- PROFESSIONAL -->
    <div class="projects-group">
      <p class="section-label">
        {{ t("projects.header.label") }}
      </p>

      <div class="group-header">
        <h3>
          {{ t("projects.professional.title") }}
        </h3>

        <p>
          {{ t("projects.professional.description") }}
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
          :rotation="project.rotation"
          :technologies="project.technologies"
        />
      </div>
    </div>

    <!-- PERSONAL -->
    <div class="projects-group">
      <div class="group-header">
        <h3>
          {{ t("projects.personal.title") }}
        </h3>

        <p>
          {{ t("projects.personal.description") }}
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
          :rotation="project.rotation"
          :technologies="project.technologies"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* HEADER */
.section-header {
  margin-bottom: -32px;
}

.section-header h2 {
  font-size: 2rem;
  margin: 0;
}

.section-header p {
  margin-top: 10px;
  color: #b5bfd1;
  line-height: 1.6;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #7f8aa3;
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.section-description {
  max-width: 650px;
}

/* GROUPS */
.group-header {
  margin-bottom: 24px;
}

.group-header h3 {
  margin-bottom: 8px;
  font-size: 1.3rem;
  color: #d7dbe6;
}

.group-header p {
  color: #a8b0c2;
  line-height: 1.6;
}

/* PROJECT GRIDS */
.featured-grid,
.stagger-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 260px));
  justify-content: center;
  gap: 28px 22px;
  align-items: start;
  justify-items: center;
}

/* SUBTLE STAGGER POSITIONING */
.p2 {
  margin-top: 24px;
}

.p3 {
  margin-top: 8px;
}

.p4 {
  margin-top: 20px;
}

.p5 {
  margin-top: 4px;
}

@media (max-width: 768px) {
  .featured-grid,
  .stagger-grid {
    grid-template-columns: 1fr;
  }

  .p2,
  .p3,
  .p4,
  .p5 {
    margin-top: 0;
  }
}
</style>
