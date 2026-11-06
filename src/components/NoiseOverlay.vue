<template><div class="noise-overlay" aria-hidden="true"></div></template>
<style scoped>
.noise-overlay {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image: url('@/assets/noise/noise1.png');
  background-size: 1100px auto;
  opacity: 0.025;
}
</style>
