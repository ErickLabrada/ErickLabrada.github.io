<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const email = 'Erick.Labrada233380@gmail.com'
const copied = ref(false)
let copyTimeout

const copyEmail = async () => {
  await navigator.clipboard.writeText(email)
  copied.value = true

  window.clearTimeout(copyTimeout)
  copyTimeout = window.setTimeout(() => {
    copied.value = false
  }, 1800)
}
</script>

<template>
  <section class="contact-section">
    <sl-card class="contact-card">
      <p class="section-label">
        {{ t('contact.contact') }}
      </p>

      <h2>
        {{ t('contact.title') }}
      </h2>

      <p class="contact-description">
        {{ t('contact.contact-description') }}
      </p>

      <div class="contact-actions">
        <div class="social-links">
          <a
            href="https://github.com/ErickLabrada"
            target="_blank"
            rel="noopener"
            class="contact-link"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ericklabrada/"
            target="_blank"
            rel="noopener"
            class="contact-link"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          class="contact-link email-link"
          :aria-label="copied ? 'Email copied' : 'Copy email address'"
          @click="copyEmail"
        >
          <span class="email-text">
            {{ email }}
          </span>

          <span class="copy-icon-wrap" aria-live="polite">
            <svg
              v-if="copied"
              class="copy-icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m5 12 4 4L19 6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              v-else
              class="copy-icon"
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 8V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2M6 8h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </sl-card>
  </section>
</template>

<style scoped>
.contact-section {
  width: 100%;
  margin-top: 80px;
  margin-bottom: 80px;
}

.contact-card {
  display: block;
  width: 100%;
}

.contact-card::part(base) {
  background: rgba(18, 21, 30, 0.72);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 48px 32px;
  text-align: center;
}

.section-label {
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #8b93a7;
  font-size: 0.8rem;
  margin-bottom: 12px;
}

.contact-card h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 20px;
}

.contact-description {
  color: #c7cedb;
  max-width: 700px;
  margin: 0 auto 32px;
  line-height: 1.8;
}

.contact-actions {
  display: grid;
  justify-items: center;
  gap: 14px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  text-decoration: none;
  color: #f3f4f6;
  border: 1px solid rgba(255,255,255,0.12);
  padding: 12px 24px;
  border-radius: 12px;
  transition: 0.2s ease;
  background: rgba(255, 255, 255, 0.02);
  font: inherit;
  cursor: pointer;
}

.email-link {
  position: relative;
  width: min(100%, 430px);
  gap: 14px;
  justify-content: center;
  padding-inline: 52px;
}

.email-text {
  min-width: 0;
  overflow-wrap: anywhere;
  text-align: center;
}

.copy-icon-wrap {
  position: absolute;
  right: 18px;
  display: inline-flex;
  color: #9ba4b8;
}

.copy-icon {
  width: 18px;
  height: 18px;
}

.contact-link:hover,
.contact-link:focus-visible {
  transform: translateY(-2px);
  border-color: rgba(255,255,255,0.25);
}

@media (max-width: 768px) {
  .contact-card::part(base) {
    padding: 36px 20px;
  }

  .contact-link,
  .social-links {
    width: 100%;
  }

  .social-links {
    display: grid;
  }

  .email-link {
    padding-inline: 42px;
  }

  .copy-icon-wrap {
    right: 14px;
  }
}
</style>
