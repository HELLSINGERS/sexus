<template>
  <div>
    <ul class="navEight" @click="bound_to">
      <li>
        <a href="#secondHand">
          <img src="./iconfont/二手房.png" alt="">
          <span>二手房</span>
        </a>
      </li>
      <li>
        <a href="#newHOuse">
          <img src="./iconfont/新房.png" alt="">
          <span>新房</span>
        </a>
      </li>
      <li>
        <a href="#renting">
          <img src="./iconfont/租房.png" alt="">
          <span>租房</span>
        </a>
      </li>
      <li>
        <a href="#mapHouse">
          <img src="./iconfont/地图找房.png" alt="">
          <span>地图找房</span>
        </a>
      </li>
      <li>
        <a href="#seekStore">
          <img src="./iconfont/门店查询.png" alt="">
          <span>查门店</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="./iconfont/小区找房.png" alt="">
          <span>找小区</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="./iconfont/学区房.png" alt="">
          <span>学区房</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="./iconfont/在线委托.png" alt="">
          <span>在线委托</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    methods: {
      bound_to () {
        var footer = document.querySelector('#footer')
        footer.style.display = 'none'
      }
    }
  }
</script>

<style>
  .navEight{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }
  .navEight>li{
    width: 25%;
    list-style: none;
    margin: 10px 0px;
  }
  .navEight>li>a>span{
    display: block;
    font-size: 14px;
    color: #555;
  }

</style>
