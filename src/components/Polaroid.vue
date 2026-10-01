<script setup lang="ts">
defineProps({
  imageSrc: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String, default: "" },
  projectUrl: { type: String, default: "" },
  technologies: { type: Array as () => string[], default: () => [] },
  rotation: { type: Number, default: 0 },
  year: { type: String, default: "" }
});
</script>

<template>
  <router-link
    :to="projectUrl"
    class="polaroid"
    :style="{ '--rotation': rotation + 'deg' }"
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

      <div
        v-if="technologies.length"
        class="technologies"
      >
        <span
          v-for="technology in technologies"
          :key="technology"
          class="technology"
        >
          {{ technology }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<style scoped>
.polaroid {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(100%, 260px);
  min-height: 386px;
  padding: 9px 9px 16px;
  overflow: hidden;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0) 42%),
    #f5f1e8;
  border: 1px solid #d8d0bf;
  border-radius: 2px;
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.5) inset,
    0 14px 28px rgba(0, 0, 0, 0.28);
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  transform: rotate(var(--rotation));
  transition:
    transform 0.22s ease,
    box-shadow 0.22s ease,
    border-color 0.22s ease;
  user-select: none;
}

.polaroid::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(rgba(42, 36, 28, 0.08) 0.6px, transparent 0.7px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.18), transparent 28%, rgba(74, 61, 45, 0.06));
  background-size: 7px 7px, 100% 100%;
  opacity: 0.42;
}

.polaroid:hover,
.polaroid:focus-visible {
  z-index: 10;
  border-color: #c7bda8;
  box-shadow:
    0 2px 0 rgba(255, 255, 255, 0.55) inset,
    0 20px 42px rgba(0, 0, 0, 0.38);
  transform: rotate(0deg) translateY(-6px) scale(1.025);
}

.polaroid:focus-visible {
  outline: 3px solid rgba(243, 244, 246, 0.7);
  outline-offset: 5px;
}

.photo {
  position: relative;
  overflow: hidden;
  background: #d8d8d2;
  border: 1px solid rgba(55, 45, 32, 0.16);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.16) inset;
}

.photo::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), transparent 45%, rgba(0, 0, 0, 0.16));
}

.photo img {
  display: block;
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.polaroid:hover img,
.polaroid:focus-visible img {
  transform: scale(1.035);
}

.caption {
  position: relative;
  z-index: 1;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 142px;
  padding: 12px 7px 0;
  text-align: center;
}

.caption h3 {
  margin: 0;
  color: #25211b;
  font-family: inherit;
  font-size: 0.98rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1.2;
}

.caption p {
  display: -webkit-box;
  margin: 7px 0 0;
  overflow: hidden;
  color: #5f574b;
  font-size: 0.78rem;
  line-height: 1.42;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  margin-top: 12px;
  padding-top: 0;
}

.technology {
  max-width: 100%;
  padding: 4px 7px;
  overflow: hidden;
  border: 1px solid #d2c7b2;
  border-radius: 999px;
  color: #6c6253;
  font-size: 0.66rem;
  line-height: 1;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.year {
  display: block;
  margin-top: 10px;
  color: #887e6c;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

@media (max-width: 640px) {
  .polaroid {
    width: min(100%, 300px);
    min-height: 380px;
    transform: rotate(0deg);
  }
}
</style>
