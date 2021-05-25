<template>
  <div>
    <VueCarousel 
        :imgs="imgs" 
        :delay="2000"
        :imgWidth="400"
        :imgHeight="302"
        :dotWidth="20"
    />
  
  </div>
</template>

<script>
import VueCarousel from '../components/list/vueCarousel'
  export default {
    name:"test",
    data(){
      return{
      imgs:[
            {src: require('../assets/img/bg1.jpg')},
            {src: require('../assets/img/bg2.jpg')},
            {src: require('../assets/img/bg3.jpg')},
           ]
  
      }
    },
    methods: {

    },
    components:{
      VueCarousel
    },
    mounted(){
      this.$store.state.isLogin = false
      this.$store.state.isOn[3] = true

    },
  }
</script>

<style scoped>
  
</style>