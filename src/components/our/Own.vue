<template>
    <section id="app">
      <div class="header">
        <!--第一部分，登录信息-->
        <section class="headerA">
          <a href="">
            <div class="left-set">
              <img src="./images/setting.png" alt="">
            </div>
          </a>
          <a href="">
            <div class="right-inf">
              <img src="./images/bell.png" alt="">
            </div>
          </a>
        </section>
        <a href="">
          <div class="headerB">
            <!--<router-link to="/login">-->
            <a href="#login">
              <img class="middle-img" :src="src" alt="">
              <p class="bottom-p">
                {{username}}
              </p>
            </a>
          </div>
        </a>
      </div>
      <div class="nav">
        <!--第二部分，关注经纪人-->
        <a href="" @click.prevent="attention">
          <section class="nav-1">
            <img src="./images/love.png" alt="">
            <section class="nav-2">
              <div>
                <span>我的关注</span>
                <span>(0)</span>
              </div>
              <div>
                <span>新房</span>
                <span>二手房</span>
                <span>租房</span>
              </div>
            </section>
          </section>
        </a>
        <a href="" @click.prevent="agent">
          <section class="nav-1">
            <img src="./images/us.png" alt="">
            <div class="nav-2">
              <span>我的经纪人</span>
              <span>(0)</span>
              <p>收藏的经纪人</p>
            </div>
          </section>
        </a>
      </div>
      <div class="main-A" @click="seeRecord">
        <!--看房记录 -->
        <img class="left-A" src="./images/record.png" alt="">
        <span>看房记录</span>
        <img class="left-B" src="./images/entranceRight.png" alt="">
      </div>
      <div class="main-A" @click="seeSchedule">
        <!--看房日程 -->
        <img class="left-A" src="./images/schedule.png" alt="">
        <span>看房日程</span>
        <img class="left-B" src="./images/entranceRight.png" alt="">
      </div>
      <div class="main-A" @click="mortCalculator">
        <!--房贷计算器-->
        <img class="left-A" src="./images/calculators.png" alt="">
        <span>房贷计算器</span>
        <img class="left-B" src="./images/entranceRight.png" alt="">
      </div>
      <div class="main-A main-B">
        <!--客服电话-->
        <img class="left-A" src="./images/earphone.png" alt="">
        <span>客服电话</span>
        <!--<img class="left-B" src="./images/entranceRight.png" alt="">-->
        <span>一键拨号</span>
        <a>400-898-1018</a>
      </div>
      <div class="main-A" @click="userFeedback">
        <!--用户反馈-->
        <img class="left-A" src="./images/feedback.png" alt="">
        <span>用户反馈</span>
        <img class="left-B" src="./images/entranceRight.png" alt="">
      </div>
    </section>
</template>

<script>
  export default{
    data () {
      return {
        username: '',
        src: ''
      }
    },
    created () {
      this.username = this.$route.query.username
//      console.log(this.$route)
      this.src = this.$route.query.face
    },
    methods: {
      attention () {
        this.$router.push('')
//        this.$router.push('/login')
      },
      agent () {
        this.$router.push('/login')
      },
      seeRecord () {
        this.$router.push('/login')
      },
      seeSchedule () {
        this.$router.push('/login')
      },
      mortCalculator () {
        this.$router.push('/login')
      },
      userFeedback () {
        this.$router.push('/login')
      }
    }
  }
</script>
<style>
  a{
    text-decoration: none;
  }
  .header{
    height: 190px;
    width: 100%;
    background-color: #fff;
  }
  .headerA{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .header .left-set{
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50%;
    margin: 5px 0 5px 5px;
    text-align: center;
  }
  .header .left-set img{
    width: 18px;
    height: 18px;
    margin-top: 6px;
  }
  .header .right-inf{
    width: 30px;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 50%;
    text-align: center;
    float: right;
    margin: 5px 5px 5px 0;
  }
  .header .right-inf img{
    width: 18px;
    height: 18px;
    margin-top: 6px;
  }
  .headerB{
    text-align: center;
    padding-top: 32px;
  }
  .headerB img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  .nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .main-A{
    height: 48px;
    width: 100%;
    line-height: 48px;
    position: relative;
  }
  .main-A .left-A{
    width: 20px;
    height: 20px;
    position: absolute;
    left: 5px;
    top: 14px;
  }
  .main-A span{
    display: inline-block;
    margin-left: 35px;
  }
  .main-A .left-B{
    width: 20px;
    height: 20px;
    position: absolute;
    right: 5px;
    top: 14px;
  }
  .main-B a{
    color: red;
  }
  .nav-1{
    display: flex;
    flex-direction: row;
    position: relative;
  }
  .nav-1 img{
    width: 30px;
    height: 30px;
    position: absolute;
    top: 7px;
    left: 5px;
  }
  .nav-1 .nav-2{
    margin-left: 40px;
  }
</style>
