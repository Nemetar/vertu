<script lang="ts" src="./MeetingsHome.component.ts"></script>

<template>
  <div class="h-full">
    <h1 class="text-white text-2xl font-bold mb-4">Meetings Home</h1>
    <div class="grid grid-cols-2 gap-4 h-full overflow-y-scroll no-scrollbar">
      <MeetingsList :meetings="meetings" />
    </div>
  </div>
</template>
