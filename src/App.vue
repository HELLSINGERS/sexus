<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    <footer id="footer">
      <router-link to="/home">home</router-link>
      <router-link to="/tool">tool</router-link>
      <router-link to="/visithouse">visithouse</router-link>
      <router-link to="/own">own</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
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
