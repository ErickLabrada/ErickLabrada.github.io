<template>
  <header class="site-header">
    <div class="header-inner">
      <router-link to="/" class="header-label"> Erick's Polaroids </router-link>

      <div class="header-actions">
        <router-link class="header-link archive-link" to="/#projects">{{
          t('projects.header.label')
        }}</router-link>
        <router-link class="header-link contact-nav" to="/#contact">{{
          t('contact.contact')
        }}</router-link>
        <button
          class="language-switch"
          :class="{ spanish: locale === 'es' }"
          type="button"
          :aria-label="locale === 'en' ? 'Cambiar a español' : 'Switch to English'"
          @click="toggleLanguage"
        >
          <span class="switch-option"> ENG </span>

          <span class="switch-option"> ESP </span>

          <span class="switch-indicator" />
        </button>

        <router-link to="/" class="header-link">
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
  locale.value = locale.value === 'en' ? 'es' : 'en'

  localStorage.setItem('locale', locale.value)
}
</script>

<style scoped>
.site-header {
  position: relative;
  z-index: 2;
  width: var(--page-width);
  margin: 0 auto;
  padding: 27px 0;
  border-bottom: 1px solid var(--line);
}
.header-inner,
.header-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}
.header-label {
  font-family: 'Newsreader', Georgia, serif;
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--paper);
  letter-spacing: -0.025em;
}
.header-link {
  display: inline-flex;
  align-items: center;
  min-height: 44px;
  color: var(--muted);
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s;
}
.header-link:hover {
  color: var(--paper);
}
.language-switch {
  position: relative;
  display: flex;
  align-items: center;
  width: 88px;
  height: 44px;
  padding: 4px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: transparent;
  font: inherit;
  color: var(--muted);
  font-size: 0.67rem;
  cursor: pointer;
}
.switch-option {
  position: relative;
  z-index: 2;
  width: 50%;
  text-align: center;
}
.switch-indicator {
  position: absolute;
  top: 5px;
  left: 4px;
  width: 38px;
  height: 32px;
  border-radius: 2px;
  background: var(--paper);
  transition: transform 0.25s;
}
.language-switch:not(.spanish) .switch-option:first-child,
.language-switch.spanish .switch-option:nth-child(2) {
  color: var(--ink);
}
.language-switch.spanish .switch-indicator {
  transform: translateX(40px);
}
@media (max-width: 600px) {
  .site-header {
    padding: 18px 0;
  }
  .header-label {
    font-size: 1.35rem;
  }
  .header-actions {
    gap: 12px;
  }
  .archive-link,
  .contact-nav {
    display: none;
  }
  .header-actions > .header-link {
    display: none;
  }
}
</style>
