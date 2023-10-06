import Vue from 'vue'
import VueRouter from 'vue-router'
import Skull from '../components/Skull.vue'
import AppAccounts from '../components/AppAccounts.vue'
import Home from '../components/homepage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  {
    path: '/creative-content',
    name: 'CreativeContent',
    component: CreativeContent,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
