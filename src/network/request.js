import axios from 'axios'

// export function request(config, success, failure){
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     instance(config)
//         .then(res=>{
//             success(res)
//         })
//         .catch(err=>{
//             failure(err)
//         })
// }


// export function request(config){
//     const instance = axios.create({
//         baseURL: 'http://123.207.32.32:8000',
//         timeout: 5000
//     })

//     instance(config.baseConfig)
//         .then(res=>{
//             config.success(res)
//         })
//         .catch(err=>{
//             config.failure(err)
//         })
// }

// export function request(config){
//     return new Promise((resolve, reject)=>{
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })
    
//         instance(config)
//             .then(res=>{
//                 resolve(res)
//             })
//             .catch(err=>{
//                 reject(err)
//             })
//     })
// }

export function request(config){
    const instance = axios.create({
        baseURL: 'http://127.0.0.1:3100',
        timeout: 5000
    })
    
    //axios拦截器
    //请求拦截
    instance.interceptors.request.use(config=>{
        console.log(config)
        //1.config中的信息不符合要求，需要处理
        //2.每次发送网络请求时，希望显示一个图标
        //3.某些网络请求（比如登录token），必须携带一些特殊的信息
        return config
    },err=>{
        console.log(err)
    })

    //相应拦截
    instance.interceptors.response.use(res=>{
        console.log(err)

        return res.data
    },err=>{
        console.log(err)
    })

    return instance(config)
}
