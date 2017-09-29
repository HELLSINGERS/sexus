<template>
    <div class="tool_examine">
      <header class="search">
        <router-link to="/tool" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-search v-model="value" placeholder="请输入经纪人姓名、电话"></mt-search>
      </header>
      <section class="examine_box">
        <ul>
          <li>
            <div class="dd_top">
              <div class="top_left">
                <p class="left_name">南门外店</p>
                <p class="left_title">这是一个静态的dddd</p>
              </div>
              <div class="top_right"><span class="right_icon">400km</span></div>
            </div>
            <div class="dd_bottom">
              <span class="bottom_left"><span class="bbotton">到这去</span></span>
              <span class="bottom_right"><span class="bbotton">电话</span></span>
            </div>
          </li>
        </ul>
      </section>
    </div>
</template>
<script>
  export default {}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .tool_examine .search{
    display: flex;
    height: 52px;
    border-bottom: 1px solid gainsboro;
  }
  .tool_examine .search .mint-button{
    flex: 1;
    margin-top: 5px;
    height: 41px;
    border: none;
    text-align: center;
  }
  .tool_examine .search .mint-button .mintui {
    font-size: 25px;
    font-style: normal;
  }
  .tool_examine .search .mint-button--default {
    color: #656b79;
    background-color: white;
    box-shadow: none;
  }
  .tool_examine .search .mint-button--normal {
    display: inline-block;
    padding: 0 0 0 15px;
  }
  .tool_examine .search .mint-search{
    flex: 9;
    background-color: white;
    height: 52px;
  }
  .tool_examine .search .mint-searchbar-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 20px;
    background-color: #efeded;
    flex: 1;
    height: 25px;
    padding: 4px 6px;
  }
  .tool_examine .search .mint-searchbar-inner .mintui-search {
    font-size: 18px;
    color: #a3a3a3;
  }
  .tool_examine .search .mint-searchbar-core {
    border: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: 0;
    background-color: #efeded;
  }
  .tool_examine .mint-searchbar {
    position: relative;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    padding: 8px 30px 8px 5px;
    background-color: white;
    z-index: 1;
  }
  .tool_examine .examine_box {
    width: 100%;
  }
  .tool_examine .examine_box ul li .dd_top {
    width: 100%;
    display: -webkit-box;
    margin-bottom: 10px;
  }
  .tool_examine .examine_box ul li .dd_top .top_left {
    -webkit-box-flex: 1;
    margin: 5px 10px;
  }
  .tool_examine .examine_box ul li .dd_top .top_left .left_title {
    color: #999;
    font-size: .12rem;
    margin-top: 10px;
  }
  .tool_examine .examine_box ul li .dd_top .top_right {
    color: #999;
    width: 80px;
    height: 25px;
    margin-right: 20px;
    margin-top: 20px;
    line-height: 25px;
    background:  url('./images/download-pointer.png') no-repeat 0.5rem;
  }
  .tool_examine .examine_box ul li .dd_top .top_right .right_icon {
    width: 50px;
    float: right;
  }
  .tool_examine .examine_box ul li .dd_bottom {
    width: 100%;
    border-bottom: 1px solid gainsboro;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
  }
  .tool_examine .examine_box ul li .dd_bottom .bottom_left {
    text-align: center;
    height: 50px;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
    background: #fff url('./images/download-point.png') no-repeat 3.5rem;
    background-size: 1.3rem 1.3rem;
  }
  .tool_examine .examine_box ul li .dd_bottom span {
    display: block;
    -webkit-box-flex: 1;
  }
  .tool_examine .examine_box ul li .dd_bottom .bottom_right {
    text-align: center;
    height: 50px;
    border-top: 1px solid #eee;
    border-right: 1px solid #eee;
    background: #fff url('./images/download-cp.png') no-repeat 3.5rem;
    background-size: 1.3rem 1.3rem;
  }
  .bbotton{
    height: 50px;
    line-height: 50px;
  }
</style>
