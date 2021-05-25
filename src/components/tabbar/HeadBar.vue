<template>
  <div>
      <span>欢迎使用</span>
      <span>xx志愿咨询平台</span>
      <span><a @click="loginClick">登录</a></span>
      <span></span>
      <span><a @click="registerClick">注册</a></span>
      <span></span>
      <span></span>
  </div>
</template>

<script>
  export default {
    name:"HeadBar",
    data(){
      return{

      }
    },
    methods: {
      loginClick(){
        this.$router.push('/login')
      },
      registerClick(){
        this.$router.push('/register')
      },
    }
  }
</script>

<style scoped>

  div {
    display: flex;
    background-color: #f3f3ff;
    height: 80px;
  }

  div span{
    list-style: none;
    padding-top: 25px;
    font-size: 18px;
  } 

  div span:nth-child(1){
    width: 20%;
  }
  div span:nth-child(2){
    flex: 1;
    padding-top: 8px;
    font-size: 40px;
    color:burlywood;
    background-color: aliceblue;
  }
  div span:nth-child(3){
    width: 5%;
  }
  div span:nth-child(4){
    width: 0.2%;
    background-color: aliceblue;
  }
  div span:nth-child(5){
    width: 5%;
  }
    div span:nth-child(6){
    width: 0.2%;
    background-color: aliceblue;
  }
  div span:nth-child(7){
    width: 9.6%; 
  }
  div span a{
    text-decoration: none;
    color: #6a1237;
    cursor: pointer;
  }
</style>