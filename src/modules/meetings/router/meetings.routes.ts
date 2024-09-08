import { RouteRecordRaw } from 'vue-router';
const MeetingHome = () => import('../views/MeetingsHome.vue');

const meetingsRoutes: RouteRecordRaw[] = [
  {
    path: '/app',
    name: 'MeetingsHome',
    component: MeetingHome,
    meta: {
      layout: 'AppLayout',
    },
  },
];

export default meetingsRoutes;
