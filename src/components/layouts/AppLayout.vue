<script lang="ts" setup>
  import { HomeIcon, MagnifyingGlassIcon, BellIcon, PersonIcon, ExitIcon } from '@radix-icons/vue';
</script>

<template>
  <div class="min-h-screen relative bg-slate-950 p-4">
    <RouterView />
    <div class="absolute w-6/12 bottom-4 left-1/2 transform -translate-x-1/2 px-12">
      <div
        class="w-full bg-white p-3 rounded-lg flex justify-around items-center space-x-8 border-2 border-yellow-500"
      >
        <router-link to="/home" class="flex flex-col items-center">
          <HomeIcon class="h-5 w-5 text-black" />
          <label class="text-xs text-lightgray mt-1">Home</label>
        </router-link>
        <router-link to="/search" class="flex flex-col items-center">
          <MagnifyingGlassIcon class="h-5 w-5 text-black" />
          <label class="text-xs text-bold text-lightgray mt-1">Search</label>
        </router-link>
        <router-link to="/notifications" class="flex flex-col items-center">
          <BellIcon class="h-5 w-5 text-black" />
          <label class="text-xs text-lightgray mt-1">Notifications</label>
        </router-link>
        <router-link to="/profile" class="flex flex-col items-center">
          <PersonIcon class="h-5 w-5 text-black" />
          <label class="text-xs text-lightgray mt-1">Profile</label>
        </router-link>
        <router-link to="/" class="flex flex-col items-center">
          <ExitIcon class="h-5 w-5 text-red-500" />
          <label class="text-xs text-lightgray mt-1 text-red-500">Logout</label>
        </router-link>
      </div>
    </div>
  </div>
</template>
