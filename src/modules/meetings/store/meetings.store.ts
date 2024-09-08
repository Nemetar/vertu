import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Meeting } from '../models/meetings.model';
import { getMeetings } from '../services/meetings.service';

export const useMeetingsStore = defineStore('meetings', () => {
  const meetings = ref<Meeting[]>([]);
  const error = ref<Error | null>(null);

  const getMeetingsList = async () => {
    try {
      const data = await getMeetings();
      meetings.value = data;
    } catch (e) {
      error.value = e as Error;
    }
  };

  return { meetings, error, getMeetingsList };
});
