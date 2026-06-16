<template>
  <section class="intro-section">
    <p class="eyebrow">
      Anonymous perception experiment
    </p>

    <h1>
      Before continuing,
      please read this carefully.
    </h1>

    <p class="intro-text">
      This experiment explores
      perception, memory and identity
      through anonymous responses from
      people who have known me at
      different moments in life.
    </p>

    <p class="intro-text">
      No names, accounts or identifying
      information are collected.
    </p>

    <p class="intro-text">
      Answer honestly.

      Ambiguity is welcome.

      Contradictions are welcome too.
    </p>

    <button
      class="begin-button"
      @click="$emit('start')"
    >
      <span>Begin</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M5 12h14" />
        <path d="m13 5 7 7-7 7" />
      </svg>
    </button>
  </section>
</template>

<script setup lang="ts">
defineEmits<{
  start: []
}>()
</script>

<style scoped>
.intro-section {
  display: flex;

  flex-direction: column;

  gap: 28px;
}

.begin-button {
  position: relative;

  width: fit-content;

  display: flex;

  align-items: center;

  gap: 12px;

  padding: 14px 22px;

  border-radius: 999px;

  border: 1px solid
    rgba(255,255,255,0.08);

  background:
    rgba(255,255,255,0.04);

  color: #f3f4f6;

  font-size: 0.92rem;

  letter-spacing: 0.04em;

  cursor: pointer;

  overflow: hidden;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;
}

.begin-button::before {
  content: '';

  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      135deg,
      rgba(255,255,255,0.08),
      transparent
    );

  opacity: 0;

  transition: opacity 0.25s ease;
}

.begin-button:hover {
  transform:
    translateY(-2px);

  border-color:
    rgba(255,255,255,0.16);

  background:
    rgba(255,255,255,0.06);
}

.begin-button:hover::before {
  opacity: 1;
}

.begin-button svg {
  width: 16px;

  height: 16px;

  transition:
    transform 0.25s ease;
}

.begin-button:hover svg {
  transform:
    translateX(3px);
}

.intro-copy {
  display: flex;

  flex-direction: column;

  gap: 18px;

  line-height: 1.8;
}

.intro-copy p {
  margin: 0;
}

.start-button {
  margin-top: 12px;
}
</style>
