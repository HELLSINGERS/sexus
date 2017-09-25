<template>
    <div class="newMain">
      <div class="new_house"><a href="#newHouse"><span><</span></a></div>
      <div class="page-swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item class="slide" v-for="item in newInfo[0].pic" :key="newInfo[0].id">
            <img :src='"http://www.fooju.cn/" + item.pic' alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <h3 class="new_h">{{newInfo[0].keywords}}</h3>
      <ul class="new_site">
        <li><span class="new_color">售价:</span>均价{{newInfo[0].average_price}}元/平方</li>
        <li><span class="new_color">地址:</span>{{newInfo[0].address}}</li>
        <li><span class="new_color">开盘:</span>{{newInfo[0].edittime}}</li>
      </ul>
      <ul class="new_site1">
        <li><span class="new_color">售楼处:</span>{{newInfo[0].s_address}}</li>
        <li><span class="new_color">开发商:</span>{{newInfo[0].developer}}</li>
        <li><span class="new_color">容积率:</span>{{newInfo[0].volume_ratio}}</li>
        <li><span class="new_color">绿化率:</span>{{newInfo[0].greening_rate}}</li>
        <li><span class="new_color">最早交房:</span>{{newInfo[0].developer}}</li>
        <li><span class="new_color">产权年限:</span>{{newInfo[0].property_time}}</li>
        <li><span class="new_color">物业公司:</span>{{newInfo[0].volume_ratio}}</li>
        <li style="text-align: center" v-show="!hidden"><img src="../iconSmall/隐藏 .png" alt="" @click="hidden=true" class="new_li"></li>
        <li class="hidden_main" v-show="hidden">
          <ul>
            <li><span class="new_color">物业类型:</span>{{newInfo[0].s_address}}</li>
            <li><span class="new_color">建筑类型:</span>{{newInfo[0].developer}}</li>
            <li><span class="new_color">车位情况:</span>{{newInfo[0].volume_ratio}}</li>
            <li><span class="new_color">装修状态:</span>{{newInfo[0].greening_rate}}</li>
            <li><span class="new_color">交通情况:</span>{{newInfo[0].developer}}</li>
            <li><span class="new_color">占地面积:</span>{{newInfo[0].property_time}}</li>
            <li><span class="new_color">建筑面积:</span>{{newInfo[0].volume_ratio}}</li>
            <li style="text-align: center"><img src="../iconSmall/显示.png" alt="" @click="hidden=false" class="new_li"></li>
          </ul>
        </li>
      </ul>
      <div class="new_pic">
        <div class="pic_title">
          <h3>楼盘相册（{{newInfo[0].pic.length}}）</h3>
          <div  class="new_color" @click="break_img">查看全部</div>
        </div>
        <div class="pic_img">
          <div v-for="item in newInfo[0].pic" :key="newInfo[0].id">
            <img :src='"http://www.fooju.cn/" + item.pic' alt="" class="pic_img1">
            <div>效果图</div>
          </div>
        </div>
      </div>
      <div class="new_pics">
        <h3>地理位置</h3>
        <div id="allmap"></div>
      </div>
      <div class="new_news">
        <h3>楼盘资讯</h3>
        <div>
          <div v-for="item in newInfo[0].ency" class="new_newsList" >
            <a href="#baikeNewsMain" @click="baike(item.id)">{{item.title}}</a>
          </div>
        </div>
      </div>
      <div class="recommend_info">
        <h3>推荐楼盘</h3>
        <div v-for="item in newInfo[0].tuijieloupan" class="recommend_list">
          <img :src='"http://www.fooju.cn/" + item.pic' alt="" class="recommend_img">
          <ul class="recommend_item">
            <li class="recommend_title">{{item.title}}</li>
            <li>{{item.address}}</li>
            <li>{{item.building_type}}  建筑面积：{{item.built_area}}/㎡</li>
            <li class="recommend_color">均价{{item.average_price}}/㎡</li>
          </ul>
        </div>
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
  import {NewDetail} from '../../../../api/config/config'
  import BMap from 'BMap'
  export default{
    data () {
      return {
        newInfo: [],
        id: '',
        hidden: false
      }
    },
    mounted () {
      this.id = sessionStorage.getItem('newHouseID')
      this.getDate()
      this.getMap()
    },
    methods: {
      baike (val) {
        sessionStorage.setItem('baikeMainId', val)
//        this.$router.push({path: '/baikeNewsMain'})
      },
      break_img () {
        this.$router.push({name: 'newHouseMainImg', query: {pic: this.newInfo[0].pic}})
      },
      getDate () {
        var self = this
//        this.id = this.$route.query.id
        NewDetail({id: this.id, userid: ''}).then(function (res) {
          self.newInfo = res.data.data
        })
      },
      getMap () {
        // 百度地图API功能
        var map = new BMap.Map('allmap')    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl())   // 添加地图类型控件
        map.setCurrentCity('北京')          // 设置地图显示的城市 此项是必须设置的
//        map.enableScrollWheelZoom()    // 开启鼠标滚轮缩放
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
  }
  .new_house a{
    font-size: 30px;
    color: white;
  }
  #allmap {
    width: 100%;
    height: 250px;
    overflow: hidden;
    margin:0;
  }
  .new_pics{
    width: 100%;
    padding:10px;
    margin-bottom: 10px;
    background-color: white;
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
    font-size: 18px;
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
  .recommend_color{
    color: red;
    font-size: 15px;
  }
  .recommend_title{
    font-size: 15px;
    color:black;
  }
  .recommend_info{
    padding: 10px;
    background-color: white;
    font-size: 13px;
  }
  .recommend_list{
    display: flex;
  }
  .recommend_img{
    width: 120px;
    height: 90px;
    margin: 10px 0;
  }
  .recommend_item{
    flex: 1;
    margin: 10px 5px;
  }
  .new_newsList{
    line-height: 30px;
    font-size: 14px;
  }
  .new_news h3{
    border-bottom: 1px solid #ddd;
  }
  .new_news{
    padding:10px;
    margin-bottom: 10px;
    line-height: 40px;
    background-color: white;
  }

  .pic_img{
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 10px 0;
    margin-bottom: 10px;
  }
  .pic_img1{
    width:80px;
    height: 60px;
  }
  .new_color{
    color:#999;
  }
  .new_pic{
    width: 100%;
    padding:10px;
    margin-bottom: 10px;
    background-color: white;
  }
  .pic_title{
    display: flex;
    line-height: 40px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }
  .pic_title h3{
    width: 80%;
  }
  .new_li{
    width: 32px;
    height: 32px;
  }
  .new_site1{
    padding:10px;
    margin-bottom: 10px;
    line-height: 40px;
    background-color: white;
  }
  .new_site{
    padding:10px;
    margin-bottom: 10px;
    line-height: 40px;
    background-color: white;
  }
  ul{
    list-style: none;
  }
  .newMain{
    width: 100%;
    background-color: #ddd;
    text-align: left;
    font-size: 14px;
    color: #555;
    margin-bottom: 50px;
    position: relative;
  }
  .new_h{
    padding: 20px 0;
    text-align: center;
    background-color: white;
    font-size: 18px;
    margin-bottom: 10px;

  }
  .page-swipe {
    width: 100%;
    height: 280px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .slide{
    background-color: #ff2d4b;
    color: red;
    display: block;
    height: 280px;
  }
  img{
    width: 100%;
    height: 280px;
  }
</style>
