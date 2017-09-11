import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '../components/home/Home.vue'
import Tool from '../components/tools/Tool.vue'
import VisitHouse from '../components/visithouse/VisitHouse.vue'
import Own from '../components/our/Own.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    // {
    //   path: '/home',
    //   component: Home
    // },
    {
      path: '/tool',
      component: Tool
    },
    {
      path: '/visithouse',
      component: VisitHouse
    },
    {
      path: '/own',
      component: Own
    }
  ]
})
