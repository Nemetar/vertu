<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <div class="flex gap-4">
      <a href="https://vitejs.dev" target="_blank" class="hover:scale-110 transition-transform">
        <img src="/vite.svg" class="w-24 h-24 mx-auto" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank" class="hover:scale-110 transition-transform">
        <img src="./assets/vue.svg" class="w-24 h-24 mx-auto" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
  </div>
</template>
