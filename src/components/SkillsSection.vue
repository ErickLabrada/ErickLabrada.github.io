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

        <p>
          {{ t("skills.items.backend.description") }}
        </p>

        <span>
          Python • TypeScript • Java • Go
        </span>
      </sl-card>

      <sl-card class="skill-card">
        <h3>
          {{ t("skills.items.frameworks.title") }}
        </h3>

        <p>
          {{ t("skills.items.frameworks.description") }}
        </p>

        <span>
          NestJS • Flask • Express • Chi
        </span>
      </sl-card>

      <sl-card class="skill-card">
        <h3>
          {{ t("skills.items.ai.title") }}
        </h3>

        <p>
          {{ t("skills.items.ai.description") }}
        </p>

        <span>
          LangChain • LangGraph • Hugging Face • Transformers • RAG
        </span>
      </sl-card>

      <sl-card class="skill-card">
        <h3>
          {{ t("skills.items.infrastructure.title") }}
        </h3>

        <p>
          {{ t("skills.items.infrastructure.description") }}
        </p>

        <span>
          PostgreSQL • MySQL • MongoDB • Redis • RabbitMQ • Docker • Git
        </span>
      </sl-card>

      <sl-card class="skill-card">
        <h3>
          {{ t("skills.items.languages.title") }}
        </h3>

        <p>
          {{ t("skills.items.languages.description") }}
        </p>

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
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.skill-card::part(base) {
  background: rgba(18, 21, 30, 0.72);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 24px;
}

.skill-card h3 {
  margin-bottom: 12px;
}

.skill-card p {
  color: #c7cedb;
  line-height: 1.7;
  margin-bottom: 16px;
}

.skill-card span {
  color: #8b93a7;
  font-size: 0.9rem;
}
</style>
