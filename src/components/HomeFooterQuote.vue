<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="footer-note">
    <p>
      {{ t('homeFooter.quote') }}
    </p>

    <span> — Albert Camus </span>
  </footer>
</template>

<style scoped>
.footer-note {
  position: relative;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
}
.footer-note p {
  font-family: 'Newsreader', Georgia, serif;
  font-style: italic;
  font-size: 1.35rem;
  margin: 0;
}
.footer-note span {
  font-size: 0.8rem;
}
.footer-note::before {
  content: '';
  position: absolute;
  left: calc(50% - 17px);
  top: -12px;
  width: 34px;
  height: 34px;
  border: 1px solid var(--line);
  border-radius: 50%;
  box-shadow:
    inset 0 0 0 6px var(--bg),
    inset 0 0 0 7px var(--line),
    inset 0 0 0 12px var(--bg),
    inset 0 0 0 13px var(--line);
}
@media (max-width: 600px) {
  .footer-note::before {
    display: none;
  }
}
</style>
