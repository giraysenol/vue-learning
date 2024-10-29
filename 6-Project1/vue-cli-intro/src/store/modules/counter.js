const state = {
  counter:0
}

const getters = {
  getDoubleCounter(state){
    return state.counter*2
  },
  stringCounter(state){
    return `${state.counter}. kez tıklandı.`
  },
}

const mutations = {
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
}

const actions = {
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
}

export default {
  state,
  getters,
  mutations,
  actions
}