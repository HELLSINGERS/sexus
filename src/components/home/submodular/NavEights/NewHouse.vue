<template >
  <div >
    <div class="operation">
      <div class="operation_nav">
        <div @click="select('区域')">
          <span class="big">区域</span>
          <img src="../iconSmall/向下.png" alt="" class="img_small">
        </div>
        <div @click="select('价格')">
          <span class="big">价格</span>
          <img src="../iconSmall/向下.png" alt="" class="img_small">
        </div>
        <div @click="select('房型')">
          <span class="big">房型</span>
          <img src="../iconSmall/向下.png" alt="" class="img_small">
        </div>
        <div @click="select('类型')">
          <span class="big">类型</span>
          <img src="../iconSmall/向下.png" alt="" class="img_small">
        </div>
      </div>

      <!-- tab-container -->
      <div id="nav_content">
        <div v-for="item in area" class="areas nav_padding" v-show="content === '区域'">
          <p @click="region(item)">{{item}}</p>
        </div>
        <div v-for="item in price" class="areas nav_padding" v-show="content === '价格'">
          <p @click="prices(item)">{{item}}</p>
        </div>
        <div class="areas" v-show="content === '房型'">
          <!--<div v-for="item in houseType.content"  >-->
          <!--<label class="houses"><input type="checkbox" :value="item">{{item}}</label>-->
          <!--</div>-->
          <mt-checklist
            v-model="value1"
            :options="houseType">
          </mt-checklist>
          <button @click="house()" class="css_button"> 确定</button>
        </div>
        <div class="more" v-show="content === '类型'">
          <mt-checklist
            v-model="value2"
            :options="newType">
          </mt-checklist>
          <button @click="newTypes()" class="css_button"> 确定</button>
        </div>
      </div>
    </div>
    <new-search></new-search>
    <carousel></carousel>
    <ul id="nav" >
      <li @click="navNone('区域')">
        <span id="nav_name1">区域</span>
        <img src="../iconSmall/向下.png" alt="" class="img_small">
      </li>
      <li @click="navNone('价格')">
        <span >价格</span>
        <img src="../iconSmall/向下.png" alt="" class="img_small">
      </li>
      <li @click="navNone('房型')">
        <span >房型</span>
        <img src="../iconSmall/向下.png" alt="" class="img_small">
      </li>
      <li @click="navNone('类型')">
        <span >类型</span>
        <img src="../iconSmall/向下.png" alt="" class="img_small">
      </li>
    </ul>

    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list" class="list_content" @click="goMain(item.id)">
        <div class="img_list">
          <img :src="'http://www.fooju.cn/' + item.pic" alt="" >
        </div>
        <div class="item_info">
          <span class="title">{{item.title}}</span>
          <div class="room">{{item.address}}</div>
          <span class="item_red">均价{{item.average_price}}元/㎡</span>
        </div>
      </li>
      <div class="bottom_load">
        <mt-spinner  type="snake" color="#26a2ff" :size="20" >
        </mt-spinner>
        <div>正在加载房源</div>
      </div>
    </ul>

  </div>
