import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import MovieItem from '@/pages/MovieItem.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MovieItem,
    },
  ],
});

export default router;
