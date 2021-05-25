<template>
  <div id="app">
    <white-bar></white-bar>
    <white>
      <router-view></router-view>
    </white>
    
    <copy-right/>
  </div>
</template>

<script>
  import white from './components/background/white'
  import copyRight from './components/tabbar/copyRight.vue'
  import WhiteBar from './components/tabbar/whiteBar.vue'

  export default {
    name: 'App',
    data(){
      return{
        isLogin: false,
      }
    },
    components: {
      copyRight,
      white,
      WhiteBar
    }
  }
</script>

<style>
  * {
      margin: 0;
      padding: 0;
    }
  #app {

    color: #2c3e50;
    
  }
  body{
    background-image: url('./assets/img/Lawrencium.jpg');
  }


</style>
