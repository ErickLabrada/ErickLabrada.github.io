<template>
  <div class="option-list">
    <button
      v-for="option in options"
      :key="option.id"
      type="button"
      class="option-button"
      :class="{
        active:
          modelValue === option.value
      }"
      @click="
        emit(
          'update:modelValue',
          option.value
        )
      "
    >
      <div class="option-row">
        <span class="option-name">
          {{ option.display_name }}
        </span>

        <span
          v-if="
            option.hover_description
          "
          class="option-info"
          :title="
            option.hover_description
          "
        >
          ?
        </span>
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { QuestionOptionDto } from '@/types/forms'

defineProps<{
  modelValue: string
  options: QuestionOptionDto[]
}>()

const emit =
  defineEmits<{
    'update:modelValue': [value: string]
  }>()
</script>

<style scoped>
.option-list {
  display: flex;

  flex-direction: column;

  gap: 14px;
}

.option-button {
  width: 100%;

  border: 1px solid
    rgba(255,255,255,0.08);

  background:
    rgba(255,255,255,0.03);

  border-radius: 18px;

  padding: 20px;

  text-align: left;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.option-button:hover {
  background:
    rgba(255,255,255,0.05);

  border-color:
    rgba(255,255,255,0.18);

  transform:
    translateY(-1px);
}

.option-button.active {
  border-color:
    rgba(255,255,255,0.34);

  background:
    rgba(255,255,255,0.08);
}

.option-row {
  display: flex;

  align-items: center;

  justify-content:
    space-between;

  gap: 16px;
}

.option-name {
  font-size: 1rem;

  line-height: 1.5;

  color: #f3f4f6;
}

.option-info {
  flex-shrink: 0;

  width: 22px;

  height: 22px;

  border-radius: 999px;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 0.75rem;

  font-weight: 600;

  cursor: help;

  color: #9ca3af;

  background:
    rgba(255,255,255,0.06);

  border: 1px solid
    rgba(255,255,255,0.08);

  transition: 0.2s ease;
}

.option-info:hover {
  color: #f3f4f6;

  background:
    rgba(255,255,255,0.12);
}
</style>
