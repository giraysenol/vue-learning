import Vue from "vue"
import Vuex from "vuex"
import counter from "./modules/counter"
import * as mutations from "./mutations"
import * as getters from "./getters"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    value:0
  },

  getters:{
    ...getters,
  },

  //senkron çalışır.!
  mutations:{
    ...mutations,
  },

  //asenkron çalışır
  actions:{
    setValueData({commit},payload){
      commit("setValue", payload)
    }
  },

  modules:{
    counter
  }
})