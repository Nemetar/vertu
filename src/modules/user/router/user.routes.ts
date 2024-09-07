import { RouteRecordRaw } from 'vue-router';
const RegisterForm = () => import('../components/register-form/RegisterForm.vue');

const userRoutes: RouteRecordRaw[] = [
  {
    path: '/register',
    name: 'Register',
    component: RegisterForm,
  },
];

export default userRoutes;
