import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Blogs from '../views/BlogPage.vue'
import SingleBlog from '../views/SingleBlog.vue'
import PathNotFound from '../views/404Page.vue'


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
    path: '/blog/:slug',
    name: 'SingleBlog',
    component: SingleBlog
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: PathNotFound 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes
})

export default router
