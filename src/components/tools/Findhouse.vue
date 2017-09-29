<template>
    <div class="findhouse">
      <mt-header title="帮我找房">
        <router-link to="/tool" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <ul class="icon-btn">
        <li v-if="!buyclick" @click="bb()"><div class="my-icon-button"><img src="./images/download-11.png" alt=""><span class="normal">我要买房</span></div></li>
        <li v-if="buyclick"><div class="my-icon-button"><img src="./images/download-14.png" alt=""><span>我要买房</span></div></li>
        <li v-if="!rentclick" @click="rr()"><div class="my-icon-button"><img src="./images/download-13.png" alt=""><span class="normal">我要租房</span></div></li>
        <li v-if="rentclick"><div class="my-icon-button"><img src="./images/download-15.png" alt=""><span>我要租房</span></div></li>
      </ul>

      <ul v-if="buyclick" class="sinfo" id="buy">
        <li><span>称呼：</span><input type="text" placeholder="如何称呼-先生/女士"></li>
        <li><span>联系方式：</span><input type="text" placeholder="您的联系方式"></li>
      </ul>
      <ul v-if="rentclick" class="sinfo" id="rent">
        <li><span>称呼：</span><input type="text" placeholder="如何称呼-先生/女士"></li>
        <li><span>联系方式：</span><input type="text" placeholder="您的联系方式"></li>
      </ul>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        buyclick: false,
        rentclick: false
      }
    },
    methods: {
      bb () {
        this.buyclick = !this.buyclick
        if (this.rentclick === true) {
          this.rentclick = !this.rentclick
        }
      },
      rr () {
        this.rentclick = !this.rentclick
        if (this.buyclick === true) {
          this.buyclick = !this.buyclick
        }
      }
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .findhouse .mint-header{
    background-color: white;
    color: black;
  }
  .findhouse .icon-btn{
    list-style: none;
    height: 140px;
    padding-top: 30px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    display: flex;
  }
  .findhouse .icon-btn li{
    display: inline-block;
    flex: 1;
  }
  .findhouse .icon-btn li .my-icon-button{
    display: flex;
    text-align: center;
    flex-direction: column;
  }
  .findhouse .icon-btn li img {
    width: 80px;
    margin: 5px auto 5px auto;
    display: block;
  }
  .normal{
    color: #e0e0e0;
  }
  .sinfo{
    height: 100px;
    padding-top: 10px;
    margin-top: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid grey;
    border-top: 1px solid grey;
  }
  .sinfo li{
    height: 40px;
    line-height: 40px;
    padding: 5px;
  }
  .sinfo li input{
    text-align:right;
    float: right;
    border: none;
    outline: none;
    font-size: 12px;
    height: 35px;
  }
</style>
