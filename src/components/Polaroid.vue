<script setup lang="ts">
defineProps({
  imageSrc: { type: String, required: true },
  portrait: { type: Boolean, default: false },
  title: { type: String, required: true },
  description: { type: String, required: true },
  fullDescription: { type: String, default: '' },
  projectUrl: { type: String, default: '' },
  technologies: { type: Array as () => string[], default: () => [] },
  rotation: { type: Number, default: 0 },
  year: { type: String, default: '' },
})
</script>

<template>
  <router-link :to="projectUrl" class="polaroid" :style="{ '--rotation': rotation + 'deg' }">
    <div class="photo" :class="{ 'photo-portrait': portrait }">
      <img v-if="imageSrc" :src="imageSrc" :alt="title" loading="lazy" width="600" height="450" />
    </div>

    <div class="caption">
      <h3>{{ title }}</h3>

      <p>{{ description }}</p>

      <span v-if="year" class="year">
        {{ year }}
      </span>

      <div v-if="technologies.length" class="technologies">
        <span v-for="technology in technologies" :key="technology" class="technology">
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
  width: 100%;
  padding: 12px 12px 22px;
  background: var(--paper);
  color: var(--ink);
  text-decoration: none;
  box-shadow: 0 14px 30px #0004;
  transform: rotate(var(--rotation));
  transition:
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s;
}
@media (hover: hover) {
  .polaroid:hover {
    z-index: 2;
    transform: translateY(-8px) rotate(0deg);
    box-shadow: 0 24px 42px #0006;
  }
}
.polaroid:focus-visible {
  transform: rotate(0deg);
  outline-color: var(--accent);
}
.photo {
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: #dedbd3;
}
.photo img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}
.photo-portrait img {
  object-fit: contain;
}
.caption {
  flex: 1;
  padding: 19px 8px 0;
  text-align: left;
}
.caption h3 {
  color: var(--ink);
  font-family: 'Caveat', cursive;
  font-size: 1.8rem;
  line-height: 1.05;
  margin: 0 0 10px;
  font-weight: 500;
}
.caption p {
  color: #57534b;
  font-size: 0.86rem;
  line-height: 1.55;
  margin: 0;
}
.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 5px 12px;
  margin-top: 18px;
  padding-top: 13px;
  border-top: 1px solid #24282025;
}
.technology {
  color: #655e50;
  font-size: 0.7rem;
  line-height: 1.5;
}
.year {
  font-size: 0.8rem;
  color: #655e50;
}
@media (max-width: 950px) {
  .caption {
    padding-inline: 2px;
  }
  .caption h3 {
    font-size: 1.6rem;
  }
}
@media (max-width: 480px) {
  .polaroid {
    max-width: 330px;
  }
}
</style>
