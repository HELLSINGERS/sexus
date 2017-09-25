<template>
    <div class="seekStoreMain">
      <div class="page-swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="slide" v-for="item in info[0].pic" :key="info[0].pic">
            <img :src='"http://www.fooju.cn/" + item.url' alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <h3 class="title">{{info[0].name}}</h3>
      <div class="house">
        <div>
          <div class="colorR">{{info[0].used_num}}</div>
          <div class="color">在售二手房</div>
        </div>
        <div>
          <div class="colorR">{{info[0].retal_num}}</div>
          <div class="color">在租房源</div>
        </div>
      </div>
      <div class="address"><span>地址：</span>{{info[0].address}}</div>
      <div class="jingli">
        店经理
      </div>
      <div class="dian">
        <div>
          <img :src='"http://www.fooju.cn/" + info[0].agent_face' alt="">
          <span>{{info[0].agent}}</span>
        </div>
        <a href="">
          <img src="../../iconSmall/电话 (1).png" alt="">
        </a>
      </div>
      <div class="fineHouse">
        <div class="headers">
          <h3>优质房源</h3>
          <a href="">全部房源></a>
        </div>
        <div class="userHouse">
          <span class="active">二手房</span>
          <span>租房</span>
        </div>

      </div>
    </div>
</template>
<script>
  import {StoreDetail} from '../../../../../api/config/config'
  export default{
    data () {
      return {
        id: '',
        info: []
      }
    },
    mounted () {
      this.id = sessionStorage.getItem('storeMainId')
      this.getDate()
    },
    methods: {
      getDate () {
        var self = this
        StoreDetail({id: this.id}).then(function (res) {
          self.info = res.data.data
          console.log(self.info)
        })
      }
    }
  }
</script>
<style>
  .userHouse span{
    display: inline-block;
    border:1px solid purple;
    padding: 5px 20px;
    color: red;
    margin-top: 10px;
    margin-left:10px ;
    border-radius: 30px;
  }
  .userHouse span.active{
    background-color: purple;
    color: white;
    display: inline-block;
  }
  .fineHouse{
    padding:10px;
  }
  .headers{
    display: flex;
  }
  .headers h3{
    flex: 1;
  }
  .headers a{
    font-size: 12px;
    color:#888;
    width: 20%;
  }
  .dian{
    display: flex;
    text-align: left;
    line-height: 40px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }
  .dian>div{
    width: 80%;
  }
  .dian img{
    width: 40px;
    height: 40px;
  }
  .jingli{
    padding: 10px;
    border-bottom:1px solid #ddd ;
  }
  .address{
    padding: 0 10px 10px 10px;
    border-bottom: 1px solid #ddd;
  }
  .house{
    display: flex;
    text-align: center;
    line-height: 30px;
  }
  .house>div{
    width: 50%;
  }
  .color{
    color: #888;
  }
  .colorR{
    color: red;
  }
  .seekStoreMain{
    font-size: 14px;
    line-height: 30px;
    text-align: left;
  }
  .title{
    text-align: center;
    line-height: 50px;
  }
  .page-swipe {
    width: 100%;
    height: 280px;
    color: #fff;
    font-size: 30px;
    text-align: center;
    background-color: #ddd;
  }
  .slide{
    color: red;
    display: block;
    height: 280px;
  }
  img{
    width: 100%;
    height: 280px;
  }
</style>
