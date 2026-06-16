<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from "vue";

const props = defineProps({
  imageSrc: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String, default: "" },
  githubUrl: { type: String, default: "" },
  technologies: { type: Array as () => string[], default: () => [] },
  rotation: { type: Number, default: 0 },
  year: { type: String, default: "" }
});

const isOpen = ref(false);

function open() {
  isOpen.value = true;
  document.body.style.overflow = "hidden";
}

function close() {
  isOpen.value = false;
  document.body.style.overflow = "";
}

/* ESC key support */
function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") close();
}

watch(isOpen, (val) => {
  if (val) window.addEventListener("keydown", onKey);
  else window.removeEventListener("keydown", onKey);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKey);
  document.body.style.overflow = "";
});
</script>

<template>
  <!-- POLAROID CARD -->
  <article
    class="polaroid"
    :style="{ '--rotation': `${rotation}deg` }"
    @click="open"
  >
    <div class="photo">
      <img :src="imageSrc" :alt="title" />
    </div>

    <div class="caption">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>

      <span v-if="year" class="year">
        {{ year }}
      </span>
    </div>
  </article>

  <!-- MODAL -->
  <div
    v-if="isOpen"
    class="modal-overlay"
    @click.self="close"
  >
    <div class="modal">
      <!-- CLOSE BUTTON -->
      <button class="close-btn" @click="close">×</button>

      <!-- IMAGE -->
      <div class="modal-image-wrapper">
        <img :src="imageSrc" :alt="title" />
      </div>

      <!-- CONTENT -->
      <div class="modal-content">
        <h2>{{ title }}</h2>

        <span v-if="year" class="project-date">
          {{ year }}
        </span>

        <p class="project-story">
          {{ fullDescription || description }}
        </p>

        <div v-if="technologies.length" class="metadata">
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
          class="github-link"
        >
          View Source →
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===================== */
/* POLAROID CARD */
/* ===================== */

.polaroid {
  width: 280px;
  padding: 12px 12px 72px;

  background: #f5f1e8;
  border: 1px solid #d9d4c8;

  transform: rotate(var(--rotation));

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  transition: transform 0.25s ease, box-shadow 0.25s ease;

  cursor: pointer;
  user-select: none;
}

.polaroid:hover {
  transform: rotate(0deg) scale(1.04);
  z-index: 10;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.4);
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
  font-family: "Caveat", "Patrick Hand", cursive;
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

/* ===================== */
/* MODAL OVERLAY */
/* ===================== */

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;
}

/* ===================== */
/* MODAL */
/* ===================== */

.modal {
  background: #f5f1e8;
  width: min(900px, 95vw);
  max-height: 90vh;
  overflow: auto;

  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;

  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

/* CLOSE BUTTON */
.close-btn {
  position: absolute;
  top: 10px;
  right: 14px;

  font-size: 28px;
  border: none;
  background: none;
  cursor: pointer;

  color: #333;
}

/* IMAGE AREA */
.modal-image-wrapper {
  background: #e9e1d2;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;
}

.modal-image-wrapper img {
  max-width: 100%;
  max-height: 70vh;

  object-fit: contain;
}

/* CONTENT */
.modal-content {
  padding: 30px;
}

.modal-content h2 {
  margin: 0;
  color: #222;
  font-size: 2rem;
}

.project-date {
  display: inline-block;
  margin-top: 10px;
  color: #777;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.project-story {
  margin-top: 24px;
  color: #444;
  line-height: 1.9;
}

/* TECH */
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
  padding: 6px 12px;
  font-size: 0.85rem;
}

/* LINK */
.github-link {
  display: inline-block;
  margin-top: 32px;
  color: #222;
  font-weight: 600;
  text-decoration: none;
}

.github-link:hover {
  text-decoration: underline;
}

/* MOBILE */
@media (max-width: 768px) {
  .modal {
    grid-template-columns: 1fr;
  }

  .modal-content {
    padding: 24px;
  }
}
</style>
