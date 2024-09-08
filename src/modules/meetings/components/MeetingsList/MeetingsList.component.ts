import { defineComponent } from 'vue';
import { Card } from '@/components/ui/card';
import { Meeting } from '../../models/meetings.model';
import { PersonIcon, ClockIcon, CalendarIcon } from '@radix-icons/vue';
import moment from 'moment';

export default defineComponent({
  name: 'MeetingsList',
  components: {
    Card,
    PersonIcon,
    ClockIcon,
    CalendarIcon,
  },
  props: {
    meetings: {
      type: Array as () => Meeting[],
      required: true,
    },
  },
  setup() {
    const formatDate = (date: Date) => {
      return moment(date).format('DD/MM/YYYY HH:mm');
    };
    return { formatDate };
  },
});
