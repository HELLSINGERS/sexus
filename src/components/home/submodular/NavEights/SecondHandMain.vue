<template>
    <div class="secondMain">
      <search></search>
      <div class="secondHand">
        <a href="#secondHand"><span><</span></a>
      </div>
      <div class="basic_info">
        <p>{{infos.fangyuanxinxi[0].title}}</p>
        <div class="total">
          <ul>
            <li>{{infos.fangyuanxinxi[0].total_price}}万</li>
            <li class="changeColor">售价</li>
          </ul>
          <ul>
            <li>{{infos.fangyuanxinxi[0].bedroom}}室{{infos.fangyuanxinxi[0].livingroom}}厅{{infos.fangyuanxinxi[0].wc}}卫</li>
            <li class="changeColor">户型</li>
          </ul>
          <ul>
            <li>{{infos.fangyuanxinxi[0].built_area}}㎡</li>
            <li class="changeColor">面积</li>
          </ul>
        </div>
      </div>
      <div class="detail_info">
        <ul>
          <li class="detail_list">
            <div class="changeWidth">
              <span class="changeColor ">均价：</span>
              <div class="changeFont">{{infos.fangyuanxinxi[0].unit_price}}元/平方</div>
            </div>
            <div>
              <span class="changeColor">首付：</span>
              <div class="changeFont">{{infos.fangyuanxinxi[0].first_pay}}万</div>
            </div>
          </li>
          <li class="detail_list">
            <div class="changeWidth">
              <span class="changeColor ">挂牌：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].guapai}}</div>
            </div>
            <div>
              <span class="changeColor">用途：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].purpose}}</div>
            </div>
          </li>
          <li class="detail_list">
            <div class="changeWidth">
              <span class="changeColor ">楼层：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].floor}}/{{infos.fangyuanxinxi[0].floor_totle}}</div>
            </div>
            <div>
              <span class="changeColor">朝向：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].direction}}</div>
            </div>
          </li>
          <li class="detail_list">
            <div class="changeWidth">
              <span class="changeColor ">装修：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].decoration}}</div>
            </div>
            <div>
              <span class="changeColor">楼型：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].type}}</div>
            </div>
          </li>
          <li class="detail_list">
            <div class="changeWidth">
              <span class="changeColor ">年代：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].age}}</div>
            </div>
            <div>
              <span class="changeColor">区域：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].region}}</div>
            </div>
          </li>
          <li class="detail_list">
            <div class="changeWidth">
              <span class="changeColor ">房源编号：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].number}}</div>
            </div>
            <div>
              <span class="changeColor">权属：</span>
              <div class="changeFont"> {{infos.fangyuanxinxi[0].quanshu}}</div>
            </div>
          </li>
          <li>
            小区：{{infos.fangyuanxinxi[0].village}}
          </li>
          <li>
            看房时间：{{infos.fangyuanxinxi[0].deal_time}}
          </li>
        </ul>
      </div>
      <div class="feature_info">
        <ul class="feature_list">
          <h3>房源特点</h3>
          <a href="" class="changeColor">更多</a>
        </ul>
        <ul class="feature_list1">
          <li class="feature_item">
            <div>核心卖点</div>
            <div class="changeFont">{{infos.fangyuanxinxi[0].highlights}}</div>
          </li>
          <li class="feature_item">
            <div>户型介绍</div>
            <div class="changeFont">{{infos.fangyuanxinxi[0].house_introduce}}</div>
          </li>
        </ul>
      </div>
      <div class="comment_info">
        <div class="comment_list">
          <h3>经纪人房评</h3>
          <a href="" class="changeColor">更多</a>
        </div>
        <img class="comment_img" :src='"http://www.fooju.cn/" + infos.jingjirenpingfang[0].agent_face' alt="">
        <span>{{infos.jingjirenpingfang[0].agent_name}}</span>
      </div>
      <div class="comment_info">
        <div class="comment_list">
          <h3>带看记录</h3>
          <a href="" class="changeColor">更多</a>
        </div>
        <div class="record">
          <div>
            <div>{{infos.daikanjilu[0].seven}}</div>
            <div>近7日带看（次）</div>
          </div>
          <div>
            <div>{{infos.daikanjilu[0].all}}</div>
            <div>累计带看（次）</div>
          </div>
        </div>
      </div>
      <div class="site_info">
        <h3>地理位置</h3>
        <div id="allmap"></div>
      </div>
      <div class="recommend_info">
        <h3>推荐房源</h3>
        <div v-for="item in infos.tuijian" class="recommend_list">
          <img :src='"http://www.fooju.cn/" + item.pic' alt="" class="recommend_img">
          <ul class="recommend_item">
            <li>{{item.title}}</li>
            <li>建筑面积： {{item.built_area}}㎡</li>
            <li class="recommend_color">均价{{item.unit_price}}㎡</li>
          </ul>
        </div>
      </div>
      <footer>
        <div class="attention">
          <img src="../iconSmall/关注1.png" alt="">
          关注
        </div>
        <span>预约看房</span>
        <span>咨询经纪人</span>
      </footer>
    </div>

