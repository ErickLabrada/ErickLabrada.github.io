<template>
  <div class="thanks-page">
    <NoiseOverlay />

    <main class="thanks-container">
      <section class="thanks-card">

        <p class="thanks-label">
          Submission received
        </p>

        <h1 class="thanks-title">
          Thank you for participating.
        </h1>

        <!-- gif -->
        <div class="gif-wrapper">
          <img
            src="/gifs/krypto.gif"
            alt="Observer"
            class="thanks-gif"
          />
        </div>


      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import NoiseOverlay from '@/components/NoiseOverlay.vue'
</script>

<style scoped>
.thanks-page {
  min-height: 100vh;

  position: relative;

  background: #0c0e14;

  color: #f3f4f6;

  overflow: hidden;
}

.thanks-container {
  position: relative;

  z-index: 1;

  min-height: 100vh;

  width: min(860px, 92%);

  margin: 0 auto;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 48px 0;
}

.thanks-card {
  width: 100%;

  max-width: 720px;

  padding: 64px;

  border-radius: 32px;

  backdrop-filter: blur(18px);

  background:
    rgba(18, 21, 30, 0.72);

  border: 1px solid
    rgba(255,255,255,0.08);

  display: flex;

  flex-direction: column;

  gap: 28px;

  box-shadow:
    0 20px 60px rgba(0,0,0,0.45);
}

/* gif */

.gif-wrapper {
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  padding-bottom: 12px;
}

.thanks-gif {
  width: min(100%, 340px);

  border-radius: 20px;

  border: 1px solid
    rgba(255,255,255,0.08);

  object-fit: cover;

  opacity: 0.92;
}

.thanks-label {
  text-transform: uppercase;

  letter-spacing: 0.18em;

  font-size: 0.78rem;

  color: #8b93a7;
}

.thanks-title {
  font-size:
    clamp(2.5rem, 6vw, 4.5rem);

  line-height: 0.95;

  font-weight: 600;
}

.thanks-description {
  font-size: 1.05rem;

  line-height: 1.9;

  color: #d1d5db;

  max-width: 60ch;
}

.thanks-description.muted {
  color: #8b93a7;
}

.thanks-actions {
  padding-top: 12px;
}

.primary-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  padding: 14px 22px;

  border-radius: 16px;

  background:
    rgba(255,255,255,0.08);

  border: 1px solid
    rgba(255,255,255,0.12);

  color: #f3f4f6;

  text-decoration: none;

  transition:
    all 0.25s ease;
}

.primary-button:hover {
  transform: translateY(-2px);

  background:
    rgba(255,255,255,0.12);

  border-color:
    rgba(255,255,255,0.18);
}

@media (max-width: 768px) {
  .thanks-card {
    padding: 40px 28px;
  }

  .thanks-title {
    line-height: 1.05;
  }

  .thanks-gif {
    width: 100%;
  }
}
</style>