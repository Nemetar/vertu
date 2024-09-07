<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <h1 class="text-4xl font-bold text-gray-800 mb-6">{{ msg }}</h1>

    <div class="card bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
      <button type="button" @click="count++"
        class="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition duration-300">
        Count is {{ count }}
      </button>
      <p class="mt-4 text-gray-600">
        Edit
        <code class="bg-gray-200 p-1 rounded">components/HelloWorld.vue</code>
        to test HMR
      </p>
    </div>

    <p class="mt-6 text-gray-700">
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
        class="text-blue-500 hover:underline">create-vue</a>, the official Vue + Vite starter
    </p>
    <p class="mt-4 text-gray-700">
      Learn more about IDE Support for Vue in the
      <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank"
        class="text-blue-500 hover:underline">Vue Docs Scaling up Guide</a>.
    </p>
    <p class="mt-6 text-gray-600 italic">Click on the Vite and Vue logos to learn more</p>
  </div>
</template>