<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import NoiseOverlay from '@/components/NoiseOverlay.vue'
import Header from '@/components/Header.vue'
import { projectsBySlug } from '@/data/projects'

const route = useRoute()
const { t } = useI18n()

const slug = computed(() => route.params.slug as string)
const normalizedSlug = computed(() => slug.value.toLowerCase())
const project = computed(() => projectsBySlug[normalizedSlug.value])
const projectItemPath = computed(() => `projects.items.${project.value?.translationKey}`)
</script>

<template>
  <div class="project-page">
    <NoiseOverlay />
    <Header />

    <article v-if="project" class="project-post">
      <RouterLink to="/#projects" class="back-link">← {{ t('projects.post.back') }}</RouterLink>
      <section class="post-hero">
        <div class="post-summary">
          <header class="post-header">
            <h1>
              {{ project.title }}
            </h1>

            <p class="post-description">
              {{ t(`${projectItemPath}.description`) }}
            </p>
          </header>

          <div class="post-meta">
            <span class="meta-label">
              {{ t('projects.post.technologies') }}
            </span>

            <div class="tech-list">
              <span v-for="technology in project.technologies" :key="technology" class="tech-tag">
                {{ technology }}
              </span>
            </div>
          </div>
        </div>

        <figure
          class="post-image"
          :class="{ 'post-image-portrait': project.imageOrientation === 'portrait' }"
        >
          <img v-if="project.image" :src="project.image" :alt="project.title" />
          <div v-else class="image-placeholder" aria-hidden="true"></div>
        </figure>
      </section>

      <div class="post-content">
        <section>
          <h2>
            {{ t('projects.post.description') }}
          </h2>

          <p>
            {{ t(`${projectItemPath}.fullDescription`) }}
          </p>
        </section>

        <section>
          <h2>
            {{ t('projects.post.challenges') }}
          </h2>

          <p>
            {{ t(`${projectItemPath}.challenges`) }}
          </p>
        </section>

        <section>
          <h2>
            {{ t('projects.post.learnings') }}
          </h2>

          <p>
            {{ t(`${projectItemPath}.learnings`) }}
          </p>
        </section>
      </div>
    </article>

    <section v-else class="project-not-found">
      <h1>
        {{ t('projects.post.notFound') }}
      </h1>

      <RouterLink to="/"> ← {{ t('projects.post.back') }} </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.project-page {
  position: relative;
  min-height: 100vh;
  overflow: clip;
}
.project-post,
.project-not-found {
  position: relative;
  z-index: 1;
  width: var(--page-width);
  margin: 0 auto;
  padding: 40px 0 100px;
}
.back-link {
  display: inline-flex;
  padding: 10px 0;
  margin-bottom: 48px;
  color: var(--muted);
  text-decoration: none;
  font-size: 0.9rem;
}
.back-link:hover {
  color: var(--accent);
}
.post-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.post-summary {
  min-width: 0;
}
.post-header h1 {
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1.03;
  margin: 0;
  overflow-wrap: anywhere;
}
.post-description {
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-top: 24px;
}
.post-meta {
  margin-top: 30px;
  border-top: 1px solid var(--line);
  padding-top: 22px;
}
.meta-label {
  font-size: 0.85rem;
  color: var(--muted);
}
.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 18px;
  margin-top: 12px;
}
.tech-tag {
  font-size: 0.85rem;
  color: var(--paper);
}
.post-image {
  margin: 0;
  padding: 14px 14px 48px;
  background: var(--paper);
  transform: rotate(2deg);
  box-shadow: 0 24px 50px #0004;
}
.post-image img {
  display: block;
  width: 100%;
  height: auto;
}
.image-placeholder {
  aspect-ratio: 16 / 9;
  background: #dedbd3;
}
.post-image-portrait {
  width: min(100%, 320px);
  justify-self: center;
}
.post-content {
  margin-top: 96px;
}
.post-content section {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 64px;
  padding: 40px 0;
  border-top: 1px solid var(--line);
}
.post-content h2 {
  margin: 0;
  font-size: 2.15rem;
}
.post-content p {
  max-width: 70ch;
  margin: 0;
  color: var(--muted);
  font-size: 1.05rem;
  line-height: 1.9;
}
.project-not-found {
  padding-block: 120px;
  text-align: center;
}
.project-not-found h1 {
  font-size: 3rem;
}
.project-not-found a {
  color: var(--paper);
}
@media (max-width: 760px) {
  .post-hero {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  .back-link {
    margin-bottom: 24px;
  }
  .post-image {
    max-width: 520px;
  }
  .post-content {
    margin-top: 64px;
  }
  .post-content section {
    grid-template-columns: 1fr;
    gap: 20px;
    padding-block: 30px;
  }
}
</style>
