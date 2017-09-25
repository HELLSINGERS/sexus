<template>
    <div class="baike">
      <header >
        <div class="headers">
          <a href="#newHouseMain"><</a>
          <span>{{info.title}}</span>
        </div>
      </header>
      <div class="topInfo">
        <div>{{info.title}}</div>
        <div class="colors">
          <span>{{info.add_time}}</span>/
          <span>{{info.author}}</span>
        </div>
      </div>
      <div id="main">
      </div>
      <div>
        浏览次数：{{info.watchs}}
      </div>
    </div>
</template>
<script>
  import {EncyDetail} from '../../../../api/config/config'
  export default{
    data () {
      return {
        id: '',
        info: {}
      }
    },
    mounted () {
      this.id = sessionStorage.getItem('baikeMainId')
      this.getDate()
    },
    methods: {
      getDate () {
        var self = this
        var mains = document.getElementById('main')
        EncyDetail({id: this.id}).then(function (res) {
          self.info = res.data.datas
          mains.innerHTML += self.info.content
        })
      }
    }
  }
</script>
<style>
  #main{
    padding: 10px;
    font-size: 14px;
  }
  .topInfo{
    padding: 10px;
    margin-bottom: 10px;
  }
  .colors{
    color: #888;
    font-size: 12px;
    font-weight: bold;
  }
  *{
    padding: 0;
    margin: 0;
  }
  .baike{
    text-align: left;
  }
  header{
    line-height: 44px;
    border-bottom: 1px solid #ddd;
    font-size: 17px;
  }
  .headers{
    padding:0 10px;
    display: flex;
  }
  .headers span{
    width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
  }
  .headers a{
    line-height: 44px;
    font-size: 20px;
    flex: 1;
  }
</style>
