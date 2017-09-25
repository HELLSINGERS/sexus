<template>
  <div id="app">
    <router-view></router-view>
    <div id="footer" v-show="cc">
      <router-link to="/" @click="cc=true">
        <img src="./assets/home.png" >
        <span>首页</span>
      </router-link>
      <router-link to="/tool" @click="cc=true">
        <img src="./assets/tool.png">
        <span>工具</span>
      </router-link>
      <router-link to="/visithouse" @click="cc=true">
        <img src="./assets/visit.png">
        <span>看房</span>
      </router-link>
      <router-link to="/own" @click="cc=true">
        <img src="./assets/our.png">
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        cc: false
      }
    },
    mounted () {

    },
    methods: {

    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  #footer{
    width: 100%;
    height: 50px;
    line-height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
  }
  #footer a{
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    width: 25%;
    text-align: center;
  }
  #footer a img{
    width: 20px;
    height: 20px;
    margin: 0 auto;
  }
  /*#footer .active{*/
  /*color: red;*/
  /*}*/
</style>
