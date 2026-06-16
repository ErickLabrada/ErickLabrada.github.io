<template>
  <section class="skills-section">
    <div class="section-header">
      <p class="section-label">Capabilities</p>
      <h2>Things I Work With</h2>
    </div>

<div class="skills-grid">
  <sl-card class="skill-card">
    <h3>Backend Development</h3>
    <p>
      Building APIs, services, automation tools, and scalable
      applications.
    </p>
    <span>Python • TypeScript • Java • Go</span>
  </sl-card>

  <sl-card class="skill-card">
    <h3>Frameworks</h3>
    <p>
      Creating maintainable applications using modern backend
      frameworks and libraries.
    </p>
    <span>NestJS • Flask • Express • Chi</span>
  </sl-card>

  <sl-card class="skill-card">
    <h3>AI & Machine Learning</h3>
    <p>
      Working with language models, retrieval systems,
      and machine learning workflows.
    </p>
    <span>
      LangChain • LangGraph • Hugging Face • Transformers • RAG
    </span>
  </sl-card>

  <sl-card class="skill-card">
    <h3>Infrastructure</h3>
    <p>
      Databases, messaging systems, containers, and deployment tools.
    </p>
    <span>
      PostgreSQL • MySQL • MongoDB • Redis • RabbitMQ • Docker • Git
    </span>
  </sl-card>

  <sl-card class="skill-card">
    <h3>Languages</h3>
    <p>
      Comfortable working in international environments and teams.
    </p>
    <span>Spanish (Native) • English (Fluent)</span>
  </sl-card>
</div>

  </section>
</template>

<style scoped>
.skills-section {
  margin-top: 80px;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #8b93a7;
  font-size: 0.8rem;
  margin-bottom: 12px;
}

.section-header {
  margin-bottom: 32px;
}

.section-header h2 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.skills-grid {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.skill-card::part(base) {
  background: rgba(18, 21, 30, 0.72);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  padding: 24px;
}

.skill-card h3 {
  margin-bottom: 12px;
}

.skill-card p {
  color: #c7cedb;
  line-height: 1.7;
  margin-bottom: 16px;
}

.skill-card span {
  color: #8b93a7;
  font-size: 0.9rem;
}
</style>
