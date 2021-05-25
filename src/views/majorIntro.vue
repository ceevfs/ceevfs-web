<template>
  <div>

      <div class="title">专业查询</div>
      <div class="menu">
        <major-menu></major-menu>
      </div>


    <!-- <div class="back">
        <div class="title">
          专业筛选
        </div>
        <div class="btnback">
          <div class="btn">
            筛选查询
          </div>
        </div>

    </div> -->

    <!-- <div class="search">
      <div class="query">名称查询</div>
      <div class="input">
        <input type="text" id="search" v-model="contents" >
      </div>
    </div> -->
  </div>
</template>

<script>
import majorMenu from '../components/list/majorMenu'
import axios from 'axios'

  export default {
    name:"majorIntro",
    data(){
      return{
        contents: '计算机科学与工程',
      }
    },
    methods: {

    },
    mounted(){

    },
    components:{
      majorMenu
    }
    
  }
</script>

<style scoped>

@import "../assets/css/btn.css";

  div.search{
    width: 90%;
    height: 40px;
    background-color: #eeeeee;
    margin: 0 auto;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 12px;
    display: flex;
  }

  div.search div:nth-child(1){
    width: 20%;
    background-color: #a3e3a3;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    border-radius: 3px;
    text-align: center;
    margin: 4px;
    font-size: 22px;
    font-weight: bolder;
  }
  div.search div:nth-child(1):hover{
    background-color: #73e373;
    cursor: pointer;
    box-shadow: 1px -1px 3px 3px rgba(155, 155, 155, 0.452);
  }

  div.search div:nth-child(2){
    flex: 1;
    margin-right: 20px;
  }

  input{
    font-family:'Times New Roman', Times, serif;
    font-weight: bolder;
    width: 100%;
    /* border: 0; */
    outline: none;
    height: 80%;
    font-size: 18px;

    box-shadow: 1px -1px 1px 1px rgba(155, 155, 155, 0.452);
    margin-top: 4px;
    margin-left: 12px;
    border-right: 1px;
    border-top: 1px;
    border-bottom: 1px;
    border-color:rgba(172,255,172,0.5);
  }

  div.back{
    background-color: #eeeeee;
    width: 90%;
    margin: 0 auto;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 12px;
    margin-top: 60px;
  }

  div.title{
    width: 36%;
    margin: 0 auto;
    margin-top: 12px;
    background-color: #d9d9d9;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 5px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgba(55,33, 55,0.9);
    font-size: 28px;
    text-align: center;
    border-radius: 15px;
    font-weight: bolder;
  }

    div.btnback{
    width: 97%;
    height: 44px;
    padding: 10px;
    margin: 20px auto;
    line-height: 44px;
  }

  div.menu{
    margin: 0 auto;
    width: 94%;
    margin-top: 12px;
  }
</style>