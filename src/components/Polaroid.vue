<script setup lang="ts">
import { ref } from "vue";

defineProps({
  imageSrc: {
    type: String,
    required: true
  },

  title: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  fullDescription: {
    type: String,
    default: ""
  },

  githubUrl: {
    type: String,
    default: ""
  },

  technologies: {
    type: Array as () => string[],
    default: () => []
  },

  rotation: {
    type: Number,
    default: 0
  },

  year: {
    type: String,
    default: ""
  }
});

const isOpen = ref(false);
</script>

<template>
  <article
    class="polaroid"
    :style="{ '--rotation': `${rotation}deg` }"
    @click="isOpen = true"
  >
    <div class="photo">
      <img
        :src="imageSrc"
        :alt="title"
      >
    </div>

    <div class="caption">
      <h3>{{ title }}</h3>

      <p>{{ description }}</p>

      <span
        v-if="year"
        class="year"
      >
        {{ year }}
      </span>
    </div>
  </article>

  <sl-dialog
    :open="isOpen"
    @sl-after-hide="isOpen = false"
  >
    <div class="scrapbook-page">
      <div class="scrapbook-photo">
        <img
          :src="imageSrc"
          :alt="title"
          class="scrapbook-image"
        >
      </div>

      <div class="scrapbook-content">
        <h2>{{ title }}</h2>

        <span
          v-if="year"
          class="project-date"
        >
          {{ year }}
        </span>

        <p class="project-story">
          {{ fullDescription || description }}
        </p>

        <div
          v-if="technologies.length"
          class="metadata"
        >
          <h4>Technologies</h4>

          <div class="tech-list">
            <span
              v-for="tech in technologies"
              :key="tech"
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <a
          v-if="githubUrl"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="github-link"
          @click.stop
        >
          View Source →
        </a>
      </div>
    </div>
  </sl-dialog>
</template>

<style>
sl-dialog::part(base) {
  --width: 850px;
}

sl-dialog::part(panel) {
  background: #f5f1e8;

  color: #222;

  border-radius: 0;

  border: 1px solid #d8d1c3;

  box-shadow:
    0 25px 70px rgba(0, 0, 0, 0.35);
}

sl-dialog::part(header) {
  display: none;
}

sl-dialog::part(body) {
  padding: 0;
}

sl-dialog::part(footer) {
  display: none;
}
</style>

<style scoped>
.polaroid {
  width: 280px;

  padding:
    12px
    12px
    72px;

  background: #f5f1e8;

  border: 1px solid #d9d4c8;

  transform: rotate(var(--rotation));

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.3);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  cursor: pointer;

  user-select: none;
}

.polaroid:hover {
  transform:
    rotate(0deg)
    scale(1.04);

  z-index: 10;

  box-shadow:
    0 18px 40px rgba(0, 0, 0, 0.4);
}

.photo {
  overflow: hidden;

  background: #ddd;
}

.photo img {
  width: 100%;

  display: block;

  aspect-ratio: 1 / 1;

  object-fit: cover;

  transition: transform 0.3s ease;
}

.polaroid:hover img {
  transform: scale(1.03);
}

.caption {
  margin-top: 18px;

  text-align: center;
}

.caption h3 {
  margin: 0;

  color: #222;

  font-size: 1.15rem;

  font-family:
    "Caveat",
    "Patrick Hand",
    cursive;
}

.caption p {
  margin-top: 8px;

  color: #555;

  font-size: 0.85rem;

  line-height: 1.5;
}

.year {
  display: block;

  margin-top: 10px;

  font-size: 0.75rem;

  color: #888;

  letter-spacing: 0.08em;

  text-transform: uppercase;
}

.scrapbook-page {
  display: grid;

  grid-template-columns:
    minmax(250px, 350px)
    1fr;

  min-height: 500px;
}

.scrapbook-photo {
  padding: 30px;

  background:
    repeating-linear-gradient(
      -45deg,
      #efe8da,
      #efe8da 12px,
      #ebe2d2 12px,
      #ebe2d2 24px
    );
}

.scrapbook-image {
  width: 100%;

  display: block;

  background: white;

  padding: 10px;

  box-shadow:
    0 10px 25px rgba(0,0,0,.15);

  transform: rotate(-2deg);
}

.scrapbook-content {
  padding: 40px;
}

.scrapbook-content h2 {
  margin: 0;

  color: #222;

  font-size: 2rem;
}

.project-date {
  display: inline-block;

  margin-top: 10px;

  color: #777;

  font-size: .8rem;

  letter-spacing: .12em;

  text-transform: uppercase;
}

.project-story {
  margin-top: 24px;

  color: #444;

  line-height: 1.9;

  font-size: 1rem;
}

.metadata {
  margin-top: 32px;
}

.metadata h4 {
  margin-bottom: 14px;

  color: #333;
}

.tech-list {
  display: flex;

  flex-wrap: wrap;

  gap: 10px;
}

.tech-tag {
  background: #e7decd;

  border: 1px solid #d5ccb9;

  color: #444;

  padding:
    6px
    12px;

  font-size: .85rem;
}

.github-link {
  display: inline-block;

  margin-top: 32px;

  color: #222;

  text-decoration: none;

  font-weight: 600;
}

.github-link:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .scrapbook-page {
    grid-template-columns: 1fr;
  }

  .scrapbook-content {
    padding: 24px;
  }
}
</style>
