export default {
     //context是上下文
     aupdate(context,payload){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('update')
                console.log(payload)

                resolve('kekekeke')
            },2200)
        })
    }
}