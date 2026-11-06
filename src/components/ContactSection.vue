<script setup>
import { ref, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const email = 'Erick.Labrada233380@gmail.com'
const copied = ref(false)
let copyTimeout

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email)
  } catch {
    window.location.href = `mailto:${email}`
    return
  }
  copied.value = true

  window.clearTimeout(copyTimeout)
  copyTimeout = window.setTimeout(() => {
    copied.value = false
  }, 1800)
}
onUnmounted(() => window.clearTimeout(copyTimeout))
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-card">
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
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  position: relative;
  margin-top: 100px;
  padding: 72px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  scroll-margin-top: 32px;
}
.contact-card {
  position: relative;
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
}
.contact-card h2 {
  font-size: clamp(3rem, 6vw, 5.3rem);
  line-height: 1.03;
  margin: 0 auto 24px;
  max-width: 16ch;
}
.contact-description {
  color: var(--muted);
  max-width: 60ch;
  margin: 0 auto 32px;
  line-height: 1.8;
}
.contact-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.social-links {
  display: flex;
  gap: 32px;
}
.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 20px;
  padding: 10px 0;
  color: var(--paper);
  font: inherit;
  font-size: 0.9rem;
  cursor: pointer;
  background: transparent;
  border: 0;
  text-decoration: underline;
  text-underline-offset: 7px;
  text-decoration-color: var(--line);
  transition: color 0.2s;
}
.contact-link:hover {
  color: var(--accent);
}
.email-link {
  max-width: 100%;
  border: 1px solid var(--line);
  padding: 16px 22px;
  border-radius: 4px;
  text-decoration: none;
}
.email-text {
  overflow-wrap: anywhere;
  min-width: 0;
  text-align: left;
}
.copy-icon-wrap {
  display: flex;
  color: var(--accent);
  flex-shrink: 0;
}
.copy-icon {
  width: 18px;
  height: 18px;
}
@media (max-width: 760px) {
  .contact-section {
    margin-top: 64px;
    padding-block: 56px;
  }
  .contact-description {
    font-size: 0.95rem;
  }
  .email-link {
    font-size: 0.8rem;
    padding-inline: 16px;
    gap: 12px;
  }
}
</style>
