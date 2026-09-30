<template>
  <section class="route-cue">
    <p class="cue-label">
      CHANNELS
    </p>

    <div class="cue-row">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="cue-link"
      >
        {{ link.label }}
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const links = [
  { to: '/', label: '[ HOME ]' },
  { to: '/projects', label: '[ PROJECTS ]' },
  { to: '/skills', label: '[ SKILLS ]' },
  { to: '/contact', label: '[ CONTACT ]' }
]
</script>

<style scoped>
.route-cue {
  margin-top: 56px;
  padding: 18px 0;
  border-top: 2px solid rgba(0, 255, 255, 0.35);
  border-bottom: 2px solid rgba(0, 255, 102, 0.28);
  font-family: 'VT323', monospace, sans-serif;
}

.cue-label {
  margin: 0 0 12px;
  color: var(--crt-green);
  font-size: 1.2rem;
  letter-spacing: 2px;
  text-shadow: 0 0 8px rgba(0, 255, 102, 0.72);
}

.cue-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.cue-link {
  color: var(--crt-cyan);
  font-size: 1.35rem;
  text-decoration: none;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.72);
  transition: all 0.1s step-end;
}

.cue-link:hover,
.cue-link.router-link-active {
  color: #000;
  background: var(--crt-cyan);
  box-shadow: 0 0 14px rgba(0, 255, 255, 0.75);
  text-shadow: none;
}
</style>
