import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import AppAccounts from '../components/AppAccounts.vue'
import Home from '../components/homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/homepage', // Redirect the root URL to the homepage route
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: Home,
  },
  {
    path: '/skull',
    name: 'Skull',
    component: Skull
  },
  {
    path: '/accounts',
    name: 'AppAccounts',
    component: AppAccounts
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
