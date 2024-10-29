import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    counter:0
  },
  getters:{
    getDoubleCounter(state){
      return state.counter*2
    },
    stringCounter(state){
      return `${state.counter}. kez tıklandı.`
    }
  },
  //senkron çalışır.!
  mutations:{
    updateCounter(state, value){
      setTimeout(() => {
        state.counter += value
      }, 1500);
    },
    increaseCounter(state){
      state.counter++
    },
    decreaseCounter(state){
      state.counter--
    },
  },
  //asenkron çalışır
  actions:{
    increament({commit}){
      commit("increaseCounter")
    },
    decreament({commit}){
      commit("decreaseCounter")
    },
    increamentAsync({commit}){
      setTimeout(() => {
        commit("increaseCounter")
      }, 2000);
    }

  }


})