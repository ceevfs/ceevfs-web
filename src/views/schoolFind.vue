<template>
  <div>
    <find v-show="isShow">
        <template v-slot:content>
          <div class="title">
            高考志愿推荐
          </div>

          <div class="name">
            省份
          </div>

          <div>
            <select name="" id="" class="sel">
              <option v-for="(item,index) in cityMessage" :key="index" value="item.regname">{{item.regname}}</option>
            </select>
          </div>

          <div class="name"> 
            文理科
          </div>

          <div>
            <select name="" id="" class="sel">
              <option key="" value="文科">文科</option>
              <option key="" value="理科">理科</option>
            </select>
          </div>

          <div class="name">
            省排名
          </div>

          <div>
            <input type="text" class="sel" oninput="value=value.replace(/[^\d]/g,'')"> 
          </div>

          <div>不知道省排名？来看看历年<span @click="change" class="ap">一分一档表查询</span></div>
          
      </template>
      
      <template v-slot:btn>
        <div class="btnback">
          <div class="btn">
            查询
          </div>
        </div>

      </template>

    </find>

    <div v-show="!isShow" class="return" @click="change">
      返回
    </div>
    <find id="ranking" v-show="!isShow">
      <template v-slot:content>
        <div class="title">
          各地区历年一分一档表查询
        </div>

        <div class="name">
          省份
        </div>

        <div>
          <select name="" id="" class="sel" v-model="province">
            <option v-for="(item,index) in cityMessage" :key="index" :value="item.regname">{{item.regname}}</option>
          </select>
        </div>

        <div class="name">
          年份
        </div>

        <div>
          <select name="" id="" class="sel" v-model="year">
            <option v-for="(item,index) in yearQuery" :key="'year'+index" :value="item.year">{{item.year}}</option>
          </select>
        </div>

        <div class="name"> 
          文理科
        </div>

        <div>
          <select name="" id="" class="sel" v-model="type">
            <option key="" value="文科">文科</option>
            <option key="" value="理科">理科</option>
            <option key="" value="不分文理">不分文理</option>
          </select>
        </div>
      </template>
      <template v-slot:btn>
        <div class="btnback">
          <div class="btn" @click="queryScoreList">
            查询
          </div>
        </div>
      </template>
    </find>

    <div class="list" v-show="isScoreListShow">
      <table width="94%" class="table">
          <caption>
              <h2>
                  {{showYear}}{{showProvince}}高考一分一段表{{showType=='不分文理'?'':' - '+showType}}
              </h2>
          </caption>
          <thead>
              <tr>
                  <th>分数段</th>
                  <th>本段人数</th>
                  <th>总人数</th>
              </tr>
          </thead>
          <tr v-for="(item,index) in scoreList[scoreList.length-1]" :key="'scorelist'+index" value="">
              <td>{{item.score}}</td>
              <td>{{item.peopleNum}}</td>
              <td>{{item.sumPeopleNum}}</td>
          </tr>
      </table>
    </div>
  </div>
</template>

<script>
import find from '../components/table/find'
import {cityMessage} from '../assets/js/region'
import {yearQuery} from '../assets/js/yearQuery'
import axios from 'axios'
  export default {
    name:"schoolFind",
    data(){
      return{
        cityMessage,
        yearQuery,
        isShow: true,
        scoreList:[],
        isScoreListShow: false,
        province:'北京',
        year:2020,
        type:'理科',
        showProvince:'',
        showYear: 2020,
        showType:''
      }
    },
    methods: {
      change(){
        this.isShow=!this.isShow
        this.isScoreListShow=false
      },
      queryScoreList(){
        axios({
          url: 'http://127.0.0.1:3100/query/scoreList',
          method: 'GET',
          params:{
            year:this.year,
            province:this.province,
            type:this.type
          }
        }).then(res=>{
          this.scoreList=[]
          this.scoreList.push(res.data.result)
          this.showProvince=this.province
          this.showYear=this.year
          this.showType=this.type
          this.isScoreListShow=true
        }).catch(err=>{
          console.log(err)
        })
      }
    },
    mounted(){

    },
    components:{
      find
    }
  }
</script>

<style scoped>

@import "../assets/css/btn.css";
@import "../assets/css/table.css";
  div.title{
    margin: 0 auto;
    background-color: #d9d9d9;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 5px;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgba(55,33, 55,0.9);
    font-size: 22px;
    text-align: center;

    font-weight: bolder;
    background-color: #eedddd;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
  }

  .sel{
    font-family:'Times New Roman', Times, serif;
    font-weight: bolder;
    width: 100%;
    border: 0;
    outline: none;
    height: 24px;
    font-size: 16px;

    box-shadow: 1px -1px 1px 1px rgba(155, 155, 155, 0.452);
    margin-top: 4px;
  }

  .sel:hover{
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    cursor: pointer;
  }

  div.name{
    font-family:'Times New Roman', Times, serif;
    font-weight: bolder;
    margin-top: 12px;
    
  }

  .ap{
    color: #000;
    text-decoration:none;
    cursor: pointer;
    font-weight: bolder;
  }

  .return{
    color: #000;
    text-decoration:none;
    cursor: pointer;
    font-weight: bolder;
    margin-left: 50px;
    margin-bottom: 12px;
  }

  div.btnback{
    width: 93%;
    height: 44px;
    padding: 10px;
    margin: 20px auto;
    line-height: 44px;
  }


  div.list{
    margin-top: 60px;
  }

</style>