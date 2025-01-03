import { createRouter, createWebHistory } from 'vue-router';
import GameList from '../views/GameList.vue';
import GameDetail from '../views/GameDetail.vue';
import Home from '../views/Home.vue';
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