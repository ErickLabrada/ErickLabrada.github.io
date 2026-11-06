<script setup>
import { useI18n } from 'vue-i18n'
import cv from '@/assets/cv.pdf'
import profilePhoto from '@/assets/profile.png'

const { t } = useI18n()
</script>

<template>
  <section class="hero-section">
    <div class="hero-card">
      <div class="hero-grid">
        <div class="hero-copy">
          <h1>
            {{ t('homeHero.title') }}
          </h1>

          <div class="hero-meta">
            <span class="location-icon" aria-hidden="true"></span>

            <span>
              {{ t('homeHero.location') }}
            </span>
          </div>

          <p class="hero-description">
            {{ t('homeHero.description') }}
          </p>

          <a :href="cv" target="_blank" rel="noopener noreferrer" download class="primary-button">
            <svg
              class="download-icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            {{ t('homeHero.cv') }}
          </a>
        </div>

        <div class="portrait-space">
          <svg class="orbital-lines" viewBox="0 0 500 500" fill="none" aria-hidden="true">
            <circle cx="250" cy="250" r="218" />
            <ellipse cx="250" cy="250" rx="242" ry="95" transform="rotate(-34 250 250)" />
            <path class="orbit-star" d="M429 102v18m-9-9h18M65 337v12m-6-6h12" />
            <circle class="orbit-point" cx="355" cy="59" r="4" />
          </svg>
          <figure class="hero-portrait">
            <img :src="profilePhoto" alt="Erick Labrada" />
            <figcaption>{{ t('homeHero.label') }}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 88px 0 104px;
}
.hero-grid {
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 64px;
  align-items: center;
}
.hero-copy {
  min-width: 0;
}
h1 {
  max-width: 9ch;
  margin: 0 0 24px;
  font-size: clamp(3.6rem, 6.8vw, 6rem);
  line-height: 0.99;
}
.hero-meta {
  display: flex;
  gap: 10px;
  align-items: center;
  color: var(--muted);
  font-size: 0.875rem;
  margin-bottom: 24px;
}
.location-icon {
  width: 7px;
  height: 7px;
  background: var(--accent);
  border-radius: 50%;
}
.hero-description {
  max-width: 49ch;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.8;
  margin: 0 0 32px;
}
.primary-button {
  display: inline-flex;
  gap: 12px;
  align-items: center;
  background: var(--paper);
  color: var(--ink);
  padding: 14px 24px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.2s;
}
.primary-button:hover {
  background: var(--accent);
}
.download-icon {
  width: 18px;
  height: 18px;
}
.portrait-space {
  position: relative;
  padding: 24px;
}
.orbital-lines {
  position: absolute;
  width: 135%;
  height: 135%;
  left: -17.5%;
  top: -17.5%;
  stroke: var(--line);
  stroke-width: 1;
}
.orbit-star {
  stroke: var(--accent);
}
.orbit-point {
  fill: var(--accent);
  stroke: none;
}
.hero-portrait {
  position: relative;
  width: 100%;
  max-width: 334px;
  margin: 0 auto;
  background: var(--paper);
  padding: 12px 12px 20px;
  box-shadow: 0 24px 55px #0005;
  transform: rotate(5deg);
}
.hero-portrait img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
  filter: saturate(0.75);
}
figcaption {
  font-family: 'Caveat', cursive;
  font-size: 1.45rem;
  text-align: center;
  color: var(--ink);
  padding-top: 15px;
  line-height: 1.2;
}
@media (max-width: 760px) {
  .hero-section {
    padding: 48px 0 64px;
  }
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 46px;
  }
  h1 {
    max-width: 11ch;
    font-size: clamp(3.6rem, 12vw, 5rem);
  }
  .portrait-space {
    width: min(78%, 330px);
    justify-self: center;
    padding: 15px;
  }
  .hero-description {
    font-size: 1rem;
  }
}
</style>
