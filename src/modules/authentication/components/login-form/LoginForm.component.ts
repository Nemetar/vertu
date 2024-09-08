import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../../store/auth.store';
import BasicCard from '@/components/cards/BasicCard.vue';

export default defineComponent({
  components: {
    BasicCard,
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const authStore = useAuthStore();
    const error = authStore.error;

    const submitForm = async () => {
      try {
        await authStore.login(username.value, password.value);
      } catch (e) {
        console.error(e);
      }
    };

    return {
      username,
      password,
      submitForm,
      error,
    };
  },
});
