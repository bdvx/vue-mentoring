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
      props: (route) => {
        const {
          image, title, year, genre, description, length,
        } = route.params;
        return {
          image, title, year, genre, description, length,
        };
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MovieItem,
    },
  ],
});

export default router;
