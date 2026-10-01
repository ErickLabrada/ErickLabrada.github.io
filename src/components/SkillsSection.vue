<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <section class="skills-section">
    <div class="section-header">
      <p class="section-label">
        {{ t("skills.header.label") }}
      </p>

      <h2>
        {{ t("skills.header.title") }}
      </h2>
    </div>

    <div class="skills-grid">
      <sl-card class="skill-card">
        <h3>
          {{ t("skills.items.backend.title") }}
        </h3>

        <span>
          Python • TypeScript • Java • Go
        </span>
      </sl-card>

      <sl-card class="skill-card">
        <h3>
          {{ t("skills.items.frameworks.title") }}
        </h3>

        <span>
          NestJS • Flask • Express • Chi
        </span>
      </sl-card>

      <sl-card class="skill-card">
        <h3>
          {{ t("skills.items.ai.title") }}
        </h3>

        <span>
          LangChain • LangGraph • Hugging Face • Transformers • RAG
        </span>
      </sl-card>

      <sl-card class="skill-card">
        <h3>
          {{ t("skills.items.infrastructure.title") }}
        </h3>

        <span>
          PostgreSQL • MySQL • MongoDB • Redis • RabbitMQ • Docker • Git
        </span>
      </sl-card>

      <sl-card class="skill-card">
        <h3>
          {{ t("skills.items.languages.title") }}
        </h3>

        <span>
          {{ t("skills.items.languages.technologies") }}
        </span>
      </sl-card>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  margin-top: 80px;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #8b93a7;
  font-size: 0.8rem;
  margin-bottom: 12px;
}

.section-header {
  margin-bottom: 32px;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.skills-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
}

.skill-card::part(base) {
  height: 100%;
  min-height: 150px;
  background: rgba(18, 21, 30, 0.72);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
}

.skill-card h3 {
  margin: 0 0 18px;
  min-height: 2.4em;
  color: #f3f4f6;
  font-size: 1.05rem;
  line-height: 1.2;
}

.skill-card span {
  display: block;
  color: #aeb7ca;
  font-size: 0.92rem;
  line-height: 1.7;
}
</style>
