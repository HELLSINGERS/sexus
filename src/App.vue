<template>
  <div id="app">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <footer id="footer" v-show="showFooter">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
          <router-link to="/home" @click="showFooter=true">
            <img slot="icon" src="./assets/logo.png">
            tab1
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <router-link to="/tool" @click="showFooter=true">
            <img slot="icon" src="./assets/logo.png">
            tab2
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab3">
          <router-link to="/visithouse" @click="showFooter=true">
            <img slot="icon" src="./assets/logo.png">
            tab3
          </router-link>
        </mt-tab-item>
        <mt-tab-item id="tab4">
          <router-link to="/own" @click="showFooter=true">
            <img slot="icon" src="./assets/logo.png">
            tab4
          </router-link>
        </mt-tab-item>
      </mt-tabbar>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      selected: '',
      showFooter: false
    }
  },
  created () {
    var pathA = this.$route.path
    console.log(pathA)
    if (pathA === '/') {
      this.showFooter = true
    }
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
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
a{
  text-decoration: none;
  color: black;
}
</style>
