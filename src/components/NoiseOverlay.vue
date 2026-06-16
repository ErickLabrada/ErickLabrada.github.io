<template>
  <div
    class="noise-overlay"
    :style="{ backgroundImage: `url(${selectedNoise})` }"
  ></div>
</template>

<script setup>
import noise1 from '@/assets/noise/noise1.png'
import noise2 from '@/assets/noise/noise2.png'

const noises = [noise1, noise2]
const selectedNoise = noises[Math.floor(Math.random() * noises.length)]
</script>

<style scoped>
.noise-overlay {
  position: absolute;
  inset: -50px;
  z-index: 0;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.15;
  pointer-events: none;
  animation: noiseShift 1s infinite;
}

@keyframes noiseShift {
  0% { background-position: 0 0; }
  25% { background-position: -1px 1px; }
  50% { background-position: 1px -1px; }
  75% { background-position: -1px -1px; }
  100% { background-position: 0 0; }
}
</style>