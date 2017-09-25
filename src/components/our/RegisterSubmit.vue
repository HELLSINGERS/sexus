<template>
  <div id="app">
    <mt-header title="用户注册" id="header">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click.prevent="handleClose"></mt-button>
        <!--<mt-button @click.prevent="handleClose">返回</mt-button>-->
      </router-link>
    </mt-header>
    <section class="form-sec">
      <div class="form-input">
        <el-input type="password" v-model="user.pwd" placeholder="请输入密码"></el-input>
        <el-input type="password" v-model="user.password" placeholder="请再次输入密码"></el-input>
      </div>
      <div class="form-a">
        注册即视为同意《<a href="">福居网用户协议</a>》
      </div>
      <!--<div class="spanA"><span>(请在60秒内完成验证，超时请点击重新发送)</span></div>-->
      <el-button class="login-a" size="middle" type="success" @click="registerSubmit">提交</el-button>
    </section>
  </div>
</template>

<script>
  import {register} from '../../api/config/config.js'
  import md5 from 'js-md5'
  export default {
    data () {
      return {
        user: {
          pwd: '',
          password: ''
        },
        phoneB: ''
      }
    },
    mounted () {
      this.phoneB = this.$route.query.phoneA
    },
    methods: {
      handleClose () {
        this.$router.push({path: '/register', query: {mobile: this.phoneB}})
//        sessionStorage.setItem('dd', this.phoneB)
      },
      registerSubmit () {
//        var self = this
        var pwd = md5(md5(this.user.password)) + 'fujuwang'
        register({mobile: this.phoneB, password: pwd}).then(function (res) {
          if (res.data.code === 102) {
            console.log(res.data.msg)
          } else {
            console.log('123456')
          }
        })
      }
    }
  }
</script>

<style>

</style>
