<template>
  <div class="submission-page">
    <NoiseOverlay />

    <main class="submission-container">
      <div class="submission-card">
        <!-- INTRO -->
        <ExperimentIntro
          v-if="!started"
          @start="started = true"
        />

        <!-- LOADING -->
        <ExperimentLoader v-else-if="loading" />

        <!-- ERROR -->
        <section v-else-if="error" class="error-section">
          <p class="error-text">
            {{ error }}
          </p>

          <button class="retry-button" @click="loadForms">
            Retry
          </button>
        </section>

        <!-- FORM FLOW -->
        <template v-else-if="currentForm">
          <!-- HEADER -->
          <ExperimentHeader
            :current-step="currentStep"
            :total-steps="forms.length"
            :title="currentForm.title"
            :description="currentForm.description"
          />

          <!-- PROGRESS -->
          <ExperimentProgress :progress="progressPercentage" />

          <!-- QUESTIONS -->
          <section class="questions-section">
            <ExperimentQuestion
              v-for="question in currentForm.questions || []"
              :key="question.id"
              :question="question"
              v-model="answers[question.id]"
              :error="errors[question.id]"
            />
          </section>

          <!-- NAVIGATION -->
          <ExperimentNavigation
            :current-step="currentStep"
            :total-steps="forms.length"
            :submitting="submitting"
            @back="previousStep"
            @next="nextStep"
            @submit="submitForm"
          />
        </template>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import NoiseOverlay from '@/components/NoiseOverlay.vue'

import ExperimentIntro from '@/components/ExperimentIntro.vue'
import ExperimentLoader from '@/components/ExperimentLoader.vue'
import ExperimentHeader from '@/components/ExperimentHeader.vue'
import ExperimentProgress from '@/components/ExperimentProgress.vue'
import ExperimentQuestion from '@/components/ExperimentQuestion.vue'
import ExperimentNavigation from '@/components/ExperimentNavigation.vue'

import { useExperiment } from '@/composables/useExperiment'

const {
  started,
  loading,
  submitting,
  error,

  forms,
  currentForm,
  currentStep,

  answers,
  errors,

  progressPercentage,

  loadForms,
  nextStep,
  previousStep,
  submitForm
} = useExperiment()
</script>

<style scoped>
.submission-page {
  min-height: 100vh;
  position: relative;
  background: #0c0e14;
  color: #f3f4f6;
}

.submission-container {
  position: relative;
  z-index: 1;
  width: min(860px, 92%);
  margin: 0 auto;
  padding: 80px 0;
}

.submission-card {
  backdrop-filter: blur(18px);
  background: rgba(18, 21, 30, 0.72);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px;
  padding: 48px;
}

.questions-section {
  display: flex;
  flex-direction: column;
  gap: 56px;
}

.error-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 80px 0;
}

.error-text {
  color: #f87171;
}

.retry-button {
  border: none;
  border-radius: 14px;
  padding: 12px 20px;
  cursor: pointer;
  background: rgba(255,255,255,0.08);
  color: #f3f4f6;
}

.retry-button:hover {
  transform: translateY(-2px);
  background: rgba(255,255,255,0.12);
}
</style>