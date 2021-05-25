<template>
  <div>
    <div>
      <ul>
        <li v-for="(item1,index1) in menu[0]" :key="index1">
          <p @click="showM2(index1)">{{item1.name}}</p>
          <ul v-show="showMenu2[index1]">
            <li v-for="(item2,index2) in item1.children" :key="index2">
              <p @click="showM3(index1,index2)">{{item2.name}}</p>
              <ul v-show="showMenu3[index1][index2]">
                <li v-for="(item3,index3) in item2.children" :key="index3" @click="getSchool(item3.name,index1,index2,index3)">
                  {{item3.name}}
                  <table width="94%" class="table" v-show="Menu3[index1][index2][index3]">
                  <thead>
                      <tr>
                          <th>序号</th>
                          <th>开设学校</th>
                          <th>学科等级</th>
                      </tr>
                  </thead>
                  <tr v-for="(item,index) in majorSchool[0]" :key="index">
                      <td>{{index+1}}</td>
                      <td>{{item.schoolName}}</td>
                      <td>{{item.majorLevel}}</td>
                  </tr>
                  </table>

                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name:"majorMenu",
    data(){
      return{
        menu:[],
        showMenu2:[],
        showMenu3:[],
        Menu3:[],
        majorSchool:[],
        lastClick: {i1:0,i2:0,i3:0}
      }
    },
    methods:{
      showM2(index){
        this.showMenu2[index]=!this.showMenu2[index]
      },
      showM3(index1,index2){
        this.showMenu3[index1][index2]=!this.showMenu3[index1][index2]
      },
      getSchool(n,i1,i2,i3){
        axios({
        url: 'http://127.0.0.1:3100/query/majorSchool',
        method: 'GET',
        params:{
          majorName:n
        }
        }).then(res=>{
          this.majorSchool=[];
          this.majorSchool.push(res.data.result)
        }).catch(err=>{
          console.log(err)
        })

        this.Menu3[this.lastClick.i1][this.lastClick.i2][this.lastClick.i3]=false
        this.Menu3[i1][i2][i3]=true

        this.lastClick.i1=i1
        this.lastClick.i2=i2
        this.lastClick.i3=i3
        console.log(this.Menu3)
      }
    },
    created(){
      axios({
        url: 'http://127.0.0.1:3100/data/majorList',
        method: 'GET',
      }).then(res=>{
        this.menu=[];
        this.menu.push(res.data.result)

        for(let i=0;i<this.menu[0].length;i++){
          this.showMenu2.push(false)
          let tmp3=[]
          let tmp4=[]
          for(let j=0;j<this.menu[0][i].children.length;j++){
            tmp3.push(false)
            let t=[]
            for(let k=0;k<this.menu[0][i].children[j].children.length;k++){
              t.push(false)
            }
            tmp4.push(t)
          }
          this.showMenu3.push(tmp3)
          this.Menu3.push(tmp4)
        }

      }).catch(err=>{
        console.log(err)
      })
    }
  }
</script>

<style scoped>
@import "../../assets/css/table.css";

  ul {
      text-decoration: none;
      list-style:none;
      color: black;
      background-color: aliceblue;
      margin: 1px;
      font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
  ul li{
    background-color:rgb(202, 216, 228);
    margin: 1px;
    font-size: 22px;
    font-weight:900;
    padding: 8px;
    padding-left: 24px;
  }
  ul li:hover{
    background-color:rgb(198, 210, 221);
    box-shadow: 1px -1px 2px 2px rgba(180, 201, 202, 0.3);
  }
  ul li p{
    cursor: pointer;
  }
  ul li ul{
    background-color: aliceblue;
    margin: 1px;
  }
  ul li ul li{
    background-color: rgb(178, 233, 212);
    margin: 1px;
    font-size: 19px;
    font-weight:600;
    padding-left: 24px;
  }
  ul li ul li:hover{
    background-color: rgb(168, 219, 200);
    box-shadow: 1px -1px 2px 2px rgba(193, 235, 206, 0.3);
  }
  ul li ul li ul{
    background-color: aliceblue;
    margin: 1px;
  }
  ul li ul li ul li{
    background-color:  rgb(231, 237, 241);
    margin: 1px;
    font-size: 16px;
    font-weight:500;
    padding-left: 24px;
  }
  ul li ul li ul li:hover{
    background-color:  rgb(219, 228, 235);
    box-shadow: 1px -1px 2px 2px rgba(190, 208, 223, 0.3);
    cursor: pointer;
  }
  p{
    width: 100%;
  }
</style>