<script lang="ts" src="./MeetingsList.component.ts"></script>

<template>
  <div v-for="meeting in meetings" :key="meeting.id" class="mb-4">
    <div class="flex h-full border bg-white border-gray-300 rounded-lg shadow-md">
      <img
        :src="meeting.imageUrl"
        alt="Meeting Image"
        class="w-40 h-full rounded-lg object-cover rounded-tr-none rounded-br-none border-r-2"
      />
      <div class="w-full h-full flex flex-col justify-between p-3">
        <div>
          <h2 class="text-lg font-semibold">{{ meeting.title }}</h2>
          <p class="text-gray-500">{{ meeting.organizer }}</p>
          <p class="text-gray-700 mt-1">{{ meeting.description }}</p>
        </div>
        <div class="mt-1 text-gray-600">
          <p class="flex items-center">
            <PersonIcon class="mr-2" />
            {{ meeting.currentPeople }} / {{ meeting.maxPeople }}
          </p>
          <p class="flex items-center">
            <CalendarIcon class="mr-2" />
            {{ formatDate(meeting.startDate) }}
          </p>
          <p class="flex items-center">
            <ClockIcon class="mr-2" />
            {{ meeting.duration }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    @apply flex border border-gray-300 rounded-lg shadow-md p-4;
  }
</style>
