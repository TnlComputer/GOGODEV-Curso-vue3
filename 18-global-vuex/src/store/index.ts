import { createStore } from 'vuex'

export default createStore({
  state: {
    // data
    counter: 1
  },
  getters: {
    // datos computados
    times2(state) {
      return state.counter * 2
    }
  },
  mutations: {
    // syncronas
    setCounter(state, value) {
      state.counter = value;
    }
  },
  actions: {
    // asyncronas
    //  ejemplo
    //   async setCounter(state, value) {
    //   await state.counter = value;
    // }

  },
  modules: {
    // dividir el store
  }
})
