import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Users from '../views/Users.vue'
import AddUser from '../views/AddUser.vue'
import UpdateUser from '../views/UpdateUser.vue'
import Login from '../views/Login.vue'
import Logout from '../components/Logout.vue'
import AppV from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/about'
    },
    {
      path: '/login',
      name : 'login',
      component: Login
    },
    {
      path: '/logout',
      name : 'logout',
      component: Logout
    },
    {
      path: '/:catchAll(.*)', //if user go to undefined path in this list
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path : '/adduser',
      name : 'adduser',
      component : AddUser
    },
    {
      path : '/updateuser/:userId',
      name : 'updateuser',
      component : UpdateUser
    }
  ]
})

export default router
