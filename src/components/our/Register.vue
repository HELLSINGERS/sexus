<template>
  <div id="app">
    <mt-header title="注册" id="header">
      <router-link to="/" slot="left">
        <mt-button icon="back" @click.prevent="handleClose"></mt-button>
        <!--<mt-button @click.prevent="handleClose">返回</mt-button>-->
      </router-link>
    </mt-header>
    <section class="form-sec">
      <div class="form-input">
        <el-input type="text" v-model="user.phone" placeholder="请输入手机号"></el-input>
        <el-input type="text" v-model="user.checkCode" placeholder="请输入验证码"></el-input>
      </div>
      <div class="form-a">
        <a href="" @click.prevent="getCheckCode">获取验证码</a>
      </div>
      <div class="spanA"><span>(请在60秒内完成验证，超时请点击重新发送)</span></div>
      <el-button class="login-a" size="middle" type="success" @click.prevent="nextSubmit">下一步</el-button>
    </section>
  </div>
</template>

<script>
//  import {register} from '../../api/config/config.js'
  import {sendMsg, MsgVerify} from '../../api/config/config.js'
  export default {
    data () {
      return {
        user: {
          phone: '',
          checkCode: ''
        }
//        dd: ''
      }
    },
    mounted () {
//      this.dd = sessionStorage.getItem('dd')
    },
    methods: {
      getCheckCode () {
//        var self = this
        sendMsg({mobile: this.user.phone}).then(function (res) {
          if (res.data.code === 200) {
            console.log(res.data.msg)
          } else {
            console.log('发送失败')
          }
        })
      },
      nextSubmit () {
        MsgVerify({mobile: this.user.phone, verify: this.user.checkCode}).then(function (res) {
          if (res.data.code === 200) {
            console.log(res.data.msg)
          } else {
            console.log('失败')
          }
        })
        this.$router.push({path: '/registerSubmit', query: {phoneA: this.user.phone}})
      },
      handleClose () {
        this.$router.push('/login')
      },
      next () {

      }
    }
  }
</script>

<style>
  .spanA{
    text-align: left;
  }
</style>
