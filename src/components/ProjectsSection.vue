<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Polaroid from "@/components/Polaroid.vue";

/* Images */
import itzai from "@/assets/projects/itzai.png";
import sully from "@/assets/projects/sully.png";
import anam from "@/assets/projects/ANAM.png";
import peerReview from "@/assets/projects/peer-review.png";
import prompt from "@/assets/projects/prompt.png";
import sartre from "@/assets/projects/sartrecat.png";
import omniAereaImage from "@/assets/projects/omniaerea.png";
import opengo from "@/assets/projects/open-go-readme.png";
import greenHouse from "@/assets/projects/GreenHouse.png";
import cia from "@/assets/projects/CIA.png";
import engine3d from "@/assets/projects/3D_Engine.gif";
import facecat from "@/assets/projects/facecat.png";
import ecommerceAdmin from "@/assets/projects/ecommerceAdmin.png";
import ecommerceStorefront from "@/assets/projects/ecommerceStorefront.png";

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
          project-url="/projects/ai-assistant"
          :description="t('projects.items.itzai.description')"
          :full-description="t('projects.items.itzai.fullDescription')"
          :image-src="itzai"
          :rotation="-2"
          :technologies="['Python', 'MongoDB', 'Hugging Face']"
        />

        <Polaroid
          title="Distributed Ticket Receiver"
          project-url="/projects/ticket-receiver"
          :description="t('projects.items.ticketReceiver.description')"
          :full-description="t('projects.items.ticketReceiver.fullDescription')"
          :image-src="sully"
          :rotation="2"
          :technologies="['Django', 'JavaScript', 'PostgreSQL', 'Redis']"
        />

        <Polaroid
          title="Ticket Source Service Migration"
          project-url="/projects/ticket-migration"
          :description="t('projects.items.ticketMigration.description')"
          :full-description="t('projects.items.ticketMigration.fullDescription')"
          :image-src="anam"
          :rotation="-1"
          :technologies="['NestJS', 'PostgreSQL']"
        />

        <Polaroid
          title="Ecommerce Admin Site"
          project-url="/projects/ecommerce-admin"
          :description="t('projects.items.ecommerce-admin.description')"
          :full-description="t('projects.items.ecommerce-admin.fullDescription')"
          :image-src="ecommerceAdmin"
          :rotation="1"
          :technologies="['NestJS', 'Angular', 'PostgreSQL', 'Redis', 'WebSockets', 'Server-Sent Events']"
        />

        <Polaroid
          title="Ecommerce storefront"
          project-url="/projects/ecommerce-storefront"
          :description="t('projects.items.ecommerce-storefront.description')"
          :full-description="t('projects.items.ecommerce-storefront.fullDescription')"
          :image-src="ecommerceStorefront"
          :rotation="1"
          :technologies="['NestJS', 'Svelte', 'PostgreSQL', 'Redis', 'WebSockets', 'Server-Sent Events']"
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
          title="OmniAerea"
          project-url="/projects/OmniAerea"
          :description="t('projects.items.omniAerea.description')"
          :full-description="t('projects.items.OmniAerea.fullDescription')"
          :image-src="omniAereaImage"
          :rotation="-3"
          :technologies="['Python', 'Playwright', 'OpenAI API']"
        />

        <!-- <Polaroid
          class="p4"
          title="3D Engine"
          project-url="/projects/3d-engine"
          :description="t('projects.items.engine3d.description')"
          :full-description="t('projects.items.engine3d.fullDescription')"
          :image-src="engine3d"
          :rotation="3"
          :technologies="['Java', 'Linear Algebra']"
        />
      -->


        <Polaroid
          title="Sartre's Cat"
          project-url="/projects/sartres-cat"
          :description="t('projects.items.sartreCat.description')"
          :full-description="t('projects.items.sartreCat.fullDescription')"
          :image-src="sartre"
          :rotation="-2"
          :technologies="['Vue', 'TypeScript', 'NLP', 'Data Analysis']"
        />

        <Polaroid
          title="Peer Review Automation"
          project-url="/projects/peer-review"
          :description="t('projects.items.peerReview.description')"
          :full-description="t('projects.items.peerReview.fullDescription')"
          :image-src="peerReview"
          :rotation="2"
          :technologies="['Python', 'GitLab API', 'NLP', 'Automation']"
        />

        <Polaroid
          title="FaceCat"
          project-url="/projects/facecat"
          :description="t('projects.items.facecat.description')"
          :full-description="t('projects.items.facecat.fullDescription')"
          :image-src="facecat"
          :rotation="-2"
          :technologies="['python', 'pytorch', 'CNN', 'RabbitMQ']"
        />

        <Polaroid
          title="Open Go Readme"
          project-url="/projects/open-go-readme"
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
  justify-items: center;
}

/* STAGGER GRID */
.stagger-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 280px));
  justify-content: center;
  gap: 32px 28px;
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

@media (max-width: 1100px) {
  .featured-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stagger-grid {
    grid-template-columns: repeat(auto-fit, minmax(260px, 280px));
  }
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
