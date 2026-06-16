<template>
  <section class="hero-section">
    <sl-card class="hero-card">
      <p class="hero-label">
        Portfolio and Projects Archive
      </p>

      <h1>
        Hello World, I'm Erick.
      </h1>

      <p class="hero-description">
          Software Engineering graduate with a passion for machine learning,
          automation, and building software that solves real-world problems.
          I enjoy exploring the intersection of AI, science, and creativity—
          whether that's developing tools, analyzing data, or writing music.
          This portfolio is a collection of projects, experiments, and ideas
          I've had fun creating.

      </p>

      <div class="hero-warning">
        <span>
           Hope you enjoy flipping through it like old Polaroids.
        </span>
      </div>

      <router-link to="/submit">
        <button class="primary-button">
          Download CV
        </button>
      </router-link>
    </sl-card>
  </section>
</template>

<style scoped>
.hero-section {
  margin-top: 40px;
}

.hero-card::part(base) {
  backdrop-filter: blur(18px);

  background:
    rgba(18, 21, 30, 0.72);

  border: 1px solid
    rgba(255,255,255,0.08);

  border-radius: 24px;

  padding: 48px;
}

.hero-label {
  text-transform: uppercase;

  letter-spacing: 0.15em;

  color: #8b93a7;

  font-size: 0.8rem;

  margin-bottom: 16px;
}

h1 {
  font-size:
    clamp(2.5rem, 6vw, 5rem);

  line-height: 1;

  margin-bottom: 24px;
}

.hero-description {
  font-size: 1.1rem;

  line-height: 1.9;

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
  border: none;

  background: #f3f4f6;

  color: #0c0e14;

  padding: 14px 28px;

  border-radius: 12px;

  font-size: 1rem;

  cursor: pointer;

  transition: 0.2s ease;

  font-weight: 600;
}

.primary-button:hover {
  transform: translateY(-2px);

  opacity: 0.9;
}
</style>
