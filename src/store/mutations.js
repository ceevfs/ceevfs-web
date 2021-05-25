import * as types from './mutation-types'

export default {
    [types.INCRE](state){
        state.counter++
    },
    decre(state){
        state.counter--
    },
    incren(state,n){
        state.counter+=n
    },
    update(state) {
        //不能响应式
        state.stu[2]['love']='gkx'
        delete state.stu[1].age

        //可以响应式
        // state.stu[0].name='张大炮'
        Vue.set(state.stu[2],'loves','lrl')
        Vue.delete(state.stu[0],'name')
    }

}