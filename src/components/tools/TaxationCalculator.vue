<template>
  <div class="page-navbar">
    <header>
      <router-link to="/tool" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">新房</mt-tab-item>
        <mt-tab-item id="2">二手房</mt-tab-item>
      </mt-navbar>
    </header>
    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <form action="">
        <ul class="page-info">
          <li>
            <span>建筑面积：</span>
            <span class="fill"><input  type="text" placeholder="请输入大于0的数字">平米</span>
          </li>
          <li>
            <span>单价：</span>
            <span class="fill"><input  type="text" placeholder="请输入大于0的数字">万元</span>
          </li>
          <li>
            <span>首次购房：</span>
            <div class="wrap">
              <span class="fill select" @click="appearfive">{{TaxBuyHouse}}
              </span>
              <ul class="selected" v-show="hh">
                <li v-for="(item, index) in lis4" ref="BuyHouse" @click="fillhouse(index)">
                  {{item}}
                </li>
              </ul>
            </div>
          </li>
        </ul>
        </form>
        <mt-button id="bottom-btn" type="danger">开始计算</mt-button>
        <p>税费计算器仅供参考计算，实际由银行评估</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <form action="">
          <ul class="page-info">
          <li>
            <span>适用人群：</span>
            <div class="wrap">
              <span class="fill select" @click="appearsort">{{PeopleSort}}
              </span>
              <ul class="selected" v-show="ps">
                <li v-for="(item, index) in lis5" ref="PeopleSorts" @click="fillPs(index)">
                  {{item}}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>房屋类型：</span>
            <div class="wrap">
              <span class="fill select" @click="appearhsort">{{HouseSort}}
              </span>
              <ul class="selected" v-show="hs">
                <li v-for="(item, index) in lis6" ref="HouseSorts" @click="fillhs(index)">
                  {{item}}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>卖房家庭唯一：</span>
            <div class="wrap">
              <span class="fill select" @click="appearfsort">{{FamilySort}}
              </span>
              <ul class="selected" v-show="fs">
                <li v-for="(item, index) in lis7" ref="FamilySorts" @click="fillfs(index)">
                  {{item}}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>距上次交易：</span>
            <div class="wrap">
              <span class="fill select" @click="appeardealtime">{{DealTime}}
              </span>
              <ul class="selected" v-show="dt">
                <li v-for="(item, index) in lis8" ref="DealTimes" @click="filldt(index)">
                  {{item}}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>买房家庭首套：</span>
            <div class="wrap">
              <span class="fill select" @click="appearfh">{{FirstHouse}}
              </span>
              <ul class="selected" v-show="fh">
                <li v-for="(item, index) in lis9" ref="FirstHouses" @click="fillfh(index)">
                  {{item}}
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span>房屋面积：</span>
            <span class="fill"><input  type="text" placeholder="请输入大于0的数字">平米</span>
          </li>
          <li>
            <span>房屋单价：</span>
            <span class="fill"><input  type="text" placeholder="请输入大于0的数字">元</span>
          </li>
          </ul>
        </form>
        <mt-button id="bottom-btn" type="danger">开始计算</mt-button>
        <p>税费计算器仅供参考计算，实际由银行评估</p>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ps: false,
        hs: false,
        fs: false,
        dt: false,
        fh: false,
        hh: false,
        selected: '1',
        TaxBuyHouse: '首套',
        PeopleSort: '买房',
        HouseSort: '商品房',
        FamilySort: '唯一',
        DealTime: '不满2年',
        FirstHouse: '首套',
        lis4: ['首套', '二套', '三套'],
        lis5: ['买房'],
        lis6: ['商品房', '房改房'],
        lis7: ['唯一', '多套'],
        lis8: ['不满2年', '满2年', '2年到5年', '满5年'],
        lis9: ['首套', '二套', '三套以上']
      }
    },
    methods: {
      appearfive () {
        this.hh = !this.hh
      },
      appearsort () {
        this.ps = !this.ps
      },
      appearhsort () {
        this.hs = !this.hs
      },
      appearfsort () {
        this.fs = !this.fs
      },
      appeardealtime () {
        this.dt = !this.dt
      },
      appearfh () {
        this.fh = !this.fh
      },
      fillhouse (index) {
        this.TaxBuyHouse = this.$refs.BuyHouse[index].innerHTML
        this.appearfive()
      },
      fillPs (index) {
        this.PeopleSort = this.$refs.PeopleSorts[index].innerHTML
        this.appearsort()
      },
      fillhs (index) {
        this.HouseSort = this.$refs.HouseSorts[index].innerHTML
        this.appearhsort()
      },
      fillfs (index) {
        this.FamilySort = this.$refs.FamilySorts[index].innerHTML
        this.appearfsort()
      },
      filldt (index) {
        this.DealTime = this.$refs.DealTimes[index].innerHTML
        this.appeardealtime()
      },
      fillfh (index) {
        this.FirstHouse = this.$refs.FirstHouses[index].innerHTML
        this.appearfh()
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
    display: flex;
    border-bottom: 1px solid gainsboro;
  }
  .mint-button--default {
    color: #656b79;
    background-color: white;
    box-shadow: none;
  }
  ul li .wrap{
    position: absolute;
    right: 10px;
    text-align: right;
  }
  .page-info>li {
    padding: 10px;
    display: flex;
    height: 35px;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    line-height: 35px;
  }
  ul li .wrap .selected{
    position: relative;
  }
  .selected li{
    text-align: center;
  }
  .page-navbar input{
    outline: none;
    border: none;
    font-size: 18px;
    text-align: right;
  }
  .mint-navbar{
    width: 90%;
    padding-right: 40px;
  }
  .mint-navbar .mint-tab-item{
    padding: 15px 0 0 0;
  }
  .mint-tab-item-label{
    font-size: 18px;
  }
  li .fill.select{
    padding-right: 15px;
    background-size: .075rem .125rem;
    background: url("./images/download-16.png") no-repeat 100%;
    background-size: 10px;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid red;
    color: red;
    margin-bottom: 3px;
  }
  .selected{
    display: block;
    background-color: whitesmoke;
    box-shadow: 0 0 5px grey;
    z-index: 10;
  }
  ul{
    list-style: none;
  }
  #bottom-btn{
    width: 100%;
    margin-top: 50px;
  }
  p{
    width: 100%;
    text-align: center;
    margin: 20px auto;
  }
</style>
