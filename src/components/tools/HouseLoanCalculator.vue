<template>
  <div class="page-navbar">
    <header>
    <router-link to="/tool" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">公积金贷款</mt-tab-item>
      <mt-tab-item id="2">商业贷款</mt-tab-item>
      <mt-tab-item id="3">组合贷款</mt-tab-item>
    </mt-navbar>
    </header>
    <!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <form action="">
          <ul class="page-info">
            <li>
              <span>计算方式：</span>
              <div class="wrap">
                <span id="one" class="fill select" @click="appearone">
                  {{way}}
                </span>
                <ul class="selected" v-show="tt">
                  <!--<li ref="ddd" @click="fillway">面积、单价</li>-->
                  <!--<li>按贷款总额</li>-->
                  <li v-for="(item, index) in lis" ref="ways" @click="fillway(index)">
                    {{item}}
                  </li>
                </ul>
              </div>
            </li>
            <li v-show="!total">
              <span>单价：</span>
              <span class="fill"><input type="text" placeholder="请输入大于0的数字">元/平米</span>
            </li>
            <li v-show="!total">
              <span>面积：</span>

              <span class="fill"><input type="text" placeholder="请输入大于0的数字">平米</span>
            </li>
            <li v-show="!total">
              <span>按揭成数</span>
              <div class="wrap">
              <span class="fill select" @click="appeartwo">{{part}}
              </span>
                <ul class="selected" v-show="yy">
                  <li v-for="(item, index) in lis1" ref="parts" @click="fillpart(index)">
                    {{item}}
                  </li>
                </ul>
              </div>
            </li>
            <li v-show="total"><span>贷款总额：</span>
              <span class="fill">
                <input type="text" placeholder="请输入大于0的数字">万元</span>
            </li>
            <li>
              <span>贷款年限：</span>
              <div class="wrap">
              <span class="fill select" @click="appearthr">{{time}}
              </span>
                <ul class="selected" v-show="uu">
                  <li v-for="(item, index) in lis2" ref="time" @click="filltime(index)">
                    {{item}}
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span>贷款利率：</span>
              <span class="fill"><input  type="text">%</span>
            </li>
            <li>
              <span>还款方式：</span>
              <div class="wrap">
              <span class="fill select" @click="appearfour">{{way2}}
              </span>
              <ul class="selected" v-show="ii">
                <li v-for="(item, index) in lis3" ref="ways2" @click="fillway2(index)">
                  {{item}}
                </li>
              </ul>
              </div>
            </li>
          </ul>
        </form>
        <mt-button id="bottom-btn" type="danger">开始计算</mt-button>
        <p>税费计算器仅供参考计算，实际有银行评估</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">

        <mt-button id="bottom-btn" type="danger">开始计算</mt-button>
        <p>税费计算器仅供参考计算，实际有银行评估</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <form action="">
          <ul>
            <li>
              <span>商业性：</span>
              <span><input type="text" placeholder="请输入大于0的数字">元</span>
            </li>
            <li>
              <span>公积金：</span>
              <span><input type="text" placeholder="请输入大于0的数字">平米</span>
            </li>
            <li>
            <span>贷款年限：</span>
            <span>
                <ul></ul>
              </span>
          </li>
            <li>
              <span>商业</span>
              <span>
                <input type="text">%
              </span>
            </li>
            <li>
              <span>公积金：</span>
              <span>
                <input type="text">%
              </span>
            </li>
            <li>
              <span>还款方式：</span>
              <span>
                <ul></ul>
              </span>
            </li>
          </ul>
        </form>
        <mt-button type="danger">开始计算</mt-button>
        <p>税费计算器仅供参考计算，实际有银行评估</p>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: 'page-navbar',
    data () {
      return {
        way: '面积、单价',
        part: '6.5成',
        time: '30年（360期）',
        way2: '等额本金',
        selected: '1',
        total: false,
        tt: false,
        yy: false,
        uu: false,
        ii: false,
        lis: ['面积、单价', '按贷款总额'],
        lis1: ['9成', '8成', '7成', '6.5成', '6成', '5成', '4成', '3成', '2成'],
        lis2: ['30年（360期）', '25年（300期）', '20年（240期）', '15年（180期）', '10年（120期）', '5年（60期）', '1年（12期）'],
        lis3: ['等额本金', '等额本息']
      }
    },
    methods: {
      appearone () {
        this.tt = !this.tt
      },
      appeartwo () {
        this.yy = !this.yy
      },
      appearthr () {
        this.uu = !this.uu
      },
      appearfour () {
        this.ii = !this.ii
      },
      fillway (index) {
        this.way = this.$refs.ways[index].innerHTML
        if (index === 1) {
          this.total = true
        } else if (index === 0) {
          this.total = false
        }
        this.appearone()
      },
      fillpart (index) {
        this.part = this.$refs.parts[index].innerHTML
        this.appeartwo()
      },
      filltime (index) {
        this.time = this.$refs.time[index].innerHTML
        this.appearthr()
      },
      fillway2 (index) {
        this.way2 = this.$refs.ways2[index].innerHTML
        this.appearfour()
      }
    }
  }
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .mint-button--default {
    color: #656b79;
    background-color: white;
    box-shadow: none;
  }
  ul li .wrap{
    position: absolute;
    right: 10px;
  }
  ul li .wrap .selected{
    position: relative;
  }
  .selected li{
    text-align: center;
  }
  p{
    width: 100%;
    text-align: center;
    margin: 20px auto;
  }
  input{
    outline: none;
    border: none;
    font-size: 18px;
    text-align: right;
  }
  header{
    display: flex;
    border-bottom: 1px solid gainsboro;
  }
  .mint-navbar{
    width: 90%;
    padding-right: 40px;
  }
  .mint-tab-item-label{
    font-size: 18px;
  }
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid red;
    color: red;
    margin-bottom: 3px;
  }
  ul{
    list-style: none;
  }
  li .fill.select{
    padding-right: 15px;
    background-size: .075rem .125rem;
    background: url("./images/download-16.png") no-repeat 100%;
    background-size: 10px;
  }
  .page-info>li {
    padding: 10px;
    display: flex;
    height: 35px;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    line-height: 35px;
  }
  .selected{
    display: block;
    background-color: whitesmoke;
    box-shadow: 0 0 5px grey;
    z-index: 10;
  }
  #bottom-btn{
    width: 100%;
    margin-top: 50px;
  }
</style>
