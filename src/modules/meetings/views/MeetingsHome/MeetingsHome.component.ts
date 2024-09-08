import { computed, defineComponent, onMounted } from 'vue';
import { useMeetingsStore } from '../../store/meetings.store';
import MeetingsList from '../../components/MeetingsList/MeetingsList.vue';

export default defineComponent({
  name: 'MeetingsHome',
  components: {
    MeetingsList,
  },
  setup() {
    const meetingsStore = useMeetingsStore();
    onMounted(() => {
      meetingsStore.getMeetingsList();
    });
    const meetings = computed(() => meetingsStore.meetings);

    return { meetings };
  },
});
