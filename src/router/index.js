import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.js'),
      name: 'home',
      meta: {
        tilte: '主页'
      }
    },
    {
      path: '/about',
      component: () => import('../views/About.vue'),
      name: 'about',
      meta: {
        tilte: '关于'
      }
    }
  ]
})
