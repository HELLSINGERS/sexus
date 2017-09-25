<template>
    <div>
      <div class="header" >
        <a href="#" >
          <img src="../iconSmall/向左 (1).png" alt="" class="header_img">
        </a>
        <a class="header_search" href="#SearchMain">
          <input type="text" placeholder="        请输入小区或商圈名" class="gg_input">
          <img src="../iconSmall/搜索.png" alt="" class="gg_img">
        </a>
        <a href="#mapHouse">
          <img src="../iconSmall/地图.png" alt="" class="header_img">
        </a>
      </div>
    </div>
</template>
<script>
  export default{
  }
</script>
<style>
  .header{
    display: flex;
    justify-content: space-around;
    height: 40px;
    line-height: 40px;

    background-color: #f1f1f1;
  }
  .header_search{
    border-radius: 10px;
    width:200px;
    margin: 0;
    padding: 0px;
    position: relative;

  }
  .header_img{
    width: 30px;
    height: 30px;
    padding: 5px;
  }
  .gg_input{
    width:200px;
    border-radius: 15px;
    line-height: 30px;
    height: 30px;
    border: 1px solid #999;

  }
  .gg_img{
    position: absolute;
    top:15px;
    left:10px;
    width: 14px;
    height: 14px;

  }
</style>
