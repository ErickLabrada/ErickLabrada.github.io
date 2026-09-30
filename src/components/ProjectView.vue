<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

import NoiseOverlay from "@/components/NoiseOverlay.vue";
import Header from "@/components/Header.vue";
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

type Project = {
  title: string;
  translationKey: string;
  categoryKey: string;
  image: string;
  technologies: string[];
};

const route = useRoute();
const { t } = useI18n();

const projects: Record<string, Project> = {
  "ai-assistant": {
    title: "AI Communication Assistant",
    translationKey: "itzai",
    categoryKey: "professional.title",
    image: itzai,
    technologies: ["Python", "MongoDB", "Hugging Face"],
  },
  "ticket-receiver": {
    title: "Distributed Ticket Receiver",
    translationKey: "ticketReceiver",
    categoryKey: "professional.title",
    image: sully,
    technologies: ["Django", "JavaScript", "PostgreSQL", "Redis"],
  },
  "ticket-migration": {
    title: "Ticket Source Service Migration",
    translationKey: "ticketMigration",
    categoryKey: "professional.title",
    image: anam,
    technologies: ["NestJS", "PostgreSQL"],
  },
  "ecommerce-admin": {
    title: "Ecommerce Admin Site",
    translationKey: "ecommerce-admin",
    categoryKey: "professional.title",
    image: ecommerceAdmin,
    technologies: ["NestJS", "Angular", "PostgreSQL", "Redis", "WebSockets", "Server-Sent Events"],
  },
  "ecommerce-storefront": {
    title: "Ecommerce Storefront",
    translationKey: "ecommerce-storefront",
    categoryKey: "professional.title",
    image: ecommerceStorefront,
    technologies: ["NestJS", "Svelte", "PostgreSQL", "Redis", "WebSockets", "Server-Sent Events"],
  },
  "omniaerea": {
    title: "OmniAerea",
    translationKey: "omniAerea",
    categoryKey: "personal.title",
    image: omniAereaImage,
    technologies: ["Python", "Playwright", "OpenAI API"],
  },
  "3d-engine": {
    title: "3D Engine",
    translationKey: "engine3d",
    categoryKey: "personal.title",
    image: engine3d,
    technologies: ["Java", "Linear Algebra"],
  },
  "sartres-cat": {
    title: "Sartre's Cat",
    translationKey: "sartreCat",
    categoryKey: "personal.title",
    image: sartre,
    technologies: ["Vue", "TypeScript", "NLP", "Data Analysis"],
  },
  "peer-review": {
    title: "Peer Review Automation",
    translationKey: "peerReview",
    categoryKey: "personal.title",
    image: peerReview,
    technologies: ["Python", "GitLab API", "NLP", "Automation"],
  },
    "facecat": {
    title: "Feed Algorithm",
    translationKey: "facecat",
    categoryKey: "facecat.title",
    image: facecat,
    technologies: ["python", "pytorch", "CNN", "RabbitMQ"],
  },
  "prompt-generator": {
    title: "Prompt Generator",
    translationKey: "promptGenerator",
    categoryKey: "personal.title",
    image: prompt,
    technologies: ["Python", "Playwright", "LLMs", "Automation"],
  },
  "open-go-readme": {
    title: "Open Go Readme",
    translationKey: "openGoReadme",
    categoryKey: "personal.title",
    image: opengo,
    technologies: ["Go", "OpenAI API", "AST Parsing", "CLI"],
  },
};

const slug = computed(() => route.params.slug as string);
const normalizedSlug = computed(() => slug.value.toLowerCase());
const project = computed(() => projects[normalizedSlug.value]);
const projectItemPath = computed(() => `projects.items.${project.value?.translationKey}`);
</script>

