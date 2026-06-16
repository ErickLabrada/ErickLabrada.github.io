<template>
  <div class="me-page">
    <NoiseOverlay />

    <Header />

    <main class="me-content">
      <sl-card class="transparent-maincard me-panel">
        <h2>Manage your site</h2>
        <p>Select one of the configuration actions below. These are menu entries only; no functionality is implemented yet.</p>

        <div class="action-grid">
          <sl-card class="transparent-sidecard action-card">
            <h3>Make a post</h3>
            <p>Create a new post for the site.</p>
            <sl-button variant="primary" disabled>Choose</sl-button>
          </sl-card>

          <sl-card class="transparent-sidecard action-card">
            <h3>Create guest account</h3>
            <p>Generate a temporary account for site visitors.</p>
            <sl-button variant="primary" disabled>Choose</sl-button>
          </sl-card>

          <sl-card class="transparent-sidecard action-card">
            <h3>Update site data</h3>
            <p>Edit site settings, metadata, and published content lists.</p>
            <sl-button variant="primary" disabled>Choose</sl-button>
          </sl-card>
        </div>
      </sl-card>
    </main>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import NoiseOverlay from '@/components/NoiseOverlay.vue'
</script>

<style scoped>
.me-page {
  min-height: 100vh;
  position: relative;
  background-color: #0c0e14;
  overflow: hidden;
}

.me-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
}

.me-panel {
  width: 100%;
  max-width: 960px;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.action-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 220px;
}

.action-card h3 {
  margin-top: 0;
}

.action-card p {
  flex: 1;
  margin: 12px 0;
}

@media (max-width: 900px) {
  .action-grid {
    grid-template-columns: 1fr;
  }
}
</style>