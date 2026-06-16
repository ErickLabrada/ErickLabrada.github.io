<template>
  <header class="site-header">
    <div class="header-inner">
      <p class="header-label">
        Erick's Polaroids
      </p>

      <router-link
        to="/"
        class="header-link"
      >
        Home
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.site-header {
  position: relative;

  z-index: 2;

  width: min(1100px, 92%);

  margin: 0 auto;

  padding: 28px 0;
}

.header-inner {
  display: flex;

  justify-content: space-between;

  align-items: center;
}

.header-label {
  text-transform: uppercase;

  letter-spacing: 0.18em;

  font-size: 0.78rem;

  color: #8b93a7;
}

.header-link {
  color: #f3f4f6;

  text-decoration: none;

  font-size: 0.95rem;

  opacity: 0.8;

  transition: 0.2s ease;
}

.header-link:hover {
  opacity: 1;
}
</style>
