
<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="footer-note">
    <p>
      {{ t('homeFooter.quote') }}
    </p>

    <span>
      — Albert Camus
    </span>
  </footer>
</template>

<style scoped>
.footer-note {
  margin-top: 80px;

  text-align: center;

  opacity: 0.5;
}

.footer-note p {
  font-style: italic;

  margin-bottom: 8px;
}

.footer-note span {
  font-size: 0.9rem;

  color: #9ca3af;
}
</style>
