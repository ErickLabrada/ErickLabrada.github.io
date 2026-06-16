<template>
  <section class="contact-section">
    <sl-card class="contact-card">
      <p class="section-label">
        Contact
      </p>

  <h2>
    Let's Build Something Interesting
  </h2>

  <p class="contact-description">
    Whether it's software engineering, AI, automation,
    open source, music, or a project you're excited about,
    feel free to reach out.
  </p>

  <div class="contact-links">
    <a
      href="mailto:Erick.Labrada233380@gmail.com"
      class="contact-link"
    >
      Email
    </a>

    <a
      href="https://github.com/ErickLabrada"
      target="_blank"
      rel="noopener"
      class="contact-link"
    >
      GitHub
    </a>

    <a
      href="https://www.linkedin.com/in/ericklabrada/"
      target="_blank"
      rel="noopener"
      class="contact-link"
    >
      LinkedIn
    </a>
  </div>
</sl-card>

  </section>
</template>

<style scoped>
.contact-section {
  margin-top: 80px;
  margin-bottom: 80px;
}

.contact-card::part(base) {
  background: rgba(18, 21, 30, 0.72);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 48px;
  text-align: center;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #8b93a7;
  font-size: 0.8rem;
  margin-bottom: 12px;
}

.contact-card h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 20px;
}

.contact-description {
  color: #c7cedb;
  max-width: 700px;
  margin: 0 auto 32px;
  line-height: 1.8;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.contact-link {
  text-decoration: none;
  color: #f3f4f6;
  border: 1px solid rgba(255,255,255,0.12);
  padding: 12px 24px;
  border-radius: 12px;
  transition: 0.2s ease;
}

.contact-link:hover {
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.25);
}
</style>
