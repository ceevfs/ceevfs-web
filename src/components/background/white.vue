<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name:"white"
  }
</script>

<style scoped>
  div{
    margin: 30px 100px 30px 100px;
    border-radius: 15px 15px 10px 10px;
    background-color: rgba(244, 244, 244,1);
    box-shadow: 7px -7px 10px 10px rgba(155, 155, 155, 0.452);
    padding: 100px 100px 300px 100px;
  }
</style>