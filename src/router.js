import Vue from 'vue'
import Router from 'vue-router'
import Tours from './views/Tours.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tours',
      component: Tours
    },
    {
      path: '/history',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue')
    }
  ]
})
