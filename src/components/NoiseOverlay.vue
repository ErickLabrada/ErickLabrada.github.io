<template>
  <div class="noise-overlay">
    <div class="noise-shaker">
      <img
        v-for="n in 40"
        :key="n"
        :src="n % 2 === 1 ? noise1 : noise2"
        class="noise-brick"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import noise1 from '@/assets/noise/noise1.png'
import noise2 from '@/assets/noise/noise2.png'

// Generates an alternating stack of Noise 1 and Noise 2 down the layout
</script>

<style scoped>
.noise-overlay {
  position: absolute;
  /* -50px prevents any white edges from showing during the shake */
  inset: -50px;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
}

.noise-shaker {
  width: 100%;
  display: flex;
  flex-direction: column;
  opacity: 0.15;

  /* Your original 1s shaking animation sequence */
  animation: noiseJitter 1s infinite;
}

.noise-brick {
  width: 100%;
  /* Forces the image to stretch horizontally and calculate its vertical
     height naturally so the next pattern starts exactly where this one ends */
  height: auto;
  display: block;
}

/* Converted background-position to transform translate so it moves the
   entire concatenated stack seamlessly without splitting the images apart */
@keyframes noiseJitter {
  0% { transform: translate(0, 0); }
  25% { transform: translate(-1px, 1px); }
  50% { transform: translate(1px, -1px); }
  75% { transform: translate(-1px, -1px); }
  100% { transform: translate(0, 0); }
}
</style>
