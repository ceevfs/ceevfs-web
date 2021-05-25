<template>
  <div>
    <p class="welcome">欢迎来到</p>
    <p class="name">高考志愿咨询平台</p>
    <p></p>
  </div>
</template>

<script>
  export default {
    name:"whiteBar",
  }
</script>

<style scoped>
  div{
    background-color: rgba(255, 255, 255, 0);
    color: #fff;
  }
  div p.welcome{
    font-family:"Times New Roman",Georgia,Serif;
    font-size: 36px;
    margin-left: 80px;
    margin-top: 30px;
  }
  div p.name{
    font-family:"Times New Roman",Georgia,Serif;
    font-size: 18px;
    margin-left: 120px;
    margin-top: 12px;
  }
</style>