import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/pages/Main.vue'
import MovieDescription from '@/pages/MovieDescription.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
     {
      path: '/movie/:id',
      name: 'movie',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: MovieDescription
    }
  ]
})

export default router
