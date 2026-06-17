<script setup lang="ts">
import profilePhoto from "@/assets/profile.png";
</script>

<template>
  <section class="about-grid">
    <div class="portrait-polaroid">
      <img
        :src="profilePhoto"
        alt="Erick Labrada"
      >

      <div class="portrait-caption">
      </div>
    </div>

    <sl-card class="info-card">
      <h2>
        Currently Exploring
      </h2>

      <ul>
        <li>Machine Learning & AI Engineering</li>
        <li>Tasks Automation</li>
        <li>Data Analysis</li>
        <li>NLP</li>
        <li>Music</li>
        <li>Photography</li>
      </ul>
    </sl-card>
  </section>
</template>

<style scoped>
.about-grid {
  margin-top: 40px;

  display: grid;

  grid-template-columns:
    320px
    1fr;

  gap: 128px;

  align-items: center;
}

.portrait-polaroid {
  background: #f5f1e8;

  padding:
    12px
    12px
    56px;

  margin-left: 50px;

  border: 1px solid #d9d4c8;

  box-shadow:
    0 12px 30px rgba(0,0,0,.25);

  transform: rotate(-2deg);
}

.portrait-polaroid img {
  width: 100%;

  display: block;

  aspect-ratio: 1 / 1;

  object-fit: cover;
}

.portrait-caption {
  margin-top: 18px;

  text-align: center;
}

.portrait-caption h3 {
  margin: 0;

  color: #222;

  font-size: 1.25rem;

  font-family:
    "Caveat",
    "Patrick Hand",
    cursive;
}

.portrait-caption span {
  display: block;

  margin-top: 8px;

  color: #555;

  font-size: .9rem;

  line-height: 1.5;
}

.info-card::part(base) {
  backdrop-filter: blur(18px);

  background:
    rgba(18, 21, 30, 0.72);

  border: 1px solid
    rgba(255,255,255,0.08);

  border-radius: 24px;

  padding: 28px;
}

.info-card h2 {
  margin-bottom: 20px;
}

.info-card ul {
  padding-left: 18px;

  margin: 0;
}

.info-card li {
  color: #b5bfd1;

  line-height: 2;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  .portrait-polaroid {
    max-width: 320px;

    margin: 0 auto;
  }
}
</style>