<template>
  <div class="project-page">
    <NoiseOverlay />
    <Header />

    <article
      v-if="project"
      class="project-post"
    >


      <section class="post-hero">
        <div class="post-summary">
          <header class="post-header">
            <p class="post-label">
              {{ t(`projects.${project.categoryKey}`) }}
            </p>

            <h1>
              {{ project.title }}
            </h1>

            <p class="post-description">
              {{ t(`${projectItemPath}.description`) }}
            </p>
          </header>

          <div class="post-meta">
            <span class="meta-label">
              {{ t("projects.post.technologies") }}
            </span>

            <div class="tech-list">
              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="tech-tag"
              >
                {{ technology }}
              </span>
            </div>
          </div>
        </div>

        <figure class="post-image">
          <img
            :src="project.image"
            :alt="project.title"
          />
        </figure>
      </section>

      <div class="post-content">
        <section>
          <h2>
            {{ t("projects.post.description") }}
          </h2>

          <p>
            {{ t(`${projectItemPath}.fullDescription`) }}
          </p>
        </section>

        <section>
          <h2>
            {{ t("projects.post.challenges") }}
          </h2>

          <p>
            {{ t(`${projectItemPath}.challenges`) }}
          </p>
        </section>

        <section>
          <h2>
            {{ t("projects.post.learnings") }}
          </h2>

          <p>
            {{ t(`${projectItemPath}.learnings`) }}
          </p>
        </section>
      </div>
    </article>

    <section
      v-else
      class="project-not-found"
    >
      <h1>
        {{ t("projects.post.notFound") }}
      </h1>

      <RouterLink to="/">
        ← {{ t("projects.post.back") }}
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.project-page {
  position: relative;
  min-height: 100vh;

  background: #0c0e14;
  color: #f3f4f6;
}

.project-post,
.project-not-found {
  position: relative;
  z-index: 1;
}

.project-post {
  width: min(1100px, 92%);
  margin: 0 auto;
  padding: 44px 0 120px;
}

.back-link {
  display: inline-block;

  margin-bottom: 60px;

  color: #9ba4b8;
  text-decoration: none;

  transition: color 0.2s ease;
}

.back-link:hover {
  color: #f3f4f6;
}

.post-hero {
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
  gap: 56px;
  align-items: center;
}

.post-summary {
  min-width: 0;
}

.post-header {
  margin-bottom: 36px;
}

.post-label {
  margin-bottom: 12px;

  color: #7f8aa3;
  font-size: 0.8rem;

  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.post-header h1 {
  margin: 0;

  max-width: 100%;

  overflow-wrap: anywhere;

  font-size: clamp(2.0 rem, 5vw, 4.5rem);
  line-height: 1.05;
}

.post-description {
  margin-top: 24px;

  color: #aeb6c7;

  overflow-wrap: anywhere;

  font-size: 1.15rem;
  line-height: 1.8;
}

.post-image {
  margin: 0;
  padding: 24px;

  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
}

.post-image img {
  display: block;

  width: 100%;
  aspect-ratio: 16 / 11;
  max-height: 512px;

  object-fit: contain;
}

.post-meta {
  padding: 24px 0 0;

  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.meta-label {
  display: block;

  margin-bottom: 14px;

  color: #7f8aa3;

  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  padding: 6px 10px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;

  max-width: 100%;

  color: #bfc7d8;

  overflow-wrap: anywhere;

  font-size: 0.8rem;
}

.post-content {
  width: 100%;

  margin: 84px 0 0;
}

.post-content section {
  margin-bottom: 60px;
}

.post-content h2 {
  margin-bottom: 20px;

  font-size: 1.8rem;
}

.post-content p {
  color: #b8c0d0;

  font-size: 1.05rem;
  line-height: 1.9;
}

.project-not-found {
  padding: 120px 24px;

  text-align: center;
}

.project-not-found a {
  color: #b8c0d0;
}

@media (max-width: 860px) {
  .post-hero {
    grid-template-columns: minmax(0, 1fr);
    gap: 36px;
  }

  .post-image {
    order: -1;
  }
}

@media (max-width: 768px) {
  .project-post {
    padding-top: 28px;
  }

  .back-link {
    margin-bottom: 40px;
  }

  .post-header h1 {
    font-size: clamp(2.25rem, 13vw, 4rem);
  }

  .post-content {
    margin-top: 50px;
  }

  .post-image {
    padding: 16px;
  }

  .post-image img {
    aspect-ratio: 4 / 3;
  }
}
</style>
