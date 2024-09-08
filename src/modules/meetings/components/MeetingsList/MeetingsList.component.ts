import { computed, defineComponent, onMounted } from 'vue';
import { useMeetingsStore } from '../../store/meetings.store';
import { Card } from '@/components/ui/card';

export default defineComponent({
  name: 'MeetingsList',
  components: {
    Card,
  },
  setup() {
    const meetingsStore = useMeetingsStore();
    onMounted(() => {
      meetingsStore.getMeetingsList();
    });

    const meetingsList = computed(() => meetingsStore.meetings);
    return { meetingsList };
  },
});
