<template>
  <div class="flex flex-col min-h-screen">
    <!-- Navbar -->
    <header class="bg-blue-600 text-white p-4">
      <nav class="container mx-auto flex justify-between items-center">
        <div class="text-lg font-bold">MyApp</div>
        <ul class="flex space-x-4">
          <li><a href="/" class="hover:text-gray-300">Home</a></li>
          <li>
            <a href="/about" class="hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/contact" class="hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <!-- Main content -->
    <main class="flex-1 container mx-auto p-6">
      <slot></slot>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto text-center">&copy; 2024 MyApp - All Rights Reserved</div>
    </footer>
  </div>
</template>

<script setup lang="ts">
  // No script needed for this basic layout
</script>

<style scoped>
  /* No additional styles required due to UnoCSS usage */
</style>
