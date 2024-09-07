import { defineComponent, ref } from 'vue'
import { useUserStore } from '../../store/user.store'

export default defineComponent({
    setup() {
        const username = ref('')
        const email = ref('')
        const password = ref('')
        const userStore = useUserStore()
        const error = userStore.error

        const submitForm = async () => {
            try {
                await userStore.register(
                    username.value,
                    email.value,
                    password.value
                )
            } catch (e) {
                console.error(e)
            }
        }

        return {
            username,
            email,
            password,
            submitForm,
            error,
        }
    },
})
