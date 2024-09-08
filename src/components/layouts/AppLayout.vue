<script lang="ts" setup>
  import { HomeIcon, MagnifyingGlassIcon, BellIcon, PersonIcon, ExitIcon } from '@radix-icons/vue';
</script>

<template>
  <div
    class="h-screen flex flex-col justify-between bg-gradient-to-b from-slate-950 to-slate-900 text-white"
  >
    <div class="flex-1 w-full p-4 mb-4 overflow-auto overflow-y-hidden">
      <RouterView />
    </div>

    <div
      class="w-full shadow-inner bg-gradient-to-r from-gray-100 to-gray-200 p-4 flex justify-around items-center space-x-4 rounded-t-lg border-t-4 border-yellow-500"
    >
      <router-link
        to="/app"
        class="flex flex-col items-center hover:scale-110 transition-transform"
      >
        <HomeIcon class="h-6 w-6 text-black" />
        <label class="text-xs text-gray-700 mt-1">Home</label>
      </router-link>
      <router-link
        to="/search"
        class="flex flex-col items-center hover:scale-110 transition-transform"
      >
        <MagnifyingGlassIcon class="h-6 w-6 text-black" />
        <label class="text-xs text-gray-700 mt-1">Search</label>
      </router-link>
      <router-link
        to="/notifications"
        class="flex flex-col items-center hover:scale-110 transition-transform"
      >
        <BellIcon class="h-6 w-6 text-black" />
        <label class="text-xs text-gray-700 mt-1">Notifications</label>
      </router-link>
      <router-link
        to="/profile"
        class="flex flex-col items-center hover:scale-110 transition-transform"
      >
        <PersonIcon class="h-6 w-6 text-black" />
        <label class="text-xs text-gray-700 mt-1">Profile</label>
      </router-link>
      <router-link to="/" class="flex flex-col items-center hover:scale-110 transition-transform">
        <ExitIcon class="h-6 w-6 text-red-500" />
        <label class="text-xs text-red-500 mt-1">Logout</label>
      </router-link>
    </div>
  </div>
</template>
