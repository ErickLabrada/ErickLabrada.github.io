<template>
  <div class="question-block">
    <label class="question-title">
      {{ question.question_text }}

      <span v-if="question.is_required" class="required">
        *
      </span>
    </label>

    <p
      v-if="question.question_description"
      class="question-description"
    >
      {{ question.question_description }}
    </p>

    <!-- TEXTAREA -->
    <ExperimentTextarea
      v-if="question.question_type === 'textarea'"
      :model-value="modelValue"
      :placeholder="question.placeholder"
      @update:model-value="emitUpdate"
    />

    <!-- SINGLE CHOICE -->
    <ExperimentSingleChoice
      v-else-if="question.question_type === 'single_choice'"
      :model-value="modelValue"
      :options="question.options || []"
      @update:model-value="emitUpdate"
    />

    <!-- ERROR -->
    <p v-if="error" class="error">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import ExperimentTextarea from './ExperimentTextarea.vue'
import ExperimentSingleChoice from './ExperimentSingleChoice.vue'

import type { QuestionDto } from '@/types/forms'

defineProps<{
  question: QuestionDto
  modelValue: any
  error?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: any]
}>()

const emitUpdate = (value: any) => {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.question-block {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.question-title {
  font-size: 1.35rem;
  line-height: 1.5;
  font-weight: 500;
}

.question-description {
  color: #8b93a7;
  line-height: 1.8;
}

.required {
  color: #f87171;
}

.error {
  color: #f87171;
  font-size: 0.9rem;
}
</style>