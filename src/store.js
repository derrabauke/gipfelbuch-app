import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tours: [],
    filterVisisbility: false
  },
  /* mutations must be synchronus*/
  mutations: {
    toggleFilter(){
      this.state.filterVisisbility = !this.state.filterVisisbility;
    }
  },
  /* actions can contain asynchronus code */
  actions: {
    fetchTours(state){
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
  getters: {
    getTours: state => {
        return state.tours;
    },
    getFilterVisisbility: state => {
      return state.filterVisisbility;
    }
  }
})
