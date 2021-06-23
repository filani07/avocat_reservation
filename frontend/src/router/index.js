import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// LinkExactActiveClass:'vue-school-active-class',
const routes = [

  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/historique',
    name: 'Historique',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Historique.vue')
  },
  {
    path:'/booking',
    name:'Booking',
    component: () => import(/* webpackChunkName: "brazil" */'../views/Booking.vue')
  },
  {
    path:'/singup',
    name:'Singup',
    component: () => import(/* webpackChunkName: "brazil" */'../views/Singup.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
