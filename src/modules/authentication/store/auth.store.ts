import { defineStore } from 'pinia';
import { ref } from 'vue';
import { login, logout } from '../services/auth.service';

export const useAuthStore = defineStore(
  'auth',
  () => {
    const isAuthenticated = ref(false);
    const token = ref<string | null>(null);
    const error = ref<Error | null>(null);

    const loginUser = async (username: string, password: string) => {
      try {
        const data = await login({ username, password });
        token.value = data.token;
        isAuthenticated.value = true;
        error.value = null;
      } catch (err) {
        error.value = err as Error;
        isAuthenticated.value = false;
      }
    };

    const logoutUser = async () => {
      await logout();
      token.value = null;
      isAuthenticated.value = false;
    };

    return {
      isAuthenticated,
      token,
      error,
      login: loginUser,
      logout: logoutUser,
    };
  },
  {
    persist: {
      key: 'authentication',
      storage: sessionStorage,
    },
  }
);
