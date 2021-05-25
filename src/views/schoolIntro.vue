<template>
  <div>
    <div class="search">
      <div @click="queryWithName">名称查询</div>
      <div>
        <input type="text" placeholder="请输入搜索关键字" id="search" v-model="contents">
      </div>

    </div>

      <div class="span">
        <span class="school" v-for="(item,index) in allSchool[allSchool.length-1]" :key="'scorelist'+index" :value="item.schoolName" @click="moveClick(item.webUrl)">
          {{item.schoolName}}
        </span>
      </div>

    <!-- <div class="back">
        <div class="title">
          学校筛选
        </div>
        <div class="btnback">
          <div class="btn">
            筛选查询
          </div>
        </div>
        
    </div> -->
  </div>
</template>

<script>

import axios from 'axios'

  export default {
    name:"schoolIntro",
    data(){
      return{
        contents: '',
        allSchool: [
        ]
      }
    },
    methods: {
      inputFunc(){
        if(this.allSchool.trim()){
            this.fuzzy_search(this.allSchool.trim());
        }
      },
      queryWithName(){
        // if(this.contents=='')
        //   return
        axios({
          url: 'http://127.0.0.1:3100/query/schoolList',
          method: 'GET',
          params:{
            schoolName: this.contents
          }
        }).then(res=>{
          console.log(res.data.result)
          this.allSchool=[]
          this.allSchool.push(res.data.result)
        }).catch(err=>{
          console.log(err)
        })
      },
      moveClick(a){
        window.location.href = a
      }
    },
    mounted(){

    },
    components:{

    }
    
  }
</script>

<style scoped>
@import "../assets/css/btn.css";
@import "../assets/css/table.css";

  div.search{
    width: 90%;
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
    padding: 5px;
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
    margin: auto;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 12px;
    margin-top: 60px;
  }

  div.title{
    width: 96%;
    margin: auto;
    margin-top: 12px;
    background-color: #d9d9d9;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 5px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgba(55,33, 55,0.9);
    font-size: 22px;
    text-align: center;

    font-weight: bolder;
    background-color: #eedddd;
  }

  div.btnback{
    width: 45%;
    height: 44px;
    padding: 10px;
    margin: auto;
    margin-top: 20px;
    line-height: 44px;
  }

  div.span{
    display: flex;
    flex-wrap: wrap;
    width: 92%;
    margin: 0 auto;
    margin-top: 24px;
    background-color: #d0ebd0;
  }

  div.span span.school{
    width: 32.9%;
    height: 48px;
    background-color: #def0de;
    margin: 0 auto;
    text-align: center;
    line-height: 48px;
    margin: 2px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: bolder;
  }
  div.span span.school:hover{
    background-color:rgb(209, 236, 238);
    cursor: pointer;
  }

</style>