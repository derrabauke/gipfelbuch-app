import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    
  },
  getters: {
    getFilterVisisbility: state => {
      return state.filterVisisbility;
    }
  }
})
