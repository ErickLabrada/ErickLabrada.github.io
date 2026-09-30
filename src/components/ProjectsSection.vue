<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Polaroid from "@/components/Polaroid.vue";

/* Images */
import aiAssistant from "@/assets/projects/AI_Assistant.jpg";
import sully from "@/assets/projects/sully.png";
import anam from "@/assets/projects/ANAM.png";
import peerReview from "@/assets/projects/peer-review.png";
import prompt from "@/assets/projects/prompt.png";
import sartre from "@/assets/projects/sartrecat.png";
import dailyAI from "@/assets/projects/DailyAI.png";
import opengo from "@/assets/projects/open-go-readme.png";
import greenHouse from "@/assets/projects/GreenHouse.png";
import cia from "@/assets/projects/CIA.png";
import engine3d from "@/assets/projects/3D_Engine.gif";
import wbot from "@/assets/projects/wbot.png";

const { t } = useI18n();
</script>

<template>
  <section class="projects-section">
    <!-- HEADER -->
    <header class="section-header">
      <p class="section-label">
        {{ t("projects.header.label") }}
      </p>

      <h2>
        {{ t("projects.header.title") }}
      </h2>

      <p class="section-description">
        {{ t("projects.header.description") }}
      </p>
    </header>

    <!-- PROFESSIONAL -->
    <div class="projects-group">
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
          title="AI Communication Assistant"
          :description="t('projects.items.aiAssistant.description')"
          :full-description="t('projects.items.aiAssistant.fullDescription')"
          :image-src="aiAssistant"
          :rotation="-2"
          :technologies="['Python', 'MongoDB', 'Hugging Face']"
        />

        <Polaroid
          title="Distributed Ticket Receiver"
          :description="t('projects.items.ticketReceiver.description')"
          :full-description="t('projects.items.ticketReceiver.fullDescription')"
          :image-src="sully"
          :rotation="2"
          :technologies="['Django', 'JavaScript', 'PostgreSQL', 'Redis']"
        />

        <Polaroid
          title="Ticket Source Service Migration"
          :description="t('projects.items.ticketMigration.description')"
          :full-description="t('projects.items.ticketMigration.fullDescription')"
          :image-src="anam"
          :rotation="-1"
          :technologies="['NestJS', 'PostgreSQL']"
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
          class="p1"
          title="DailyAI"
          :description="t('projects.items.dailyAI.description')"
          :full-description="t('projects.items.dailyAI.fullDescription')"
          :image-src="dailyAI"
          :rotation="-3"
          :technologies="['Python', 'Playwright', 'OpenAI API']"
        />

        <Polaroid
          class="p2"
          title="Distributed Greenhouse System"
          :description="t('projects.items.greenhouse.description')"
          :full-description="t('projects.items.greenhouse.fullDescription')"
          :image-src="greenHouse"
          :rotation="2"
          :technologies="['NestJS', 'RabbitMQ', 'MongoDB', 'MySQL', 'ESP32']"
        />

        <Polaroid
          class="p3"
          title="Academic Information System (CIA)"
          :description="t('projects.items.cia.description')"
          :full-description="t('projects.items.cia.fullDescription')"
          :image-src="cia"
          :rotation="-1"
          :technologies="['JavaScript', 'JWT', 'Microfrontends']"
        />

        <Polaroid
          class="p4"
          title="3D Engine"
          :description="t('projects.items.engine3d.description')"
          :full-description="t('projects.items.engine3d.fullDescription')"
          :image-src="engine3d"
          :rotation="3"
          :technologies="['Java', 'Linear Algebra']"
        />

        <Polaroid
          class="p5"
          title="Photography Studio System"
          :description="t('projects.items.photography.description')"
          :full-description="t('projects.items.photography.fullDescription')"
          :image-src="wbot"
          :rotation="-2"
          :technologies="['NestJS', 'TypeScript', 'MySQL', 'BuilderBot']"
        />

        <Polaroid
          title="Sartre's Cat"
          :description="t('projects.items.sartreCat.description')"
          :full-description="t('projects.items.sartreCat.fullDescription')"
          :image-src="sartre"
          :rotation="-2"
          :technologies="['Vue', 'TypeScript', 'NLP', 'Data Analysis']"
        />

        <Polaroid
          title="Peer Review Automation"
          :description="t('projects.items.peerReview.description')"
          :full-description="t('projects.items.peerReview.fullDescription')"
          :image-src="peerReview"
          :rotation="2"
          :technologies="['Python', 'GitLab API', 'NLP', 'Automation']"
        />

        <Polaroid
          title="Prompt Generator"
          :description="t('projects.items.promptGenerator.description')"
          :full-description="t('projects.items.promptGenerator.fullDescription')"
          :image-src="prompt"
          :rotation="-1"
          :technologies="['Python', 'Playwright', 'LLMs', 'Automation']"
        />

        <Polaroid
          title="Open Go Readme"
          :description="t('projects.items.openGoReadme.description')"
          :full-description="t('projects.items.openGoReadme.fullDescription')"
          :image-src="opengo"
          :rotation="-1"
          :technologies="['Go', 'OpenAI API', 'AST parsing', 'CLI']"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* HEADER */
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

/* FEATURED GRID */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

/* STAGGER GRID */
.stagger-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-items: start;
}

/* STAGGER POSITIONING */
.p1 {
  grid-column: 1 / 2;
}

.p2 {
  grid-column: 3 / 4;
  transform: translateY(30px);
}

.p3 {
  grid-column: 2 / 3;
  transform: translateY(-10px);
}

.p4 {
  grid-column: 4 / 5;
  transform: translateY(20px);
}

.p5 {
  grid-column: 1 / 3;
  transform: translateY(10px);
}

@media (max-width: 1100px) {
  .featured-grid,
  .stagger-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .p1,
  .p2,
  .p3,
  .p4,
  .p5 {
    grid-column: auto;
    transform: none;
  }
}

@media (max-width: 768px) {
  .featured-grid,
  .stagger-grid {
    grid-template-columns: 1fr;
  }
}
</style>
