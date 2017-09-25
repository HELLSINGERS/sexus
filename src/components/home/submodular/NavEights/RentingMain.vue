<template>
    <div class="renting">
      <div class="new_house"><a href="#renting"><span><</span></a></div>
      <carousel></carousel>
      <h3 class="h3">{{info.fangyuanxinxi[0].title}}</h3>
      <ul class="money">
        <li>
          <span class="colorr">{{info.fangyuanxinxi[0].rent}}元/月</span>
          <div class="color">房租</div>
        </li>
        <li>
          <span class="colorr">{{info.fangyuanxinxi[0].bedroom}}室{{info.fangyuanxinxi[0].livingroom}}厅{{info.fangyuanxinxi[0].wc}}卫</span>
          <div class="color">户型</div>
        </li>
        <li>
          <span class="colorr">{{info.fangyuanxinxi[0].use_area}}㎡</span>
          <div class="color">面积</div>
        </li>
      </ul>
      <div class="main">
        <ul class="one_list">
          <li>
            <span class="color">楼层:</span>
            <span>{{info.fangyuanxinxi[0].floor}}/{{info.fangyuanxinxi[0].floor_totle}}层</span>
          </li>
          <li>
            <span class="color">朝向:</span>
            <span>{{info.fangyuanxinxi[0].direction}}</span>
          </li>
        </ul>
        <ul class="one_list">
          <li>
            <span class="color">装修:</span>
            <span>{{info.fangyuanxinxi[0].decoration}}</span>
          </li>
          <li>
            <span class="color">付款方式:</span>
            <span>{{info.fangyuanxinxi[0].pay_type}}</span>
          </li>
        </ul>
        <ul class="one_list">
          <li>
            <span class="color">年代:</span>
            <span>{{info.fangyuanxinxi[0].age}}</span>
          </li>
          <li>
            <span class="color">楼型:</span>
            <span>{{info.fangyuanxinxi[0].purpose}}</span>
          </li>
        </ul>
        <ul class="one_list">
          <li>
            <span class="color">房源编号:</span>
            <span>{{info.fangyuanxinxi[0].number}}</span>
          </li>
          <li>
            <span class="color">权属:</span>
            <span>{{info.fangyuanxinxi[0].quanshu}}</span>
          </li>
        </ul>
        <ul class="one_list">
          <li>
            <span class="color">地址:</span>
            <span>{{info.fangyuanxinxi[0].village}}</span>
          </li>
        </ul>
        <ul class="one_list">
          <li>
            <span class="color">小区:</span>
            <span>{{info.fangyuanxinxi[0].village}}</span>
          </li>
        </ul>
      </div>
      <footer>
        <div class="attention">
          <img src="../iconSmall/关注1.png" alt="">
          关注
        </div>
        <span>预约看房</span>
      </footer>
    </div>
</template>
<script>
  import {RtalDetail} from '../../../../api/config/config'
  import Carousel from '../commons/Carousel.vue'
  export default{
    data () {
      return {
        id: '',
        info: []
      }
    },
    components: {
      carousel: Carousel
    },
    mounted () {
      this.id = sessionStorage.getItem('rentingId')
      this.getDate()
    },
    methods: {
      getDate () {
        var self = this
        RtalDetail({id: this.id}).then(function (res) {
          self.info = res.data.data
          console.log(self.info)
        })
      }
    }
  }
</script>
<style>
  .new_house{
    height: 40px;
    line-height: 40px;
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    top:0;
    left:0;
    z-index: 10;
    width: 100%;
    padding:0 10px;
    text-align: left;

  }
  .new_house a{
    font-size: 30px;
    color: white;
  }
  footer{
    display: flex;
    position: fixed;
    bottom:0px;
    left:0;
    background-color: white;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 16px;
  }
  footer>*{
    border:1px solid #ddd;
    width: 50%;
  }
  footer>span{
    background-color: red;
    color: white;
  }

  footer .attention img{
    width: 20px;
    height: 20px;
  }
  .main{
    background-color: white;
    margin-bottom: 50px;
    border-bottom: 20px solid #ddd;
  }
  .one_list{
    display: flex;
    padding:10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
  .one_list>li:nth-of-type(1){
    width: 70%;
  }
  ul{
    list-style: none;
  }
  .money{
    display: flex;
    text-align: center;
    margin-bottom: 10px;
    line-height: 30px;
    width: 100%;
    background-color: white;
  }
  .money>li{
    width: 33.33%;
  }
  .colorr{
    color:red;
  }
  .color{
    color: #777;
  }
  .renting{
    background-color: #ddd;
    color: #222;
    font-size: 14px;
  }
  .h3{
    line-height: 40px;
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    background-color: white;
  }
</style>
