<script setup>
import { useI18n } from 'vue-i18n'
import cv from '@/assets/cv.pdf'
import profilePhoto from '@/assets/profile.png'

const { t } = useI18n()
</script>

<template>
  <section class="hero-section">
    <sl-card class="hero-card">
      <div class="hero-grid">
        <div class="hero-copy">
          <p class="hero-label">
            {{ t('homeHero.label') }}
          </p>

          <h1>
            {{ t('homeHero.title') }}
          </h1>

          <div class="hero-meta">
            <span
              class="location-icon"
              aria-hidden="true"
            ></span>

            <span>
              {{ t('homeHero.location') }}
            </span>
          </div>

          <p class="hero-description">
            {{ t('homeHero.description') }}
          </p>

          <a
            :href="cv"
            target="_blank"
            rel="noopener noreferrer"
            class="primary-button"
          >
            {{ t('homeHero.cv') }}
          </a>
        </div>

        <figure class="hero-portrait">
          <img
            :src="profilePhoto"
            alt="Erick Labrada"
          />
        </figure>
      </div>
    </sl-card>
  </section>
</template>

<style scoped>
.hero-section {
  margin-top: 40px;
}

.hero-card::part(base) {
  backdrop-filter: blur(18px);
  background: rgba(18, 21, 30, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  padding: 48px;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(240px, 340px);
  gap: 48px;
  align-items: center;
}

.hero-copy {
  min-width: 0;
}

.hero-label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #8b93a7;
  font-size: 0.8rem;
  margin-bottom: 16px;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  line-height: 1;
  margin-bottom: 24px;
}

.hero-meta {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin: -10px 0 24px;
  color: #9ba4b8;
  font-size: 0.95rem;
}

.location-icon {
  position: relative;
  width: 14px;
  height: 14px;
  border: 2px solid currentColor;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
}

.location-icon::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
}

.hero-description {
  max-width: 640px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #c7cedb;
  margin-bottom: 32px;
}

.hero-warning {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;
  color: #8b93a7;
  font-size: 0.95rem;
}

.primary-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: #f3f4f6;
  color: #0c0e14;
  padding: 14px 28px;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease;
  font-weight: 600;
  text-decoration: none;
}

.primary-button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}

.hero-portrait {
  width: min(100%, 320px);
  justify-self: center;
  margin: 0;
  padding: 12px 12px 52px;
  background: #f5f1e8;
  border: 1px solid #d9d4c8;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.32);
  transform: rotate(2deg);
}

.hero-portrait img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
}

@media (max-width: 860px) {
  .hero-card::part(base) {
    padding: 36px 24px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .hero-portrait {
    order: -1;
    width: min(100%, 280px);
  }
}
</style>
