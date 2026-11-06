<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="skills-section">
    <div class="section-header">
      <h2>
        {{ t('skills.header.title') }}
      </h2>
    </div>

    <div class="skills-grid">
      <div class="skill-card">
        <h3>
          {{ t('skills.items.backend.title') }}
        </h3>

        <span> Python • TypeScript • Java • Go </span>
      </div>

      <div class="skill-card">
        <h3>
          {{ t('skills.items.frameworks.title') }}
        </h3>

        <span> NestJS • Flask • Express • Chi </span>
      </div>

      <div class="skill-card">
        <h3>
          {{ t('skills.items.ai.title') }}
        </h3>

        <span> LangChain • LangGraph • Hugging Face • Transformers • RAG </span>
      </div>

      <div class="skill-card">
        <h3>
          {{ t('skills.items.infrastructure.title') }}
        </h3>

        <span> PostgreSQL • MySQL • MongoDB • Redis • RabbitMQ • Docker • Git </span>
      </div>

      <div class="skill-card">
        <h3>
          {{ t('skills.items.languages.title') }}
        </h3>

        <span>
          {{ t('skills.items.languages.technologies') }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  margin-top: 112px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 64px;
  padding-top: 32px;
  border-top: 1px solid var(--line);
}
.section-header h2 {
  font-size: clamp(2.3rem, 4vw, 3.25rem);
  margin: 0;
  max-width: 10ch;
}
.skills-grid {
  display: grid;
}
.skill-card {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 24px;
  padding: 22px 0;
  border-bottom: 1px solid var(--line);
}
.skill-card:first-child {
  padding-top: 0;
}
.skill-card h3 {
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
}
.skill-card span {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.8;
}
@media (max-width: 760px) {
  .skills-section {
    margin-top: 72px;
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .section-header h2 {
    max-width: none;
  }
  .skill-card {
    gap: 20px;
  }
}
</style>