</template>
<script>
  import carousel from '../commons/Carousel.vue'
  import newSearch from '../commons/NewSearch.vue'
  import {NewList, area, direction, builtArea, label, age, floor, decoration, dianti, type} from '../../../../api/config/config'
  export default{
    data () {
      return {
        list: [],
        searchs: '',
        num: 1,
        size: 5,
        village: '',
        r_id: '',
        house_property: '',
        average_price: '',
        value: '',
        value1: [],
        selected: '',
        area: area,
        content: '',
        price: ['不限', '4000以下', '4000-6000', '6000-7000', '7000-8000', '8000-10000', '10000以上'],
        directionsss: '',
        builtAreasss: '',
        labelsss: '',
        agesss: '',
        floorsss: '',
        decorationsss: '',
        diantisss: '',
        typesss: '',
        houseType: ['不限', '待定', '期房', '现房', '商品房'],
//        houseType: [{house_id: 0, content: '不限'}, {house_id: 0, content: '待定'}, {house_id: 0, content: '期房'}, {house_id: 0, content: '现房'}, {house_id: 0, content: '现房'}, {house_id: 0, content: '商品房'}],
        direction: direction,
        builtArea: builtArea,
        label: label,
        age: age,
        floor: floor,
        decoration: decoration,
        dianti: dianti,
        type: type,
        directions: [],
        builtAreas: [],
        labels: [],
        ages: [],
        floors: [],
        decorations: [],
        diantis: [],
        types: [],
        aaa: 0,
        value2: [],
        newType: ['不限', '高层', '多层', '小高层', '联排别墅', '双拼别墅', '独栋别墅'],
        building_type: ''
      }
    },
    mounted () {
      this.getData()
    },
    components: {
      carousel: carousel,
      newSearch: newSearch
    },
    methods: {
      goMain (id) {
        sessionStorage.setItem('newHouseID', id)
        this.$router.push({path: '/newHouseMain'})
      },
      suress () {
        this.displays()
        this.directionsss = this.directions.toString()
        this.builtAreasss = this.builtAreas.toString()
        this.labelsss = this.labels.toString()
        this.agesss = this.ages.toString()
        this.floorsss = this.floors.toString()
        this.decorationsss = this.decorations.toString()
        this.diantisss = this.diantis.toString()
        this.typesss = this.types.toString()
        this.getData()
      },
      nullss () {
        var borders = document.querySelectorAll('.borders')
        var i = borders.length
        while (i--) {
          borders[i].classList.remove('active')
        }
        this.directions = []
        this.builtAreas = []
        this.labels = []
        this.ages = []
        this.floors = []
        this.decorations = []
        this.diantis = []
        this.types = []
      },
      directionss (val, num) {
        this.aaa++
        var a = this.aaa %= 2
        var borders1 = document.querySelectorAll('.borders1')
        if (a) {
          borders1[num].classList.add('active')
          if (!this.contains(this.directions, val)) {
            this.directions = val
          }
        } else {
          borders1[num].classList.remove('active')
        }
      },
      builtAreass (val, num) {
        this.aaa++
        var a = this.aaa %= 2
        var borders2 = document.querySelectorAll('.borders2')
        if (a) {
          borders2[num].classList.add('active')
          if (!this.contains(this.builtAreas, val)) {
            this.builtAreas.push(val)
          }
        } else {
          borders2[num].classList.remove('active')
        }
      },
      labelss (val, num) {
        this.aaa++
        var a = this.aaa %= 2
        var borders3 = document.querySelectorAll('.borders3')
        if (a) {
          borders3[num].classList.add('active')
          if (!this.contains(this.labels, val)) {
            this.labels.push(val)
          }
        } else {
          borders3[num].classList.remove('active')
        }
      },
      agess (val, num) {
        this.aaa++
        var a = this.aaa %= 2
        var borders4 = document.querySelectorAll('.borders4')
        if (a) {
          borders4[num].classList.add('active')
          if (!this.contains(this.ages, val)) {
            this.ages.push(val)
          }
        } else {
          borders4[num].classList.remove('active')
        }
      },
      floorss (val, num) {
        this.aaa++
        var a = this.aaa %= 2
        var borders5 = document.querySelectorAll('.borders5')
        if (a) {
          borders5[num].classList.add('active')
          if (!this.contains(this.floors, val)) {
            this.floors.push(val)
          }
        } else {
          borders5[num].classList.remove('active')
        }
      },
      decorationss (val, num) {
        this.aaa++
        var a = this.aaa %= 2
        var borders6 = document.querySelectorAll('.borders6')
        if (a) {
          borders6[num].classList.add('active')
          if (!this.contains(this.decorations, val)) {
            this.decorations.push(val)
          }
        } else {
          borders6[num].classList.remove('active')
        }
      },
      diantiss (val, num) {
        this.aaa++
        var a = this.aaa %= 2
        var borders7 = document.querySelectorAll('.borders7')
        if (a) {
          borders7[num].classList.add('active')
          if (!this.contains(this.diantis, val)) {
            this.diantis.push(val)
          }
        } else {
          borders7[num].classList.remove('active')
        }
      },
      typess (val, num) {
        this.aaa++
        var a = this.aaa %= 2
        var borders8 = document.querySelectorAll('.borders8')
        if (a) {
          borders8[num].classList.add('active')
          if (!this.contains(this.types, val)) {
            this.types.push(val)
          }
        } else {
          borders8[num].classList.remove('active')
        }
      },
      loadMore () {
        this.loading = true
        this.size += 5
        this.getData()
        this.loading = false
      },
      getData () {
        var self = this
        this.village = this.$route.query.village
        NewList({building_type: this.building_type, house_property: this.house_property, built_area: this.builtAreasss, label: this.labelsss, age: this.agesss, floor_type: this.floorsss, decoration: this.decorationsss, dianti: this.diantisss, type: this.typesss, direction: this.directionsss, bedroom: this.bedroom, page_num: this.num, page_size: this.size, village: this.village, r_id: this.r_id, average_price: this.average_price}).then(function (res) {
          self.list = res.data.data
        })
      },
      displays () {
        var navs = document.querySelector('#nav')
        var operation = document.querySelector('.operation')
        navs.style.display = 'flex'
        operation.style.display = 'none'
      },
      region (item) {
        this.displays()
        var navName1 = document.getElementById('nav_name1')
        if (item !== '不限') {
          navName1.innerText = item
        } else {
          navName1.innerText = '区域'
        }
        if (item === this.area[0]) {
          this.r_id = ''
        } else if (item === this.area[1]) {
          this.r_id = 7
        } else if (item === this.area[2]) {
          this.r_id = 5
        } else if (item === this.area[3]) {
          this.r_id = 4
        } else if (item === this.area[4]) {
          this.r_id = 3
        } else if (item === this.area[5]) {
          this.r_id = 2
        } else if (item === this.area[6]) {
          this.r_id = 1
        }
        this.getData()
      },
      prices (item) {
        this.displays()
        if (item === this.price[0]) {
          this.this.average_price = ''
        } else if (item === this.price[1]) {
          this.average_price = '0-4000'
        } else if (item === this.price[2]) {
          this.average_price = '4000-6000'
        } else if (item === this.price[3]) {
          this.average_price = '6000-7000'
        } else if (item === this.price[4]) {
          this.average_price = '7000-8000'
        } else if (item === this.price[5]) {
          this.average_price = '8000-10000'
        } else if (item === this.price[6]) {
          this.average_price = '10000-99999999'
        }
        this.getData()
      },
      contains (arr, obj) {
        var i = arr.length
        while (i--) {
          if (arr[i] === obj) {
            return true
          }
        }
        return false
      },
      house () {
        this.displays()
        console.log(this.value1)
        if (this.contains(this.value1, this.houseType[0])) {
          this.house_property = []
        } else if (this.contains(this.value1, this.houseType[1])) {
          this.house_property = '待定'
        } else if (this.contains(this.value1, this.houseType[2])) {
          this.house_property = '期房'
        } else if (this.contains(this.value1, this.houseType[3])) {
          this.house_property = '现房'
        } else if (this.contains(this.value1, this.houseType[4])) {
          this.house_property = '商品房'
        }
        this.getData()
      },
      newTypes () {
        this.displays()
        console.log(this.value2)
        if (this.contains(this.value2, this.newType[0])) {
          this.building_type = []
        } else if (this.contains(this.value2, this.newType[1])) {
          this.building_type = '高层'
        } else if (this.contains(this.value2, this.newType[2])) {
          this.building_type = '多层'
        } else if (this.contains(this.value2, this.newType[3])) {
          this.building_type = '小高层'
        } else if (this.contains(this.value2, this.newType[4])) {
          this.building_type = '联排别墅'
        } else if (this.contains(this.value2, this.newType[5])) {
          this.building_type = '双拼别墅'
        } else if (this.contains(this.value2, this.newType[6])) {
          this.building_type = '独栋别墅'
        }
        this.getData()
      },
      navNone (val) {
        var navs = document.querySelector('#nav')
        var operation = document.querySelector('.operation')
//        var icon = document.querySelectorAll('.img_small')
//        console.log(icon[0].src)
//        if (val === '区域') {
//          icon[0].src = '../iconSmall/向上收起.png'
//          console.log(icon[0].src)
//          icon[4].src = '../iconSmall/向上收起.png'
//        }
        navs.style.display = 'none'
        operation.style.display = 'block'
        this.content = val
      },
      select (val) {
        this.content = val
      }
    }
  }
