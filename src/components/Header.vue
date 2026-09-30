<template>
  <header class="site-header">
    <div class="header-inner">
      <p class="header-label">
        Erick's Polaroids
      </p>

      <div class="header-actions">
        <button
          class="language-switch"
          :class="{ spanish: locale === 'es' }"
          type="button"
          :aria-label="locale === 'en'
            ? 'Cambiar a español'
            : 'Switch to English'"
          @click="toggleLanguage"
        >
          <span class="switch-option">
            ENG
          </span>

          <span class="switch-option">
            ESP
          </span>

          <span class="switch-indicator" />
        </button>

        <router-link
          to="/"
          class="header-link"
        >
          {{ t('header.home') }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'en'
    ? 'es'
    : 'en'

  localStorage.setItem('locale', locale.value)
}
</script>

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

.header-actions {
  display: flex;

  align-items: center;

  gap: 20px;
}

/* Language switch */

.language-switch {
  position: relative;

  display: flex;

  align-items: center;

  width: 76px;

  height: 30px;

  padding: 3px;

  border: 1px solid rgba(243, 244, 246, 0.2);

  border-radius: 999px;

  background: rgba(243, 244, 246, 0.06);

  color: #f3f4f6;

  font-family: inherit;

  font-size: 0.65rem;

  letter-spacing: 0.08em;

  cursor: pointer;

  overflow: hidden;

  transition: border-color 0.2s ease;
}

.language-switch:hover {
  border-color: rgba(243, 244, 246, 0.4);
}

.switch-option {
  position: relative;

  z-index: 2;

  display: flex;

  align-items: center;

  justify-content: center;

  width: 50%;

  height: 100%;

  transition: color 0.2s ease;
}

.switch-indicator {
  position: absolute;

  z-index: 1;

  top: 3px;

  left: 3px;

  width: 34px;

  height: 22px;

  border-radius: 999px;

  background: #f3f4f6;

  transition: transform 0.25s ease;
}

.language-switch:not(.spanish) .switch-option:first-child {
  color: #111827;
}

.language-switch.spanish .switch-option:nth-child(2) {
  color: #111827;
}

.language-switch.spanish .switch-indicator {
  transform: translateX(34px);
}

/* Home */

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
