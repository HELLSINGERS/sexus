<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <footer id="footer">
      <mt-tabbar v-model="selected">
        <mt-tab-item id="tab1">
          <img slot="icon" src="./assets/logo.png">
          tab1
        </mt-tab-item>
        <mt-tab-item id="tab2">
          <img slot="icon" src="./assets/logo.png">
          tab2
        </mt-tab-item>
        <mt-tab-item id="tab3">
          <img slot="icon" src="./assets/logo.png">
          tab3
        </mt-tab-item>
        <mt-tab-item id="tab4">
          <img slot="icon" src="./assets/logo.png">
          tab4
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
      selected: ''
    }
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
