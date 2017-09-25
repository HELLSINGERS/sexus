<template>
  <div class="mapMap">
    <!--<b-map-component></b-map-component>-->
    <div class="header">
      <a href="#" >
        <img src="../iconSmall/向左 (1).png" alt="" class="header_img" @click="bound">
      </a>
      <div class="change">
        <p >二手房</p>
        <p>新房</p>
        <p>租房</p>
      </div>
    </div>
    <div id="allmap" ></div>
    <!--<div v-for="item in numbers" class="map_dot">-->

    <!--</div>-->
  </div>
</template>
<script>
  import {MapMapHouse, mapHouseVillage} from '../../../../api/config/config'
  import BMap from 'BMap'
  export default{
    data () {
      return {
        numbers: [],
        type: 1,
        log: 111.706634,
        lat: 40.796356,
        rank: 12,
        infos: []
      }
    },
    mounted () {
      this.getDate()
    },
    methods: {
      bound () {
        var footer = document.querySelector('#footer')
        footer.style.display = 'block'
      },
      // 编写自定义函数,创建标注
      addMarker (map) {
        var self = this
        console.log(self.numbers.length)
        for (var i = 0; i < self.numbers.length; i++) {
          var marker = new BMap.Marker(new BMap.Point(self.numbers[i].log, self.numbers[i].lat))
          map.addOverlay(marker)
          var label = new BMap.Label(self.numbers[i].id + ',' + self.numbers[i].area + self.numbers[i].count + '套', {offset: new BMap.Size(20, -10)})
          marker.setLabel(label)
          label.addEventListener('click', function (e) {
//            console.log(e.target)
            var id = e.target.content.slice(0, 1)
//            console.log(id)
            self.addMarker2(id)
          })
        }
      },
      // 地图二级跳转请求数据
      addMarker2 (id) {
        var self = this
        mapHouseVillage({type: 1, area: id}).then(function (res) {
          self.infos = res.data.datas
          console.log(self.infos)
          self.getMap2()
        })
      },
      // 地图二级跳转后显示
      getMap2 () {
        var self = this
        // 百度地图API功能
        var map = new BMap.Map('allmap')    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 15)  // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl())   // 添加地图类型控件
        map.setCurrentCity('呼和浩特')          // 设置地图显示的城市 此项是必须设置的
        for (var i = 0; i < self.infos.length; i++) {
          var marker = new BMap.Marker(new BMap.Point(self.infos[i].log, self.infos[i].lat))
          map.addOverlay(marker)
          var label = new BMap.Label(self.infos[i].name + self.infos[i].count + '套', {offset: new BMap.Size(20, -10)})
          marker.setLabel(label)
        }
      },
      getMap () {
        // 百度地图API功能
        var self = this
        var map = new BMap.Map('allmap', {minZoom: 8, maxZoom: 13})    // 创建Map实例
        map.centerAndZoom(new BMap.Point(self.log, self.lat), self.rank) // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl())   // 添加地图类型控件
        map.setCurrentCity('呼和浩特')          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true)   // 启用滚轮放大缩小，默认禁用
        map.enableContinuousZoom()   // 启用地图惯性拖拽，默认禁用
        map.enableDoubleClickZoom()
        self.addMarker(map)
      },
      getDate () {
        var self = this
        MapMapHouse({types: 1, province: '内蒙古', city: '呼和浩特', ad: 'area'}).then(function (res) {
          self.numbers = res.data.datas
          console.log(self.numbers)
          self.getMap()
        })
      }
    }
  }
</script>
<style>
  .header{
    text-align: left;
    height:45px;
    line-height: 45px;
    padding:0 20px;
    position: relative;
  }
  .header_img{
    width: 22px;
    height:22px;
    padding:10px 0;
  }
  .header .change{
    display: flex;
    justify-content: space-around;
    width: 250px;
    position: absolute;
    top:0px;
    left:40px;
  }
  #allmap{
    width: 100%;
    height: 600px;
    position: fixed;
    top:0px;
    left:0;
    overflow: hidden;
  }


</style>
