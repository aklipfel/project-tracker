import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    project : {},
    modules : [],
  },
  mutations: {
    setProject(state, project) {
      state.project = project
    },
    setModules(state, modules) {
      state.modules = modules
    }
  },
  actions: {
    
    login: () => {
      
    },
    logout: () => {
      
    },
  },
  modules: {
  }
})
