import Vue from 'vue'
import Vuex from 'vuex'
import offlineTours from "@/assets/GipfelSaechsSchweiz.json"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    filterVisisbility: false,
    allTours: null,
    originalTours: [],
    searchText: ""
  },
  /* mutations must be synchronus*/
  mutations: {
    showFilterBar(context) {
      context.filterVisisbility = !context.filterVisisbility;
    },
    setFilterText(context, newText) {
      context.searchText = newText
    },
    setFilteredTours(context, payload) {
      context.allTours = payload.newTours || context.originalTours
      if (payload.reset) {
        context.originalTours = payload.newTours
      }
    }
  },
  /* actions can contain asynchronus code */
  actions: {
    fetchTourData(context) {
      if (process.env.NODE_ENV == "development") {
        context.commit("setFilteredTours", {
          newTours: offlineTours,
          reset: true
        })
        return
      } else {
        if (!context.getters.allTours) {
          let con = console;
          fetch('https://api.myjson.com/bins/nbj3g')
            .then(response => response.json())
            .then(json => {
              context.commit("setFilteredTours", {
                newTours: json,
                reset: true
              })
              if (process.env.NODE_ENV == "development") {
                con.log(json.length + " tours where fetched")
              }
            })
            .catch(error => {
              this.error = error
            })
        } else {
          context.commit("setFilteredTours", {
            newTours: context.getOriginalTours,
            reset: false
          })
        }

      }
    },
    setFilter(context, text) {
      if (!text) {
        context.commit("setFilterText", "")
        context.commit("setFilteredTours", {
          newTours: context.getters.originalTours,
          reset: false
        })
        return
      }
      context.commit("setFilterText", text)
      context.commit("setFilteredTours", {
        newTours: {
          0: {
            Weg: "Blah",
            Gipfel: "So einer"
          }
        },
        reset: false
      })
    }
  },
  getters: {
    getFilterVisisbility: state => {
      return state.filterVisisbility;
    },
    allTours: state => {
      return state.allTours
    },
    getOriginalTours: state => {
      return state.originalTours
    },
    searchText: state => {
      return state.searchText
    }
  }
})