</script>
<style>
  .list_content{
    height: 90px;
    border-bottom: 1px solid #ccc;
    padding: 10px ;
    display: flex;
    font-size: 12px;

  }
  .list_content .img_list{
    width: 120px;
    height: 90px;
  }
  .list_content .img_list img{
    width: 120px;
    height: 90px;
  }
  .list_content .item_info{
    flex: 1;
    line-height: 30px;
  }
  .list_content .item_info .title{
    font-weight: bold;
    color: #555;
    font-size: 14px;
    word-break:keep-all;           /* 不换行 */
    white-space:nowrap;          /* 不换行 */
    overflow:hidden;               /* 内容超出宽度时隐藏超出部分的内容 */
    text-overflow:ellipsis;
  }
  .list_content .item_info .room{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    width: 100%;
  }
  .list_content .item_info  .item_red{
    color: #e00;
    font-weight: bold;
    font-size: 14px;
  }
  .bottom_load{
    text-align: center;
    color:#26a2ff;
    padding: 5px 20px;
    display: flex;
    justify-content: space-around;
  }
  .bottom_load>div{
    line-height: 40px;
  }
  #nav{
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }
  #nav>li{
    /*width: 25%;*/
    flex: 1;
    list-style: none;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
  }
  .nav_padding{
    padding: 10px 0px;
  }
  .areas{
    border-bottom: 1px solid #ddd;
  }
  .operation{
    position: fixed;
    z-index: 1;
    left: 0px;
    top: 0px;
    background-color: white;
    width: 100%;
    display: none;
  }
  .operation_nav{
    display: flex;
    justify-content: space-around;
    list-height: 50px;
    border-bottom: 1px solid #ccc;
  }
  .big{
    font-size: 14px;
    line-height: 50px;
  }
  .img_small{
    width: 12px;
    height: 12px;
  }
  .houses{
    line-height: 50px;
  }
  .css_button{
    width: 100%;
    height: 50px;
    line-height: 50px;
    color: white;
    background-color: #4aa;
  }
  .more{
    padding: 5px;
    height: 400px;
    background-color: white;
    position: relative;
    text-align: left;
    overflow: auto;
  }
  .more_list{
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    font-size: 14px;
  }
  .more_item{
    font-weight: bold;
    margin: 10px;
  }
  .more_item2{
    display: inline-block;
    font-size: 12px;
  }
  .more_bottom{
    margin-bottom: 60px;
  }
  .borders{
    border: 1px solid #601986;
    width: 80px;
    text-align: center;
    display: inline-block;
    margin:3px ;

  }
  .borders.active{
    background-color: #601986;
    color: white;
  }
  .more .buttons{
    position: fixed;
    top: 400px;
    left: 0;
    width: 100%;
  }
  .null,.sure{
    width: 100%;
    text-align: center;
    line-height: 30px;
    font-size: 14px;
    border: 0;
    border-radius: 5px;
  }
  .null{
    color: #999;
    background-color: white;
  }
  .sure{
    background-color:#601986;
    color:white;
  }







</style>
