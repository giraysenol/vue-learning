import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    counter:0,
    value:0
  },
  getters:{
    getDoubleCounter(state){
      return state.counter*2
    },
    stringCounter(state){
      return `${state.counter}. kez tıklandı.`
    },
    getValue(state){
      return state.value
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
    setValue(state, payload){
      state.value = payload
    }
  },
  //asenkron çalışır
  actions:{
    increament({commit}){
      commit("increaseCounter")
    },
    decreament({commit}){
      commit("decreaseCounter")
    },
    increamentAsync({commit}, payload){
      setTimeout(() => {
        commit("increaseCounter")
      }, payload.time);
    },
    setValueData({commit},payload){
      commit("setValue", payload)
    }

  }


})