</template>
<script>
  import Search from '../commons/Carousel.vue'
  import {usedDetail} from '../../../../api/config/config'
  import BMap from 'BMap'
  export default{
    components: {
      search: Search
    },
    data () {
      return {
        infos: [],
        id: ''
      }
    },
    mounted () {
      this.getDate()
    },
    methods: {
      getDate () {
        var self = this
//        this.id = this.$route.query.id
        this.id = sessionStorage.getItem('secondHandId')
        usedDetail({id: this.id, userid: ''}).then(function (res) {
          self.infos = res.data.data
//          console.log(self.infos)
        })
        var footer = document.querySelector('#footer')
        footer.style.display = 'none'
        // 百度地图API功能
        var map = new BMap.Map('allmap')    // 创建Map实例
        map.centerAndZoom(new BMap.Point(self.infos.fangyuanxinxi[0].log, self.infos.fangyuanxinxi[0].log), 13) // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl())   // 添加地图类型控件
        map.setCurrentCity('呼和浩特')          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true)   // 启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom()   // 启用地图惯性拖拽，默认禁用
        map.enableDoubleClickZoom()
      }
    }
  }
</script>
<style>
  footer{
    display: flex;
    position: fixed;
    bottom:0px;
    left:0;
    background-color: white;
    width: 100%;
  }
  footer>*{
    width: 33.33%;
    line-height: 50px;
    border:1px solid #ccc;
    text-align: center;
  }
  footer>span:nth-of-type(1){
    background-color: purple;
    color: white;
  }
  footer>span:nth-of-type(2){
    background-color: lightskyblue;
    color: white;
  }


  .secondHand{
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    top:0px;
    left:0px;
    width: 100%;
    line-height: 40px;
    box-sizing: border-box;

  }
  .secondHand a{
    font-size: 25px;
    color:white;
    font-weight: bold;
    padding: 0px 10px;
  }
  .recommend_info{
    padding: 10px;
    background-color: white;
    font-size: 14px;
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
  .site_info{
    padding: 10px;
    background-color: white;
    margin:10px 0;
    font-size: 14px;
  }
  #allmap{
    width: 100%;
    height: 250px;
  }
  .record{
    display: flex;
    line-height: 30px;
    padding: 10px 0;
  }
  .record>div{
    width: 50%;
    text-align: center;
  }
  .record>div:nth-of-type(1){
    border-right:1px solid #ddd;
  }
  .comment_info{
    background-color: white;
    font-size: 14px;
    padding: 10px;
  }
  .comment_list{
    display: flex;
    padding: 10px;
    line-height: 30px;
    border-bottom: 1px solid #ddd;
  }
  .comment_list h3{
    width: 80%;
  }
  .comment_img{
    width:40px;
    height: 40px;
    padding-top: 10px;
  }
  .feature_info{
    background-color: white;
    padding:10px 0;
    margin-bottom: 10px;
    text-align: left;
    font-size: 14px;
  }
  .feature_list{
    display: flex;
    margin:0 10px;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  .feature_list h3{
    width: 80%;
  }
  .feature_list1{
    margin:0 10px;
    padding: 10px 0;
    /*border-bottom: 1px solid #ddd;*/
    line-height: 30px;
  }
  .feature_item{
    padding: 10px 0;
    border-bottom: 1px solid #ddd;
  }
  .secondMain{
    background-color: #ddd;
    text-align: left;
    position: relative;
  }
  ul{
    list-style: none;
  }
  .basic_info {
    padding: 10px 0;
    margin-bottom: 10px;
    background-color: white;
    line-height: 40px;
    font-weight: bold;

  }
  .total{
    display: flex;
    justify-content: space-around;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    color: red;
  }
  .changeColor{
    color:#aaa;
  }
  .changeWidth{
    width: 70%;
  }
  .changeFont{
    font-weight: bold;
    display: inline-block;
  }
  .detail_info{
    padding: 10px;
    margin-bottom: 10px;
    line-height: 45px;
    background-color: white;
    text-align: left;
    font-size: 14px;
  }
  .detail_list{
    display: flex;
  }


</style>
