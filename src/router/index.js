import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// 四大主页面
import Home from '../components/home/Home.vue'
import Tool from '../components/tools/Tool.vue'
import VisitHouse from '../components/visithouse/VisitHouse.vue'
import Own from '../components/our/Own.vue'
// 搜索
import SearchMain from '../components/home/submodular/commons/SearchMain.vue'
import NewSearchMain from '../components/home/submodular/commons/NewSearchMain.vue'
import RentingSearchMain from '../components/home/submodular/commons/RentingSearchMain.vue'
import SeekSearch from '../components/home/submodular/NavEights/seekStore/SeekSearch.vue'
// 八大块
import SecondHand from '../components/home/submodular/NavEights/SecondHand.vue'
import MapHouse from '../components/home/submodular/NavEights/MapHouse.vue'
import NewHOuse from '../components/home/submodular/NavEights/NewHouse.vue'
import Renting from '../components/home/submodular/NavEights/Renting.vue'
import SeekStore from '../components/home/submodular/NavEights/seekStore/SeekStore.vue'

// 新房下楼盘相册
import NewHouseMainImg from '../components/home/submodular/NavEights/NewHouseMainImg.vue'

// 百科新闻详情页
import BaiKeNewsMain from '../components/home/submodular/NavEights/BaiKeNewsMain.vue'
import Login from '../components/common/login/Login.vue'
// import NotFoundComponent from '../components/common/errorpage/NotFoundComponent.vue'
import Register from '../components/our/Register.vue'
import RegisterSubmit from '../components/our/RegisterSubmit.vue'
Vue.use(Router)
// 八大块主页面
import SecondHandMain from '../components/home/submodular/NavEights/SecondHandMain.vue'
import NewHouseMain from '../components/home/submodular/NavEights/NewHouseMain.vue'
import RentingMain from '../components/home/submodular/NavEights/RentingMain.vue'
import SeekStoreMain from '../components/home/submodular/NavEights/seekStore/SeekStoreMain.vue'
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
    // 搜索
    {
      path: '/searchMain',
      component: SearchMain
    },
    {
      path: '/newSearchMain',
      component: NewSearchMain
    },
    {
      path: '/rentingSearchMain',
      component: RentingSearchMain
    },
    {
      path: '/seekSearch',
      component: SeekSearch
    },
    // 八大块
    // 二手房
    {
      path: '/secondHand',
      component: SecondHand
    },
    // 二手房主页面
    {
      path: '/secondHandMain',
      component: SecondHandMain
    },
    // 新房
    {
      path: '/newHouse',
      component: NewHOuse
    },
    // 新房主界面
    {
      path: '/newHouseMain',
      component: NewHouseMain
    },
    // 新房下楼盘相册
    {
      path: '/newHouseMainImg',
      component: NewHouseMainImg,
      name: 'newHouseMainImg'
    },
    // 租房列表
    {
      path: '/renting',
      component: Renting
    },
    // 租房主页面
    {
      path: '/rentingMain',
      component: RentingMain
    },
    // 地图找房
    {
      path: '/mapHouse',
      component: MapHouse
    },
    // 查门店列表
    {
      path: '/seekStore',
      component: SeekStore
    },
    // 查门店详情
    {
      path: '/seekStoreMain',
      component: SeekStoreMain
    },
    // 百科新闻详情页
    {
      path: '/baikeNewsMain',
      component: BaiKeNewsMain
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
    }
  ]
})