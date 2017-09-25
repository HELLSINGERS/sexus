<template>
  <div class="page-swipe">
    <mt-swipe :auto="4000">
      <mt-swipe-item class="slide1">
        <img src="../img1/1.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item class="slide2">
        <img src="../img1/2.jpeg" alt="">
      </mt-swipe-item>
      <mt-swipe-item class="slide3">
        <img src="../img1/3.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
    export default{}
</script>
<style scoped>
  .page-swipe {
    width: 100%;
    height: 260px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
    display: block;
    height: 260px;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
    display: block;
    height: 260px;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
    display: block;
    height: 260px;
  }
  img{
    width: 100%;
    height: 260px;
  }
</style>
