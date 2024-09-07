<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
    <div class="flex gap-4 mb-8">
      <router-link to="/login" class="hover:scale-110 transition-transform">
        <button class="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </router-link>
      <router-link to="/register" class="hover:scale-110 transition-transform">
        <button class="bg-green-500 text-white px-4 py-2 rounded">Register</button>
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
</script>
