import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Blog from '../views/BlogPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blogs',
    name: 'Blog',
    component: Blog
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
