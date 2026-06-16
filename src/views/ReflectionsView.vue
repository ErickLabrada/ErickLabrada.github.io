<template>
  <div class="reflection-page">
    <NoiseOverlay />

    <Header />

    <main
      ref="pageTop"
      class="reflection-container"
    >

      <!-- loading -->
      <section
        v-if="loading"
        class="center-section"
      >
        <div class="loader"></div>

        <p>
          Loading reflection queue...
        </p>
      </section>

      <!-- empty -->
      <section
        v-else-if="!currentResponse"
        class="empty-section"
      >
        <p class="empty-label">
          Reflection Queue
        </p>

        <h1>
          Nothing remains
          unreflected.
        </h1>

        <p class="empty-description">
          The archive is currently
          empty.
        </p>
      </section>

      <!-- content -->
      <template v-else>

        <!-- meta -->
        <section class="reflection-meta">

          <div>
            <p class="reflection-session-label">
              Reflection Session
            </p>

            <h1 class="reflection-session-title">
              External perception
            </h1>
          </div>

          <div class="reflection-counter">
            {{ currentIndex + 1 }}
            /
            {{ queue.length }}
          </div>

        </section>

        <!-- id -->
        <div class="response-id">
          {{ currentResponse.response_id }}
        </div>

        <!-- answers -->
        <ResponseAnswers
          :answers="
            currentResponse.answers || []
          "
        />

        <!-- reflection -->
        <ReflectionForm
          v-model="form"
          :submitting="submitting"
          @submit="submit"
        />

        <!-- message -->
        <transition name="fade">
          <div
            v-if="message"
            class="message"
            :class="messageType"
          >
            {{ message }}
          </div>
        </transition>

      </template>

    </main>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  nextTick
} from 'vue'

import { apiService } from '@/services/api'

import Header from '@/components/Header.vue'
import NoiseOverlay from '@/components/NoiseOverlay.vue'

import ResponseAnswers from '@/components/ResponseAnswers.vue'
import ReflectionForm from '@/components/ReflectionForm.vue'

const pageTop =
  ref<HTMLElement | null>(null)

const queue = ref<any[]>([])

const currentIndex = ref(0)

const loading = ref(false)

const submitting = ref(false)

const message = ref('')

const messageType = ref<
  'success' | 'error'
>('success')

const currentResponse = computed(
  () =>
    queue.value?.[
      currentIndex.value
    ] ?? null
)

const initForm = () => ({
  primary_emotion: '',

  emotional_intensity: 0,

  felt_seen: false,

  felt_reduced: false,

  felt_misunderstood: false,

  felt_exposed: false,

  felt_validated: false,

  felt_defensive: false,

  notes: ''
})

const form = ref(initForm())

const loadQueue = async () => {
  loading.value = true

  try {
    const res =
      await apiService.getUnreflectedResponses()

    queue.value = res.data || []

    currentIndex.value = 0

  } catch (e) {
    console.error(e)

    message.value =
      'Failed to load queue'

    messageType.value = 'error'

  } finally {
    loading.value = false
  }
}

const submit = async (
  payload: any
) => {
  if (!currentResponse.value)
    return

  submitting.value = true

  message.value = ''

  try {
    await apiService.upsertReflection({
      response_id:
        currentResponse.value.response_id,

      ...payload
    })

    message.value =
      'Reflection saved'

    messageType.value =
      'success'

    form.value = initForm()

    currentIndex.value++

    if (
      currentIndex.value >=
      queue.value.length
    ) {
      await loadQueue()
    }

    await nextTick()

    pageTop.value?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })

  } catch (e) {
    console.error(e)

    message.value =
      'Failed to save reflection'

    messageType.value = 'error'

  } finally {
    submitting.value = false
  }
}

onMounted(loadQueue)
</script>

<style scoped>
.reflection-page {
  min-height: 100vh;

  position: relative;

  background: #0c0e14;

  color: #f3f4f6;
}

.reflection-container {
  position: relative;

  z-index: 1;

  width: min(860px, 92%);

  margin: 0 auto;

  padding: 80px 0 120px;

  display: flex;

  flex-direction: column;

  gap: 72px;
}

.center-section {
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 18px;

  padding: 120px 0;
}

.loader {
  width: 42px;

  height: 42px;

  border-radius: 999px;

  border: 3px solid
    rgba(255,255,255,0.08);

  border-top-color: #f3f4f6;

  animation:
    spin 1s linear infinite;
}

.center-section p {
  color: #b5bfd1;
}

.empty-section {
  display: flex;

  flex-direction: column;

  gap: 20px;

  padding: 120px 0;
}

.empty-label {
  text-transform: uppercase;

  letter-spacing: 0.14em;

  font-size: 0.78rem;

  color: #8b93a7;
}

.empty-section h1 {
  font-size:
    clamp(2.5rem, 6vw, 4rem);

  line-height: 1.05;
}

.empty-description {
  color: #b5bfd1;

  line-height: 1.9;
}

.reflection-meta {
  display: flex;

  justify-content:
    space-between;

  align-items: center;

  gap: 24px;
}

.reflection-session-label {
  text-transform: uppercase;

  letter-spacing: 0.14em;

  font-size: 0.78rem;

  color: #8b93a7;

  margin-bottom: 10px;
}

.reflection-session-title {
  font-size:
    clamp(2rem, 5vw, 3.5rem);

  line-height: 1.05;
}

.reflection-counter {
  flex-shrink: 0;

  border: 1px solid
    rgba(255,255,255,0.08);

  background:
    rgba(255,255,255,0.03);

  border-radius: 999px;

  padding: 10px 16px;

  color: #b5bfd1;

  font-size: 0.85rem;
}

.response-id {
  font-family: monospace;

  font-size: 0.78rem;

  color: #6b7280;

  border-top: 1px solid
    rgba(255,255,255,0.08);

  padding-top: 24px;

  word-break: break-all;
}

.message {
  border-radius: 18px;

  padding: 18px 22px;

  line-height: 1.8;

  border: 1px solid
    rgba(255,255,255,0.08);
}

.message.success {
  background:
    rgba(255,255,255,0.03);

  color: #d1d5db;
}

.message.error {
  background:
    rgba(248,113,113,0.08);

  border-color:
    rgba(248,113,113,0.16);

  color: #fca5a5;
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .reflection-container {
    padding:
      48px 0 100px;

    gap: 56px;
  }

  .reflection-meta {
    flex-direction: column;

    align-items: flex-start;

    gap: 20px;
  }
}
</style>