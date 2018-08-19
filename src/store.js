import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tours: []
  },
  mutations: {
    getTours(state){
      let con = console;
      fetch('https://api.myjson.com/bins/nbj3g')
      .then( response => response.json())
      .then( json => {
        state.tours = json
        if ( process.env.NODE_ENV !== 'production') {
          con.log(json.length + "tours where fetched")
        }
      })
    }
  },
  actions: {

  }
})
