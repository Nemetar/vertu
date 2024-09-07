import { RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '../store/auth.store'
const LoginForm = () => import('../components/login-form/LoginForm.vue')

const authRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'Login',
        component: LoginForm,
        meta: {
            requireAuthorization: false,
        },
    },
    {
        path: '/logout',
        beforeEnter: (_to, _from, next) => {
            const authStore = useAuthStore()
            authStore.logout()
            next('/login')
        },
        redirect: '/login',
    },
]

export default authRoutes
