<script setup lang="ts">
defineProps<{
  submitting: boolean
}>()

defineEmits<{
  (
    e: 'submit',
    payload: any
  ): void
}>()

const emotions = [
  'seen',
  'reduced',
  'misunderstood',
  'exposed',
  'validated',
  'defensive',
  'angry',
  'relieved',
  'sad',
  'confused',
  'neutral'
]

const model = defineModel<any>({
  default: () => ({
    primary_emotion: 'neutral',

    emotional_intensity: 5,

    felt_seen: false,

    felt_reduced: false,

    felt_misunderstood: false,

    felt_exposed: false,

    felt_validated: false,

    felt_defensive: false,

    notes: ''
  })
})
</script>

<template>
  <section class="reflection-section">

    <div class="reflection-header">

      <p class="reflection-label">
        Reflection
      </p>

      <h2>
        What surfaced while
        reading this?
      </h2>

    </div>

    <!-- emotion -->
    <div class="field-block">

      <label class="field-label">
        Primary emotion
      </label>

      <div class="emotion-grid">

        <button
          v-for="emotion in emotions"
          :key="emotion"
          type="button"
          class="emotion-button"
          :class="{
            active:
              model.primary_emotion === emotion
          }"
          @click="
            model.primary_emotion =
            emotion
          "
        >
          {{ emotion }}
        </button>

      </div>

    </div>

    <!-- intensity -->
    <div class="field-block">

      <div class="intensity-row">

        <label class="field-label">
          Emotional intensity
        </label>

        <span class="intensity-value">
          {{ model.emotional_intensity }}/10
        </span>

      </div>

      <input
        type="range"
        min="0"
        max="10"
        v-model.number="
          model.emotional_intensity
        "
        class="reflection-range"
      />

    </div>

    <!-- states -->
    <div class="field-block">

      <label class="field-label">
        Additional reactions
      </label>

      <div class="reflection-grid">

        <button
          type="button"
          class="state-button"
          :class="{ active: model.felt_seen }"
          @click="
            model.felt_seen =
            !model.felt_seen
          "
        >
          Felt seen
        </button>

        <button
          type="button"
          class="state-button"
          :class="{
            active:
              model.felt_validated
          }"
          @click="
            model.felt_validated =
            !model.felt_validated
          "
        >
          Felt validated
        </button>

        <button
          type="button"
          class="state-button"
          :class="{
            active:
              model.felt_misunderstood
          }"
          @click="
            model.felt_misunderstood =
            !model.felt_misunderstood
          "
        >
          Felt misunderstood
        </button>

        <button
          type="button"
          class="state-button"
          :class="{
            active:
              model.felt_reduced
          }"
          @click="
            model.felt_reduced =
            !model.felt_reduced
          "
        >
          Felt reduced
        </button>

        <button
          type="button"
          class="state-button"
          :class="{
            active:
              model.felt_exposed
          }"
          @click="
            model.felt_exposed =
            !model.felt_exposed
          "
        >
          Felt exposed
        </button>

        <button
          type="button"
          class="state-button"
          :class="{
            active:
              model.felt_defensive
          }"
          @click="
            model.felt_defensive =
            !model.felt_defensive
          "
        >
          Felt defensive
        </button>

      </div>

    </div>

    <!-- notes -->
    <div class="field-block">

      <label class="field-label">
        Notes
      </label>

      <textarea
        v-model="model.notes"
        rows="7"
        placeholder="
Write freely.
What lingered?
What felt accurate?
What felt wrong?
        "
        class="reflection-textarea"
      />

    </div>

    <button
      class="submit-button"
      :disabled="
        submitting ||
        !model.primary_emotion
      "
      @click="$emit('submit', model)"
    >
      {{
        submitting
          ? 'Saving reflection...'
          : 'Save Reflection'
      }}
    </button>

  </section>
</template>

<style scoped>
.reflection-section {
  margin-top: 96px;

  display: flex;

  flex-direction: column;

  gap: 42px;
}

.reflection-header {
  display: flex;

  flex-direction: column;

  gap: 14px;
}

.reflection-label {
  text-transform: uppercase;

  letter-spacing: 0.14em;

  font-size: 0.78rem;

  color: #8b93a7;
}

h2 {
  font-size: clamp(2rem, 5vw, 3rem);

  line-height: 1.1;
}

.field-block {
  display: flex;

  flex-direction: column;

  gap: 18px;
}

.field-label {
  color: #b5bfd1;

  font-size: 0.92rem;
}

.emotion-grid {
  display: flex;

  flex-wrap: wrap;

  gap: 12px;
}

.emotion-button,
.state-button {
  border: 1px solid
    rgba(255,255,255,0.08);

  background:
    rgba(255,255,255,0.03);

  border-radius: 18px;

  padding: 14px 18px;

  color: #b5bfd1;

  font-size: 0.92rem;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.emotion-button:hover,
.state-button:hover {
  background:
    rgba(255,255,255,0.05);

  transform:
    translateY(-1px);
}

.emotion-button.active,
.state-button.active {
  background:
    rgba(255,255,255,0.08);

  border-color:
    rgba(255,255,255,0.22);

  color: #f3f4f6;
}

.intensity-row {
  display: flex;

  justify-content:
    space-between;

  align-items: center;
}

.intensity-value {
  color: #8b93a7;

  font-size: 0.9rem;
}

.reflection-range {
  width: 100%;

  accent-color: #d1d5db;
}

.reflection-grid {
  display: grid;

  grid-template-columns:
    repeat(2, 1fr);

  gap: 14px;
}

.reflection-textarea {
  width: 100%;

  box-sizing: border-box;

  border: 1px solid
    rgba(255,255,255,0.08);

  background:
    rgba(255,255,255,0.03);

  border-radius: 20px;

  padding: 22px;

  color: #f3f4f6;

  font-size: 1rem;

  line-height: 1.9;

  font-family: inherit;

  resize: vertical;

  outline: none;

  transition:
    background 0.2s ease,
    border-color 0.2s ease;
}

.reflection-textarea:focus {
  background:
    rgba(255,255,255,0.05);

  border-color:
    rgba(255,255,255,0.18);
}

.reflection-textarea::placeholder {
  color: #6b7280;
}

.submit-button {
  border: none;

  background: #f3f4f6;

  color: #0c0e14;

  padding: 16px 28px;

  border-radius: 16px;

  font-size: 1rem;

  cursor: pointer;

  transition: 0.2s ease;

  font-weight: 600;
}

.submit-button:hover {
  transform: translateY(-2px);

  opacity: 0.92;
}

.submit-button:disabled {
  opacity: 0.5;

  cursor: not-allowed;
}

@media (max-width: 768px) {

  .reflection-grid {
    grid-template-columns: 1fr;
  }

  .emotion-grid {
    gap: 10px;
  }

}
</style>