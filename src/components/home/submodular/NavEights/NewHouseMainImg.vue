<template>
    <div class="pic_imgs">
      <header>
        <div @click="brand">
          <span><</span>
        </div>
        <div>全部</div>
      </header>
      <div class="content">
        <div class="imgs">
          <img :src='"http://www.fooju.cn/" +item.pic' alt="" class="img" v-for="item in pic" >
        </div>
      </div>
    </div>
</template>
<script>
    export default{
      data () {
        return {
          pic: []
        }
      },
      mounted () {
        this.getDate()
      },
      methods: {
        brand () {
          this.$router.push('/newHouseMain')
        },
        getDate () {
          this.pic = this.$route.query.pic
          console.log(this.pic)
          console.log(this.pic.length)
          var imgs = document.querySelector('.imgs')
          var img = document.querySelectorAll('.img')
          imgs.clientWidth *= this.pic.length
          for (var i = 0; i < img.length; i++) {
            img[i].clientWidth = imgs.clientWidth / this.pic.length
          }
        }
      }
    }
</script>
<style>
  .img{
    width: 50%;
    height: 100%;
  }
  .imgs{
    width: 100%;
    height: 50%;
    position: absolute;
    left: 0;
    top: 0;
    bottom:0;
    margin: auto;
  }
  html,body,#app{
    height: 100%;
  }
  .pic_imgs{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .content{
    width: 100%;
    flex: 1;
    background-color: black;
    position: relative;
    overflow: auto;
  }
  header{
    width: 100%;
    height: 45px;
    line-height: 45px;
    font-size:16px ;
    text-align: center;
    display: flex;
  }
  header>div:nth-of-type(1){
    width: 40px;
  }
  header>div:nth-of-type(2){
   flex: 1;
  }


</style>
