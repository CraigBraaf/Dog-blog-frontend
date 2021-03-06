import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Blogs from '@/views/Blogs.vue'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Profile from '@/views/Profile'
import Contact from '@/views/Contact'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
