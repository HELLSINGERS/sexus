<template>
    <div class="toolbroker">
      <header class="search">
        <router-link to="/tool" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <mt-search v-model="value" placeholder="请输入经纪人姓名、电话"></mt-search>
      </header>
      <div class="lists_header">
        <div class="header_content">
          <ul class="header_ul">
            <li><span>区域</span></li>
            <li><span>排序</span></li>
          </ul>
        </div>
      </div>
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
  .toolbroker .search{
    display: flex;
    height: 52px;
    border-bottom: 1px solid gainsboro;
  }
  .toolbroker .search .mint-button{
    flex: 1;
    margin-top: 5px;
    height: 41px;
    border: none;
    text-align: center;
  }
  .toolbroker .search .mint-button .mintui {
     font-size: 25px;
     font-style: normal;
   }
  .toolbroker .search .mint-button--default {
    color: #656b79;
    background-color: white;
    box-shadow: none;
  }
  .toolbroker .search .mint-button--normal {
    display: inline-block;
    padding: 0 0 0 15px;
  }
  .toolbroker .search .mint-search{
    flex: 9;
    background-color: white;
    height: 52px;
  }

  .toolbroker .search .mint-searchbar-inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border-radius: 20px;
    background-color: #efeded;
    flex: 1;
    height: 25px;
    padding: 4px 6px;
  }
  .toolbroker .search .mint-searchbar-inner .mintui-search {
    font-size: 18px;
    color: #a3a3a3;
  }
  .toolbroker .search .mint-searchbar-core {
    border: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: 0;
    background-color: #efeded;
  }
  .toolbroker .mint-searchbar {
    position: relative;
    align-items: center;
    box-sizing: border-box;
    display: flex;
    padding: 8px 30px 8px 5px;
    background-color: white;
    z-index: 1;
  }
</style>
