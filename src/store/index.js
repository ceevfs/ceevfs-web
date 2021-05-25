import { createStore } from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state={
  isLogin: false,
  isOn: [
    false,false,false,false,false
  ]
}

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
