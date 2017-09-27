<template>
    <div>
      <header>
        <span>福居工具</span>
      </header>
      <section>
        <mt-swipe :auto="3000" @change="handleChange">
          <mt-swipe-item><img src="./images/2a.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="./images/2a.jpg" alt=""></mt-swipe-item>
          <mt-swipe-item><img src="./images/2a.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
        <ul class="icon-box">
          <li>
            <a href="">
              <div class="icon"><img src="./images/download-3.png" alt=""></div>
              <div>经纪人</div>
            </a>
          </li>
          <li>
            <a href="#HouseLoanCalculator">
              <div class="icon"><img src="./images/download-5.png" alt=""></div>
              <div>房贷计算器</div>
            </a>
          </li>
          <li>
            <a href="">
              <div class="icon"><img src="./images/download.png" alt=""></div>
              <div>税费计算</div>
            </a>
          </li>
        </ul>
        <ul class="icon-box">
          <li>
            <a href="">
              <div class="icon"><img src="./images/download-2.png" alt=""></div>
              <div>查门店</div>
            </a>
          </li>
          <li>
            <a href="#Valuation">
              <div class="icon"><img src="./images/download-4.png" alt=""></div>
              <div>房屋估价</div>
            </a>
          </li>
          <li>
            <a href="#Findhouse">
              <div class="icon"><img src="./images/download-1.png" alt=""></div>
              <div>帮我找房</div>
            </a>
          </li>
        </ul>
      </section>
    </div>
</template>

<script>
  export default {
    methods: {
      handleChange (index) {

      }
    }
  }
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  header{
    text-align: center;
    padding: 10px;
  }
  header span {
    height: 50px;
    font-size: 18px;
  }
  .icon-box {
    padding-top: 15px;
    width: 100%;
    display: flex;
    list-style: none;
  }
  .icon-box li{
    flex: 1;
    text-align: center;
    width: 110px;
    height: 110px;
  }
  .icon-box a{
    border: 1px solid rgb(240,240,240);
    box-shadow: 0 0 8px rgb(240,240,240);
    color: darkslateblue;
    display: inline-block;
    width: 100px;
    height: 100px;
    text-align: center;
    text-decoration: none;
  }
  .icon-box .icon  {
    text-align: center;
  }
  .icon-box .icon img{
    height: 40px;
    margin: 12px;
  }
  .mint-swipe {
    height: 250px;
  }
  .mint-swipe img{

  }
</style>
