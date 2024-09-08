<script lang="ts" src="./MeetingsList.component.ts"></script>

<template>
  <div v-for="meeting in meetingsList" :key="meeting.id">
    <Card>{{ meeting.id }}</Card>
  </div>
</template>
