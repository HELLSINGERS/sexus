<template>
  <div>
    <div class="header">
      <div class="header_search" >
        <input type="text" placeholder="       请输入小区或商圈名" v-model="value" class="gg_input" @change="searchss">
        <img src="../iconSmall/搜索.png" alt="" class="gg_img">
      </div>
      <a class="no_sure" href="#newHouse">取消</a>
    </div>
    <div class="search_number" style="display: none">
      <div v-for="item in number" class="search_numbers" @click="search_name(item.name)" >
        <p >{{item.name}}</p>
        <span>{{item.count}}套</span>
      </div>
    </div>
    <div class="history">
      <h4>历史搜索</h4>
      <div v-for="item in store">
        <p >{{item.name}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import {VillageFind} from '../../../../api/config/config'
  export default{
    data () {
      return {
        number: [],
        value: '',
        store: []
      }
    },
    created () {
      this.getdata()
    },
    methods: {
      search_name (val) {
        this.$router.push({path: '/newHouse', query: {village: val}})
//        console.log(val)
        this.store.push(val)
        console.log(this.store)
      },
      getdata () {
        var self = this
        VillageFind({type: 'used', name: this.value}).then(function (res) {
          self.number = res.data.data
          console.log(self.number)
        })
      },
      searchss () {
        var search = document.querySelector('.search_number')
        var imgs = document.querySelector('.gg_img')
        imgs.style.display = 'none'
        search.style.display = 'block'
        this.getdata()
      }
    }
  }
</script>
<style>

  .header{
    line-height: 40px;
    height: 40px;
    padding: 10px;
    position: relative;
  }
  .no_sure{
    width: 60px;
    position: absolute;
    top:10px;
    left:300px;
    color: #999;
  }
  .header_search {
    border-radius: 10px;
    width: 280px;
    margin: 0;
    padding: 0px;

  }
  .gg_input{
    width:280px;
    border-radius: 15px;
    line-height: 30px;
    height: 30px;
    border: 1px solid #999;
    outline: none;
  }
  .gg_img{
    position: absolute;
    top:24px;
    left:20px;
    width: 14px;
    height: 14px;

  }
  .search_number{
    height: 400px;
    overflow: auto;
    line-height: 40px;
    font-size: 13px;
    border-bottom: 1px solid #bbb;
    padding-left: 20px;
    text-align: left;
    box-shadow: 0px 3px 5px #bbb;
    position: fixed;
    top: 60px;
    left: 0px;
    width: 100%;
    z-index: 1;
    background-color: white;

  }
  .search_numbers{
    display: flex;
    border-bottom: 1px solid  #bbb;
  }
  .search_numbers p{
    width: 80%;
  }
  .search_numbers span{
    flex: 1;
    text-align: center;
  }

</style>
