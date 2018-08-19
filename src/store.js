import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tours: []
  },
  mutations: {
    getTours(state){
      fetch('https://api.myjson.com/bins/nbj3g')
      .then( response => response.json())
      .then( json => {
        state.tours = json
      })
    }
  },
  actions: {

  }
})
