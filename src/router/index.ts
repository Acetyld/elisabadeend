import { createRouter, createWebHistory } from 'vue-router';
 
const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/games', name: 'GameList', component: () => import('../views/GameList.vue') },
  { path: '/game/:id', name: 'GameDetail', component: () => import('../views/GameDetail.vue'), props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;