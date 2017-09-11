<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<router-view></router-view>-->

    <div class="page-wrap">
      <!--<div class="page-title">Tabbar</div>-->
      <!--<div>-->
        <!--<mt-cell class="page-part" title="当前选中" :value="selected" />-->
      <!--</div>-->

      <!-- tabcontainer -->
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="home">
          home
          <home></home>
          <!--<router-view></router-view>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="tool">
          qwert
          <tool></tool>
          <!--<router-view></router-view>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="visithouse">
          789546
          <visit-house></visit-house>
          <!--<router-view></router-view>-->
        </mt-tab-container-item>
        <mt-tab-container-item id="our">
          456789
          <own></own>
          <!--<router-view></router-view>-->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <footer id="footer">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="home">
          <img slot="icon" src="./assets/home.png">
          tab1
        </mt-tab-item>
        <mt-tab-item id="tool">
          <img slot="icon" src="./assets/tool.png">
          tab2
        </mt-tab-item>
        <mt-tab-item id="visithouse">
          <img slot="icon" src="./assets/visit.png">
          tab3
        </mt-tab-item>
        <mt-tab-item id="our">
          <img slot="icon" src="./assets/our.png">
          tab4
        </mt-tab-item>
      </mt-tabbar>
    </footer>
  </div>
</template>

<script>
  import Home from './components/home/Home.vue'
  import Own from './components/our/Own.vue'
  import VisitHouse from './components/visithouse/VisitHouse.vue'
  import Tool from './components/tools/Tool.vue'
  export default {
    name: 'app',
    data () {
      return {
        selected: ''
      }
    },
    components: {
      Home,
      Own,
      VisitHouse,
      Tool
    },
    methods: {
//    home () {
//      this.$router.push('home')
//      console.log('123456')
//    },
//    tool () {
//      this.$router.push('tool')
//    },
//    viewhouse () {
//      this.$router.push('visithouse')
//    },
//    our () {
//      this.$router.push('our')
//    }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
.page-wrap {
  overflow: auto;
  height: 100%;
  padding-bottom: 100px;
}
#footer{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #ccc;
  }
/*#footer:hover{*/
  /*color: #C20D23;*/
/*}*/
a{
  text-decoration: none;
  color: black;
}
/*mt-tab-item:visited{*/
  /*color: #C20D23;*/
/*}*/
</style>
