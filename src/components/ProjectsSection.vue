<script setup lang="ts">
import Polaroid from "@/components/Polaroid.vue";
import me from "@/assets/me.jpg";
</script>

<template>
  <section class="projects-section">
    <header class="section-header">
      <h2>Projects Archive</h2>

      <p>
        A collection of professional work and personal experiments.
      </p>
    </header>

    <!-- FEATURED -->
    <div class="projects-group">
      <h3>Featured Work</h3>

      <div class="featured-grid">
        <Polaroid
          title="Kanban Automation System"
          description="Workflow automation tool for issue tracking."
          :image-src="me"
          :rotation="-2"
          year="2026"
          :technologies="['Python', 'Playwright']"
        />

        <Polaroid
          title="GitLab Review Analyzer"
          description="Static analysis for merge requests."
          :image-src="me"
          :rotation="2"
          year="2026"
          :technologies="['Python', 'NLP']"
        />

        <Polaroid
          title="Internal Dashboard Tools"
          description="Engineering productivity tools."
          :image-src="me"
          :rotation="-1"
          year="2025"
          :technologies="['Vue', 'Node']"
        />
      </div>
    </div>

    <!-- PERSONAL -->
    <div class="projects-group">
      <h3>Experiments & Personal Work</h3>

      <div class="stagger-grid">
        <Polaroid class="p1" title="3D Engine" description="CPU rendering engine." :image-src="me" :rotation="-3" year="2025" />
        <Polaroid class="p2" title="ML Classifier" description="Vision experiments." :image-src="me" :rotation="2" year="2025" />
        <Polaroid class="p3" title="CLI Tool" description="Log parser." :image-src="me" :rotation="-1" year="2024" />
        <Polaroid class="p4" title="Music Tracker" description="Practice tool." :image-src="me" :rotation="3" year="2024" />
        <Polaroid class="p5" title="Data Sandbox" description="Charts & datasets." :image-src="me" :rotation="-2" year="2025" />
        <Polaroid class="p6" title="UI Experiments" description="Interface prototypes." :image-src="me" :rotation="1" year="2025" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

/* Header */
.section-header h2 {
  font-size: 2rem;
  margin: 0;
}

.section-header p {
  margin-top: 10px;
  color: #b5bfd1;
  line-height: 1.6;
}

/* Group titles */
.projects-group h3 {
  margin-bottom: 20px;
  font-size: 1.2rem;
  color: #d7dbe6;
}

/* FEATURED GRID */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

/* STAGGER GRID */
.stagger-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  align-items: start;
}

/* Stagger positions */
.p1 { grid-column: 1 / 2; }
.p2 { grid-column: 3 / 4; transform: translateY(30px); }
.p3 { grid-column: 2 / 3; transform: translateY(-10px); }
.p4 { grid-column: 4 / 5; transform: translateY(20px); }
.p5 { grid-column: 1 / 3; transform: translateY(10px); }
.p6 { grid-column: 3 / 5; transform: translateY(-5px); }
</style>
