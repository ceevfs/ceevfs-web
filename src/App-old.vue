<template>
  <div id="app">
    <head-bar/>
    <second-bar v-if="!$store.state.isLogin"/>
    <router-view></router-view>
    <copy-right/>
  </div>
</template>

<script>
  import HeadBar from './components/tabbar/HeadBar.vue'
  import SecondBar from './components/tabbar/SecondBar.vue'
  import copyRight from './components/tabbar/copyRight.vue'
  import test from './views/Test'

  export default {
    name: 'App',
    data(){
      return{
        isLogin: false,
      }
    },
    components: {
      HeadBar,
      test,
      SecondBar,
      copyRight
    }
  }
</script>

<style>
  * {
      margin: 0;
      padding: 0;
    }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    
  }
  body{
    background-image: url('./assets/img/Lawrencium.jpg');
  }


</style>
