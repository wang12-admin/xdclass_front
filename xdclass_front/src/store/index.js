import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 设置数据
    token: localStorage.getItem("token") || ''
  },
  mutations: {
    //同步修改
    setToken(state, token) {
      state.token = token
    }
  },
  actions: {
    //异步修改
    asyncSetToken(context, token) {
      context.commit('setToken', token)
    },
    // 清除token
    clearToken(context) {
      context.commit('setToken', '')
    }

  },
  modules: {
  }
})
