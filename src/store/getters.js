export default {
    //类似计算属性
    fun(state){
        return state.counter*1.29/(1-state.counter/3.43)+'s'
    },
    stu20(state){
        return state.stu.filter(s=>s.age<25)
    },
    stu20len(state,getters){
        return getters.stu20.length
    },
    //如果想要传参,则返回一个函数
    stun(state){
        return age=>state.stu.filter(s=>s.age>age)
    }
}