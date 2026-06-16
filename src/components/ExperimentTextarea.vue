<template>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    class="reflection-textarea"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string
  placeholder?: string
}>()

const emit =
  defineEmits<{
    'update:modelValue': [value: string]
  }>()

const handleInput = (
  event: Event
) => {
  const target =
    event.target as HTMLTextAreaElement

  emit(
    'update:modelValue',
    target.value
  )
}
</script>

<style scoped>
.reflection-textarea {
  width: 100%;

  box-sizing: border-box;

  min-height: 220px;

  resize: vertical;

  border: 1px solid
    rgba(255,255,255,0.08);

  background:
    rgba(255,255,255,0.03);

  border-radius: 18px;

  padding: 22px;

  color: #f3f4f6;

  font-size: 1rem;

  line-height: 1.9;

  font-family: inherit;

  outline: none;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.reflection-textarea:focus {
  border-color:
    rgba(255,255,255,0.22);

  background:
    rgba(255,255,255,0.05);

  transform:
    translateY(-1px);
}

.reflection-textarea::placeholder {
  color: #6b7280;
}
</style>
