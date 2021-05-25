<template>
  <div id = bar>
    <span>&copy; 2021 gkx<br/>from southeast university</span>
  </div>
</template>

<script>
  export default {
    name:"copyRight",
    data(){
      return{

      }
    },
    methods: {

  }
  }
</script>

<style scoped>

  div {
    display: flex;
    height: 50px;
    /* background-image: url('../../assets/img/bg4.jpg'); */
    background-size:100%;
    flex-wrap: wrap;
    text-align: center;
  }

  div span{
    flex: 1;
    list-style: none;
    padding-top: 8px;
    font-size: 12px;
    background-color:rgba(65,59,103,0.2);
    color: aliceblue;
  } 

  #bar {

    box-shadow: 0px -2px 1px rgba(115, 76, 121, 0.2);
  }

</style>