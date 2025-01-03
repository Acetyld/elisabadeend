import { createRouter, createWebHistory } from 'vue-router';
//@ts-ignore
import GameList from '../views/GameList.vue';
//@ts-ignore
import GameDetail from '../views/GameDetail.vue';
//@ts-ignore
import Home from '../views/Home.vue';
//@ts-ignore
import About from '../views/About.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/games', name: 'GameList', component: GameList },
  { path: '/game/:id', name: 'GameDetail', component: GameDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;