<template>
  <div id = bar2>
    <span @click="homeClick" :class="{active: isOn[0]}">
      主页
    </span>
    <span @click="listClick" :class="{active: isOn[1]}">
      各省份分数表
    </span>
    <span @click="analysisClick" :class="{active: isOn[2]}">
      智能分析
    </span>
    <span @click="testClick" :class="{active: isOn[3]}">
      小测试
    </span>
    <span @click="mapClick" :class="{active: isOn[4]}">
      985高校地图
    </span>
  </div>
</template>

<script>
  export default {
    name:"SecondBar",
    data(){
      return{
        isOn: this.$store.state.isOn
      }
    },
    methods: {
      clear(){
        for(let i=0; i<this.isOn.length;i++){
          this.isOn[i]=false
        }
      },
      homeClick(){
        // this.$router.replace('/home')
        this.$router.push('/home')
        this.clear()
        this.isOn[0]=true
      },
      listClick(){
        this.$router.push('/scorelist')
        this.clear()
        this.isOn[1]=true
      },
      analysisClick(){
        this.$router.push('/analysis')
        this.clear()
        this.isOn[2]=true
      },
      testClick(){
        this.$router.push('/test')
        this.clear()
        this.isOn[3]=true
      },
      mapClick(){
        this.$router.push('/schoolmap')
        this.clear()
        this.isOn[4]=true
      },
      profileClick(){
        this.$router.push({//即为main.js那个router
          path: '/profile',
          query: {
          name: 'lrl', 
          age: '19',
          lover: 'gkx',
          like: '橘子'
          }
        })
      },
  }
  }
</script>

<style scoped>

  div {
    display: flex;
    background-color:#eeeeee;
    height: 40px;
  }

  div span{
    flex: 1;
    list-style: none;
    padding-top: 7px;
    font-size: 18px;
    cursor:pointer;
  } 

  div span:hover{
    background-color: #d2f3b3;
  }

  div span:active{
    color:rgb(122, 63, 76);
  }

  #bar {
    display: flex;
    /* 一排显示 */
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
  }

  #bar2{
    display: flex;
    background-color: #f6f6f6;


    box-shadow: 0px 3px 1px 0px rgba(100, 100, 100, 0.1);
  }

  .active{
    background-color: #d2f3b3;
  }
</style>