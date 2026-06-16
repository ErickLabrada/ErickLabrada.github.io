<template>
  <footer class="navigation-footer">
    <button
      v-if="currentStep > 0"
      class="secondary-button"
      @click="$emit('back')"
    >
      Back
    </button>

    <div class="spacer"></div>

    <button
      v-if="
        currentStep <
        totalSteps - 1
      "
      class="primary-button"
      @click="$emit('next')"
    >
      Continue
    </button>

    <button
      v-else
      class="primary-button"
      :disabled="submitting"
      @click="$emit('submit')"
    >
      {{
        submitting
          ? 'Submitting...'
          : 'Submit Anonymously'
      }}
    </button>
  </footer>
</template>

<script setup lang="ts">
defineProps<{
  currentStep: number
  totalSteps: number
  submitting: boolean
}>()

defineEmits<{
  back: []
  next: []
  submit: []
}>()
</script>

<style scoped>
.navigation-footer {
  display: flex;

  align-items: center;

  margin-top: 64px;
}

.spacer {
  flex: 1;
}

.primary-button,
.secondary-button {
  border: none;

  border-radius: 14px;

  padding: 14px 24px;

  font-size: 0.95rem;

  cursor: pointer;

  transition: 0.2s ease;
}

.primary-button {
  background: #f3f4f6;

  color: #0c0e14;
}

.secondary-button {
  background:
    rgba(255,255,255,0.06);

  color: #f3f4f6;
}

.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-2px);
}

.primary-button:disabled {
  opacity: 0.6;

  cursor: not-allowed;
}

@media (max-width: 768px) {
  .navigation-footer {
    flex-direction: column;

    gap: 12px;
  }

  .spacer {
    display: none;
  }

  .primary-button,
  .secondary-button {
    width: 100%;
  }
}
</style>
