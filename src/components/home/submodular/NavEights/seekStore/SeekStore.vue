<template>
    <div class="seek">
      <header>
        <a href="#"><</a>
        <a href="#seekSearch">
          <input type="text" placeholder="请输入门店名称" @click="">
        </a>
      </header>
      <ul
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
        <li v-for="item in info" class="store">
          <a class="padding" href="#seekStoreMain" @click="storeMain(item.id)">
            <div>{{item.name}}</div>
            <div class="address">
              <div class="color">{{item.address}}</div>
              <div class="distance">
                <img src="../../iconSmall/地址.png" alt="">
                <span></span>km
              </div>
            </div>
          </a>
          <div class="button">
            <div class="goto">
              <img src="../../iconSmall/到这去图标.png" alt="">
              到这去
            </div>
            <div class="phone">
              <img src="../../iconSmall/电话.png" alt="">
              电话
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
  import {StoreLists} from '../../../../../api/config/config'
  export default{
    data () {
      return {
        info: [],
        num: 1,
        size: 10,
        village: ''
      }
    },
    mounted () {
      this.getDate()
    },
    methods: {
      storeMain (id) {
        sessionStorage.setItem('storeMainId', id)
      },
      loadMore () {
        this.loading = true
        this.size += 10
        this.getDate()
        this.loading = false
      },
      getDate () {
        var self = this
        this.village = this.$route.query.village
        StoreLists({page_num: this.num, page_size: this.size, name: this.village}).then(function (res) {
          self.info = res.data.data
//          console.log(self.info)
        })
      }
    }
  }
</script>
<style>
  header{
    height: 50px;
    line-height: 50px;
    padding:0 10px;
    display: flex;
    background-color: white;
    margin-bottom: 10px;
    font-size: 18px;
  }
  header a:nth-of-type(2){
    width: 80%;
  }
  header input{
    width: 100%;
    height: 30px;
    border-radius: 15px;
    border:none;
    padding-left:5px ;
    margin: 10px;
    background-color: #f1f1f1;
  }
  .padding{
    display: block;
    margin: 10px
  }
  .button{
    display: flex;
  }
  .button>*{
    width: 50%;
    text-align: center;
    line-height: 50px;
    height: 50px;
    border: 1px solid #ddd;
  }
  .address {
    display: flex;
    line-height: 20px;
  }
  .address .color{
    color: #888;
    width: 75%;
    font-size: 12px;
  }
  .store{
    background-color: white;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .seek{
    background-color: #eee;
    font-size: 14px;
    color: #333;
    text-align: left;
  }

</style>
