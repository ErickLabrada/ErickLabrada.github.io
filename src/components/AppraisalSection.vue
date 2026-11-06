<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import certificateUrl from '@/assets/certificates/MA-EALR.pdf'

const appraisalUrl = 'https://pars.cmmiinstitute.com/appraisals/83526'
const { t, tm } = useI18n()
</script>

<template>
  <section class="appraisal-section">
    <div class="appraisal-copy">
      <h2>
        {{ t('appraisal.title') }}
      </h2>

      <p>
        {{ t('appraisal.description') }}
      </p>

      <div class="appraisal-actions">
        <a :href="appraisalUrl" target="_blank" rel="noopener noreferrer">
          {{ t('appraisal.links.record') }}
        </a>

        <a :href="certificateUrl" target="_blank" rel="noopener noreferrer">
          {{ t('appraisal.links.certificate') }}
        </a>
      </div>
    </div>

    <div class="appraisal-details">
      <div v-for="item in tm('appraisal.items')" :key="item" class="detail-item">
        {{ item }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.appraisal-section {
  margin-top: 96px;
  padding: 36px 0;
  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 80px;
  border-top: 1px solid var(--line);
}
.appraisal-copy h2 {
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  margin: 0 0 20px;
}
.appraisal-copy > p {
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.8;
  max-width: 65ch;
}
.appraisal-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 24px;
  margin-top: 24px;
}
.appraisal-actions a {
  font-size: 0.85rem;
  color: var(--paper);
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
  text-decoration-color: var(--accent);
  padding-block: 10px;
}
.appraisal-actions a:hover {
  color: var(--accent);
}
.appraisal-details {
  align-self: center;
}
.detail-item {
  padding: 18px 0;
  border-bottom: 1px solid var(--line);
  font-size: 0.9rem;
  color: var(--muted);
}
@media (max-width: 760px) {
  .appraisal-section {
    margin-top: 64px;
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
