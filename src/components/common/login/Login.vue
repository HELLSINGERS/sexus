<template>
  <section id="app">
    <mt-header title="登录" id="header">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click.prevent="handleClose"></mt-button>
        <!--<mt-button @click.prevent="handleClose">返回</mt-button>-->
      </router-link>
      <mt-button slot="right" @click.prevent="register">注册</mt-button>
    </mt-header>
    <section class="form-sec">
      <div class="form-input">
        <el-input type="text" v-model="user.mobile" placeholder="请输入手机号"></el-input>
        <el-input type="password" v-model="user.password" placeholder="请输入密码"></el-input>
      </div>
      <div class="form-a">
        <a href="">忘记密码？</a>
      </div>
      <el-button class="login-a" size="middle" type="success" @click.prevent="loginUser" >登录</el-button>
    </section>
  </section>
</template>

<script>
  import {login} from '../../../api/config/config'
//  import crypto from 'crypto'
  import md5 from 'js-md5'
  export default {
    data () {
      return {
        user: {
          mobile: '',
          password: ''
        }
      }
    },
    mounted () {
      console.log(this.$route)
      sessionStorage.getItem('id')
    },
    methods: {
      handleClose () {
        this.$router.push('/own')
      },
      loginUser () {
        var self = this
//        var md5 = crypto.createHash()
        var pwd = md5(md5(this.user.password)) + 'fujuwang'
        console.log(pwd)
        login({mobile: this.user.mobile, password: pwd}).then(function (res) {
          console.log(res.data)
          console.log(res.data.code)
          console.log(res.data.msg)
          if (res.data.msg === '登录成功') {
            self.$router.push({path: '/own', query: {username: res.data.data.username, face: res.data.data.face}})
          } else {
            console.log('错误')
          }
        })
      },
      register () {
        this.$router.push('/register')
      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    width: 100%;
  }
  #header{
  }
  .form-sec{
    text-align: center;
  }
  .form-input{
    padding: 10px;
  }
  .form-input input{
    margin-top: 10px;
  }
  .form-a{
    position: relative;
    text-align: right;
  }
  .form-a a{
    color: red;
  }
  .login-a{
    width: 100%;
  }

</style>
