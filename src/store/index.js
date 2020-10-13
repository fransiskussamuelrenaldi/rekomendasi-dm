import Vue from 'vue'
import Vuex from 'vuex'

// Mutations
import { SET_PATIENT_DATA, SET_RECOMMENDATION_LIST } from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patientData: {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      weight: '',
      address: ''
    },
    reccomendations: [],
    rootCauseIdentification: []
  },
  mutations: {
    [SET_PATIENT_DATA] (state, payload) {
      Object.assign(state.patientData, payload)
    },
    [SET_RECOMMENDATION_LIST] (state, payload) {
      state.reccomendations = payload
    }
  },
  actions: {
    setPatientData ({ commit, state }, payload) {
      commit(SET_PATIENT_DATA, payload)
    },
    setRecommendations ({ commit, state }, payload) {
      commit(SET_PATIENT_DATA, payload)
    }
  },
  modules: {}
})
