<template>
  <section
    v-if="answers.length"
    class="answers-section"
  >
    <div
      v-for="a in answers"
      :key="a.question_id"
      class="answer-block"
    >
      <p class="question-text">
        {{ a.question_text }}
      </p>

      <div class="answer-text">
        {{
          a.answer_text ||
          a.selected_option_value
        }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  answers: any[]
}>()
</script>

<style scoped>
.answers-section {
  display: flex;

  flex-direction: column;

  gap: 64px;
}

.answer-block {
  display: flex;

  flex-direction: column;

  gap: 20px;
}

.question-text {
  color: #8b93a7;

  font-size: 0.8rem;

  text-transform: uppercase;

  letter-spacing: 0.14em;

  line-height: 1.8;
}

.answer-text {
  font-size: 1.15rem;

  line-height: 2;

  color: #f3f4f6;

  white-space: pre-wrap;
}
</style>