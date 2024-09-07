import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '@/modules/authentication/store/auth.store';
const VertuShowcase = () => import('@/pages/VertuShowcase.vue');

const routeModules: Record<string, { default: RouteRecordRaw[] }> = import.meta.glob(
  '@/modules/*/router/*.ts',
  { eager: true }
);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'VertuShowcase',
    component: VertuShowcase,
    meta: { layout: 'ShowcaseLayout' },
  },
];

for (const path in routeModules) {
  const module = routeModules[path];
  routes.push(...module.default);
}

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;
