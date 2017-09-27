import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '../components/home/Home.vue'
import Tool from '../components/tools/Tool.vue'
import VisitHouse from '../components/visithouse/VisitHouse.vue'
import Valuation from '../components/tools/Valuation.vue'
import Findhouse from '../components/tools/Findhouse.vue'
import HouseLoanCalculator from '../components/tools/HouseLoanCalculator.vue'
import Own from '../components/our/Own.vue'
import Login from '../components/common/login/Login.vue'
// import NotFoundComponent from '../components/common/errorpage/NotFoundComponent.vue'
import Register from '../components/our/Register.vue'
import RegisterSubmit from '../components/our/RegisterSubmit.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // {
    //   path: '*',
    //   component: NotFoundComponent
    // },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
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
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/registerSubmit',
      component: RegisterSubmit
    },
    {
      path: '/Valuation',
      component: Valuation
    },
    {
      path: '/Findhouse',
      component: Findhouse
    },
    {
      path: '/HouseLoanCalculator',
      component: HouseLoanCalculator
    }
  ]
})
