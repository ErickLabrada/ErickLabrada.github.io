```vue id="4t6xmo"
<template>
  <div class="progress-wrapper">
    <div
      class="progress-bar"
      :style="{
        width: `${progress}%`
      }"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  progress: number
}>()
</script>

<style scoped>
.progress-wrapper {
  width: 100%;

  height: 6px;

  background:
    rgba(255,255,255,0.08);

  border-radius: 999px;

  overflow: hidden;

  margin-bottom: 48px;
}

.progress-bar {
  height: 100%;

  background: #f3f4f6;

  transition: width 0.4s ease;
}
</style>
```
