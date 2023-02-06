import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import MovieItem from '@/pages/MovieItem.vue';
import PageNotFound from '@/pages/PageNotFound.vue';

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
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound,
    },
  ],
});

export default router;
