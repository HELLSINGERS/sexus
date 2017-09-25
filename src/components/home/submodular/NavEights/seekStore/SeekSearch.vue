<template>
  <div>
    <div class="header">
      <div class="header_search" >
        <input type="text" placeholder="   请输入门店名称" v-model="value" class="gg_input"  @change="searchss">
      </div>
      <a class="no_sure" href="#seekStore">取消</a>
    </div>
    <div class="search_number" style="display: none">
      <div v-for="item in number" class="search_numbers" @click="search_name(item.name)" >
        <p >{{item.name}}</p>
      </div>
    </div>
    <div class="history">
      <h4>历史搜索</h4>
      <div v-for="(item, index) in store" class="history_p">
        <p >{{item}}</p>
        <span class="xxx" @click="xxxx(index)">X</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {StoreLists} from '../../../../../api/config/config'
  export default{
    data () {
      return {
        number: [],
        value: '',
        store: []
      }
    },
    created () {
      var a = sessionStorage.getItem('seekStoreName')
      if (a) {
        this.store = a.split(',')
      }
    },
    methods: {
      xxxx (index) {
        var dd = index + 1
        this.store.splice(index, dd)
      },
      search_name (val) {
        this.$router.push({path: '/seekStore', query: {village: val}})
        this.store.push(val)
        var name = this.store.toString()
        sessionStorage.setItem('seekStoreName', name)
      },
      getdata () {
        var self = this
        StoreLists({name: this.value}).then(function (res) {
          self.number = res.data.data
//          console.log(self.number)
        })
      },
      searchss () {
        var search = document.querySelector('.search_number')
        search.style.display = 'block'
        this.getdata()
      }
    }
  }
</script>
<style>
  .history{
    padding: 10px
  }
  .xxx{
    font-size: 16px;
    color:#666;
  }
  .history_p{
    line-height: 20px;
    border-bottom: 1px solid #ddd;
    text-align: left;
    padding: 20px 0;
    font-size: 14px;
    display: flex;
  }
  .history_p p{
    width: 95%;
  }
  .history h4{
    color: #888;
    font-size: 15px;
    text-align: left;

  }
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
    width:240px;
    border-radius: 15px;
    line-height: 30px;
    height: 30px;
    border: 1px solid #999;
    outline: none;
    padding:0 20px;
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
