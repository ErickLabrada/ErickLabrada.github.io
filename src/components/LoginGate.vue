<template>
  <section class="gate">
    <div class="gate-header">
      <p class="label">SYSTEM ENTRY NODE</p>

      <h1>
        You are being observed
      </h1>

      <p class="sub">
        This interface records no identity.
        Only responses.
      </p>
    </div>

    <div class="gate-body">
      <LoginForm />
    </div>

    <div class="gate-footer">
      <span>anonymous session</span>
      <span>no tracking</span>
      <span>no persistence</span>
    </div>
  </section>
</template>

<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue'
</script>

<style scoped>
.gate {
  width: min(720px, 92%);

  background: rgba(18, 21, 30, 0.55);
  backdrop-filter: blur(22px);

  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 26px;

  padding: 42px;

  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* HEADER */
.gate-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  font-size: 0.72rem;
  letter-spacing: 0.25em;
  color: #8b93a7;
}

.gate-header h1 {
  font-size: 2rem;
  font-weight: 500;
  color: #f3f4f6;
}

.sub {
  color: #8b93a7;
  font-size: 0.95rem;
  line-height: 1.6;
}

/* FOOTER META LINE */
.gate-footer {
  display: flex;
  justify-content: space-between;

  font-size: 0.75rem;
  color: #6b7280;

  border-top: 1px solid rgba(255,255,255,0.06);
  padding-top: 16px;
}

/* mobile */
@media (max-width: 600px) {
  .gate {
    padding: 28px;
  }

  .gate-footer {
    flex-direction: column;
    gap: 6px;
  }
}
</style>