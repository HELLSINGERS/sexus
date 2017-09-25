<template>
    <section>
      <login></login>
      <router-view></router-view>
    </section>
</template>

<script>
  import Login from '../common/login/Login.vue'
  export default{
    data () {
      return {

      }
    },
    components: {
      Login
    }
  }
</script>

<style>

</style>
