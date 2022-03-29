import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Blogs from '../views/BlogPage.vue'
import SingleBlog from '../views/SingleBlog.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blog/:name',
    name: 'SingleBlog',
    component: SingleBlog
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
