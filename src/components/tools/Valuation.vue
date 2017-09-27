<template>
    <div class="info">
      <mt-header title="房屋估价">
        <router-link to="/tool" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>
      <section>
        <form action="">
        <ul class="house-info">
          <li><span>小区：</span><input type="text" placeholder="请输入小区"></li>
          <li class="house-style"><span>户型：</span>
            <input class="sinput" type="text" placeholder="几"><span>室</span>
            <input class="sinput" type="text" placeholder="几"><span>厅</span>
          </li>
          <li><span>面积：</span><input type="text" placeholder="请输入面积"></li>
          <li><span>朝向：</span><input type="text" placeholder="请输入朝向"></li>
          <li><span>楼层：</span><input type="text" placeholder="请输入楼层"></li>
          <li><span>总楼层：</span><input type="text" placeholder="请输入总楼层"></li>
        </ul>
        <ul class="owner-info">
          <li><span>称呼：</span><input type="text" placeholder="如何称呼-先生/女士"></li>
          <li><span>联系方式：</span><input type="text" placeholder="请输入联系方式"></li>
          <li><span>客服电话：</span><span id="tel">400-898-1018</span></li>
          <li><span>备注：</span><input type="text" placeholder="请输入备注"></li>
        </ul>
        </form>
      </section>
      <mt-button type="bottom-btn">马上提交</mt-button>
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
  .house-info, .owner-info{
    list-style: none;
  }
  .owner-info {
    margin-top: 40px;
  }
  header span {
    height: 25px;
    font-size: 18px;
  }
  .mint-header{
    background-color: white;
    color: black;
  }
  .house-info li, .owner-info li{
    padding: 10px;
    font-size: 20px;
    line-height: 30px;
    border: 1px solid lightgrey;
  }
  li input{
    float: right;
    display: block;
    text-align: right;
    border: none;
    font-size: 15px;
    height: 30px;
    outline: none;
  }
  .house-style{
    display: flex;
    flex: 10;
  }
  .sinput{
    width: 40px;
    flex: 1;
  }
  #tel{
    float: right;
    color: purple;
  }
  .mint-button{
    border-radius: 0px;
    height: 50px;
  }
  .mint-button--bottom-btn {
    color: #fff;
    background-color: purple;
    width: 100%;
  }
</style>
