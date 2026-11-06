<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const roles = [
  {
    key: 'mediaaerea',
    company: 'MEDIAÉREA',
    url: 'https://www.linkedin.com/company/67125113/',
    logo: '/companies/mediaaerea.jpg',
    start: '2025-07',
    end: null,
  },
  {
    key: 'gila',
    company: 'Gila Software',
    url: 'https://www.linkedin.com/company/33191171/',
    logo: '/companies/gila-software.jpg',
    start: '2025-02',
    end: '2025-05',
  },
]
</script>

<template>
  <section class="experience-section" aria-labelledby="experience-title">
    <h2 id="experience-title">{{ t('experience.title') }}</h2>

    <ol class="timeline">
      <li
        v-for="role in roles"
        :key="role.key"
        class="timeline-entry"
        :class="{ current: !role.end }"
      >
        <div class="role-heading">
          <div>
            <h3>{{ t(`experience.roles.${role.key}.title`) }}</h3>
            <p class="company">
              <a :href="role.url" target="_blank" rel="noopener noreferrer">{{ role.company }}</a>
              <span> · {{ t(`experience.roles.${role.key}.type`) }}</span>
            </p>
          </div>
          <img :src="role.logo" alt="" width="44" height="44" loading="lazy" />
        </div>

        <p class="dates">
          <time :datetime="role.start">{{ t(`experience.roles.${role.key}.start`) }}</time>
          <span aria-hidden="true"> – </span>
          <time v-if="role.end" :datetime="role.end">{{
            t(`experience.roles.${role.key}.end`)
          }}</time>
          <span v-else>{{ t(`experience.roles.${role.key}.end`) }}</span>
        </p>
        <p class="location">{{ t(`experience.roles.${role.key}.location`) }}</p>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.experience-section {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 64px;
  margin-top: 112px;
  padding-top: 32px;
  border-top: 1px solid var(--line);
}
h2 {
  margin: 0;
  font-size: clamp(2.3rem, 4vw, 3.25rem);
}
.timeline {
  list-style: none;
  padding: 0;
  margin: 4px 0 0 5px;
}
.timeline-entry {
  position: relative;
  padding: 0 0 42px 30px;
  border-left: 1px solid var(--line);
}
.timeline-entry:last-child {
  padding-bottom: 0;
  border-left-color: transparent;
}
.timeline-entry::before {
  content: '';
  position: absolute;
  left: -5px;
  top: 8px;
  width: 9px;
  height: 9px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  background: var(--bg);
}
.timeline-entry.current::before {
  background: var(--accent);
}
.role-heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}
h3 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.45;
}
.role-heading img {
  flex-shrink: 0;
  border-radius: 4px;
  object-fit: contain;
}
.company {
  margin: 8px 0 0;
  font-size: 0.9rem;
  color: var(--muted);
}
.company a {
  color: var(--paper);
  text-decoration-color: var(--line);
}
.company a:hover {
  color: var(--accent);
}
.dates {
  margin: 18px 0 4px;
  color: var(--accent);
  font-size: 0.85rem;
  font-variant-numeric: tabular-nums;
}
.location {
  margin: 0;
  color: var(--muted);
  font-size: 0.85rem;
  line-height: 1.7;
}
@media (max-width: 760px) {
  .experience-section {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-top: 72px;
  }
  .timeline-entry {
    padding-left: 22px;
  }
  h3 {
    font-size: 1.05rem;
  }
  .role-heading {
    gap: 14px;
  }
}
</style>
