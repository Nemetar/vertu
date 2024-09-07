import { defineStore } from 'pinia';
import { ref } from 'vue';
import { register } from '../services/user.service';
import { RegisteredUser } from '../models/user.model';

export const useUserStore = defineStore('user', () => {
    const user = ref<RegisteredUser | null>(null);
    const error = ref<Error | null>(null);

    const registerUser = async (
        username: string,
        email: string,
        password: string
    ) => {
        try {
            const data = await register({ username, email, password });
            user.value = data;
            error.value = null;
        } catch (err) {
            error.value = err as Error;
        }
    };

    return {
        user,
        error,
        register: registerUser,
    };
});
