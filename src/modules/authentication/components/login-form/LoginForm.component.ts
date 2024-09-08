import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../../store/auth.store';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default defineComponent({
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
    Button,
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
