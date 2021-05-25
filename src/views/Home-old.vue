<template>
  <div class="back">
    <VueCarousel 
        :imgs="imgs" 
        :delay="2000"
        :imgWidth="1520"
        :imgHeight="600"
        :dotWidth="5"
    />
    <div class="btk">
        <span></span>
        <span>开始体验</span>
        <span></span>
    </div>
  </div>
</template>

<script>
import VueCarousel from '../components/list/vueCarousel'
  export default {
    name:"Home",
    data(){
      return{
        imgs:[
            {src: require('../assets/img/bg1.jpg')},
            {src: require('../assets/img/bg2.jpg')},
            {src: require('../assets/img/bg3.jpg')},
            {src: require('../assets/img/bg4.jpg')},
           ]
  
      }
    },
    methods: {
      
    },
    mounted(){
      this.$store.state.isLogin = false
      this.$store.state.isOn[0] = true
    },
    components:{
      VueCarousel
    }
    
  }
</script>

<style scoped>
div.back{
  /* background-image: url('../assets/img/Background.jpg'); */
  background-size:cover;
  background-color:rgb(12,13,56);
}


div.btk{
  display: flex;
  border: 0;
  font-size: 40px;
  cursor: pointer;
  background-color:rgb(232,233,246);
  width: 100%px;
  color: rgba(35, 165, 178, 0.8);
  outline: none;
}

div.btk span:nth-child(1){
  width: 20%;
}
div.btk span:nth-child(2){
  flex: 1;
  background-color:rgb(232,233,246);
}
div.btk span:nth-child(2):hover{
  flex: 1;
  background-color:rgb(232,213,206);
}
div.btk span:nth-child(3){
  width: 20%;
}
div button:active{
  background-color: rgba(31, 126, 133, 0.1);
}
</style>