<template>
  <div class="outer">
    <div class="choose">
      <slot name="content"></slot>
    </div>
    <slot name="btn"></slot>
  </div>
</template>

<script>
  export default {
    name:"find"
  }
</script>

<style scoped>
  div{
    margin: 0 auto;
    background-color: #eee;
    width: 90%;
  }
  div.outer{
    padding: 20px;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    padding-bottom: 5px;
  }

  div.choose{
    width: 90%;
    margin: 0 auto;
    background-color: #e3e3e3;
    padding: 20px;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    border-radius: 5px;
  }

  div.btn{
    width: 93%;
    height: 30px;
    margin: 20px auto;
    background-color: #a3e3a3;
    padding: 10px;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    border-radius: 5px;

    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: rgba(55,33, 55,0.9);
    font-size: 22px;
    text-align: center;
    font-weight: bolder;
  }

  div.btn:hover{
    box-shadow: 2px -2px 2px 3px rgba(155, 155, 155, 0.452);
    cursor: pointer;
    background-color: #73e373;
    color: #000;
  }
</style>