```vue id="gjlwm8"
<template>
  <section class="center-section">
    <div class="loader"></div>

    <p>
      Loading experiment...
    </p>
  </section>
</template>

<style scoped>
.center-section {
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 18px;

  padding: 80px 0;
}

.loader {
  width: 42px;
  height: 42px;

  border-radius: 999px;

  border: 3px solid
    rgba(255,255,255,0.08);

  border-top-color: #f3f4f6;

  animation:
    spin 1s linear infinite;
}

p {
  color: #b5bfd1;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
```
