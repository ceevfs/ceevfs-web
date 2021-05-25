import Vue from 'vue'
import App from './App'
import router from './router'
import {request} from './network/request'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

//全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000'
// axios.defaults.timeout=5000

// //基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   method: 'GET'
// }).then(res=>{
//   console.log(res)
// })

// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   method: 'GET',
//   params:{//post请求用data
//     type: 'pop',
//     page: 1
//   }
// }).then(res=>{
//   console.log(res)
// })

//axios发送并发请求
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params:{
//       type: 'sell',
//       page: 1
//     }
//   })
// ]).then(res=>{
//   console.log(res)
// })


//创建axios实例
const ins=axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 2000
})

ins({
  url: '/category'
}).then(res=>{
  console.log(res)
})


//封装 request 模块


//方案1
// request({
//   url: '/home/multidata'
// },res=>{
//   console.log(res)
// },err=>{
//   console.log(err)
// })

//方案2
// request({
//   baseConfig: {
//     url:'/home/multidata'
//   },
//   success: function(){

//   },
//   failure: function(){

//   }
// })

//3
request({
  url: '/home/multidata'
}).then(res=>{
  console.log(res)
}).catch(err=>{

})