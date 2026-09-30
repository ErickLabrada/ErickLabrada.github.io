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
    :style="{ '--rotation': `${rotation}deg` }"
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
          v-for="technology in technologies.slice(0, 3)"
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
/* ===================== */
/* POLAROID CARD */
/* ===================== */

.polaroid {
  display: block;

  width: min(100%, 280px);
  min-height: 430px;
  padding: 10px 10px 18px;

  background: #f5f1e8;
  border: 1px solid #d9d4c8;

  transform: rotate(var(--rotation));

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  cursor: pointer;
  user-select: none;

  text-decoration: none;
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
  display: flex;
  flex-direction: column;
  min-height: 132px;

  margin-top: 14px;
  text-align: center;
}

.caption h3 {
  margin: 0;

  color: #222;
  font-size: 1.15rem;

  font-family: "Caveat", "Patrick Hand", cursive;
}

.caption p {
  margin: 6px 0 0;

  color: #555;
  font-size: 0.85rem;
  line-height: 1.5;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;

  margin-top: auto;
  padding-top: 12px;
}

.technology {
  padding: 4px 7px;

  border: 1px solid #d9d4c8;
  border-radius: 999px;

  color: #686154;
  font-size: 0.68rem;
  line-height: 1;
}

.year {
  display: block;

  margin-top: 10px;

  font-size: 0.75rem;
  color: #888;

  letter-spacing: 0.08em;
  text-transform: uppercase;
}
</style>
