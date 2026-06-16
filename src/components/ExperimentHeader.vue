<template>
  <section class="form-header">
    <p class="step-label">
      Section {{ currentStep + 1 }}
      /
      {{ totalSteps }}
    </p>

    <h1>
      {{ title }}
    </h1>

    <p
      v-if="description"
      class="form-description"
    >
      {{ description }}
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  currentStep: number
  totalSteps: number

  title: string
  description?: string
}>()
</script>

<style scoped>
.form-header {
  margin-bottom: 40px;
}

.step-label {
  text-transform: uppercase;

  letter-spacing: 0.15em;

  color: #8b93a7;

  font-size: 0.8rem;
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);

  line-height: 1.05;

  margin: 12px 0 20px;
}

.form-description {
  line-height: 1.9;

  color: #b5bfd1;
}
</style>