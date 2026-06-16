<template>
  <div class="bg-dark-card/90 backdrop-blur border border-dark-border p-4 rounded-xl shadow-lg">

    <label class="block text-xs uppercase tracking-widest text-gray-400 mb-2">
      Select Response
    </label>

    <select
      v-model="model"
      class="w-full bg-dark-bg border border-dark-border rounded-lg p-2 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
    >
      <option disabled value="">Choose a response</option>

      <option
        v-for="r in responses"
        :key="r.id"
        :value="r.id"
      >
        {{ r.id }} — {{ r.created_at }}
      </option>
    </select>

  </div>
</template>