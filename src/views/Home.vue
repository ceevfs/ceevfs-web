<template>
  <div>

    <span @click="sfindClick">
      <home-module>
        <template v-slot:img>
          <img :src="imgs[0]" alt="" width="220" height="240">
        </template>
        
        <template v-slot:title>
          <div class="title">学校查找</div>
        </template>

        <template v-slot:content>
          <div class="content">可以按照分数和排名，或者地域要求找到心仪的学校</div>
        </template>
      </home-module>
    </span>

    <span @click="sintroClick">
      <home-module>
        <template v-slot:img>
          <img :src="imgs[1]" alt="" width="220" height="240">
        </template>
        
        <template v-slot:title>
          <div class="title">学校介绍</div>
        </template>

        <template v-slot:content>
          <div class="content">这里可以查到一些主要的学校信息</div>
        </template>
      </home-module>
    </span>

    
    <span @click="majorClick">
      <home-module>
        <template v-slot:img>
          <img :src="imgs[2]" alt="" width="220" height="240">
        </template>
        
        <template v-slot:title>
          <div class="title">专业介绍</div>
        </template>

        <template v-slot:content>
          <div class="content">这里可以查到当前主流专业到底是干什么的</div>
        </template>
      </home-module>
    </span>

    
    <span @click="preClick">
      <home-module>
        <template v-slot:img>
          <img :src="imgs[3]" alt="" width="220" height="240">
        </template>
        
        <template v-slot:title>
          <div class="title">偏好测试</div>
        </template>

        <template v-slot:content>
          <div class="content">通过一点题目来看看你到底适合学什么吧</div>
        </template>
      </home-module>
    </span>

  </div>
</template>

<script>
import homeModule from '../components/list/homeModule'
  export default {
    name:"Home",
    data(){
      return{
        imgs:[
            require('../assets/img/bg1.jpg'),
            require('../assets/img/bg2.jpg'),
            require('../assets/img/bg3.jpg'),
            require('../assets/img/bg4.jpg'),
           ]
  
      }
    },
    methods: {
      homeClick(){
        // this.$router.replace('/home')
        this.$router.push('/home')
      },
      sfindClick(){
        this.$router.push('/schoolFind')
      },
      sintroClick(){
        this.$router.push('/schoolIntro')
      },
      preClick(){
        this.$router.push('/preferenceTest')
      },
      majorClick(){
        this.$router.push('/majorIntro')
      },
    },
    mounted(){
      this.$store.state.isLogin = false
      this.$store.state.isOn[0] = true
    },
    components:{
      homeModule
    }
    
  }
</script>

<style scoped>

  div{
    display: flex;
    flex-wrap: wrap;
  }

  div span{
    flex: 1;
  }
  div.title{
    width: 100%;
    margin-top: 18px;
    font-family:"黑体",Georgia,Serif;
    font-size: 20px;
    color: rgb(73, 148, 167);
  }

  div.content{
    width: 100%;
    margin-top: 18px;
    font-family:"宋体",Georgia,Serif;
    font-size: 16px;
    text-align: center;
    color: rgba(9, 9, 9, 1);
  }
</style>