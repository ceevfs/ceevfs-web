<template>
  <div>
    <div class="img">
      <slot name='img' class="img"></slot>
    </div>
    <slot name="title"></slot>
    
    <slot name="content"></slot>
  </div>
</template>

<script>
  export default {
    name:"homeModule"
  }
</script>

<style scoped>
  div{
    padding: 20px;
    width: 220px;
    height: 480px;
    background-color: #eee;
    box-shadow: 1px -1px 2px 2px rgba(155, 155, 155, 0.452);
    cursor: pointer;
  }

  div:hover{
    box-shadow: 3px -3px 3px 3px rgba(155, 155, 155, 0.452);
  }

  div.img{
    background-color: #ddd;
    width: 220px;
    height: 240px;
    box-shadow: 2px -2px 2px 2px rgba(155, 155, 155, 0.452);
    padding: 0;
  }
  

</style>