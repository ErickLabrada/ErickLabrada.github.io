<template>
  <form class="form" @submit.prevent="login">

    <div class="field">
      <label>Username</label>
      <input v-model="username" type="text" />
    </div>

    <div class="field">
      <label>Password</label>
      <input v-model="password" type="password" />
    </div>

    <p v-if="error" class="error">
      {{ error }}
    </p>

    <button :disabled="loading">
      {{ loading ? 'Authenticating...' : 'Enter' }}
    </button>

  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { apiService } from '@/services/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')
const loading = ref(false)

const login = async () => {
  error.value = ''
  loading.value = true

  try {
    const res = await apiService.login({
      username: username.value,
      password: password.value
    })

    localStorage.setItem('auth_token', res.Data.AccessToken)

    router.push('/reflections')
  } catch (e) {
    error.value = 'Invalid credentials'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

/* matches your ExperimentQuestion spacing logic */
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 0.9rem;
  color: #8b93a7;
}

/* SAME INPUT STYLE LANGUAGE AS YOUR SURVEY */
input {
  width: 100%;
  padding: 14px 16px;

  border-radius: 16px;

  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);

  color: #f3f4f6;

  outline: none;

  transition: 0.2s ease;
}

input:focus {
  border-color: rgba(255,255,255,0.22);
  background: rgba(255,255,255,0.05);
}

/* BUTTON matches your primary buttons elsewhere */
button {
  margin-top: 6px;

  padding: 14px 18px;
  border-radius: 16px;

  border: none;

  background: #f3f4f6;
  color: #0c0e14;

  cursor: pointer;

  transition: 0.2s ease;
}

button:hover {
  transform: translateY(-2px);
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

/* ERROR matches your experiment red tone */
.error {
  color: #f87171;
  font-size: 0.9rem;
}
</style>