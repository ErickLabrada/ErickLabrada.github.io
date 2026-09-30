<script setup lang="ts">
import { useI18n } from "vue-i18n";

import certificateUrl from "@/assets/certificates/MA-EALR.pdf";

const appraisalUrl = "https://pars.cmmiinstitute.com/appraisals/83526";
const { t, tm } = useI18n();
</script>

<template>
  <section class="appraisal-section">
    <div class="appraisal-copy">
      <p class="section-label">
        {{ t("appraisal.label") }}
      </p>

      <h2>
        {{ t("appraisal.title") }}
      </h2>

      <p>
        {{ t("appraisal.description") }}
      </p>

      <div class="appraisal-actions">
        <a
          :href="appraisalUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t("appraisal.links.record") }}
        </a>

        <a
          :href="certificateUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ t("appraisal.links.certificate") }}
        </a>
      </div>
    </div>

    <div class="appraisal-details">
      <div
        v-for="item in tm('appraisal.items')"
        :key="item"
        class="detail-item"
      >
        {{ item }}
      </div>
    </div>
  </section>
</template>

<style scoped>
.appraisal-section {
  margin-top: 80px;
  padding: 28px 0;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 420px);
  gap: 40px;
  align-items: center;

  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.section-label {
  margin-bottom: 12px;

  color: #7f8aa3;
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.appraisal-copy h2 {
  margin: 0;

  font-size: clamp(2rem, 4vw, 3rem);
}

.appraisal-copy > p:last-of-type {
  max-width: 680px;
  margin-top: 18px;

  color: #b5bfd1;
  line-height: 1.8;
}

.appraisal-actions {
  margin-top: 24px;

  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.appraisal-actions a {
  padding: 10px 14px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 8px;

  color: #f3f4f6;
  font-size: 0.9rem;
  text-decoration: none;

  transition:
    background 0.2s ease,
    border-color 0.2s ease;
}

.appraisal-actions a:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.28);
}

.appraisal-details {
  display: grid;
  gap: 12px;
}

.detail-item {
  padding: 14px 16px;

  background: rgba(18, 21, 30, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;

  color: #d7dbe6;
  line-height: 1.6;
}

@media (max-width: 820px) {
  .appraisal-section {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
