import Vue from 'vue'
import Vuex from 'vuex'

// Mutations
import {
  SET_PATIENT_DATA,
  SET_RECOMMENDATION_LIST,
  SET_GENERAL_REC
} from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    patientData: {
      name: '',
      age: '',
      gender: '',
      weight: '',
      height: '',
      address: '',
      consultantType: '',
      consultantName: '',
      fastingBloodGlucose: '',
      hba1c: '',
      calcBmi: ''
    },
    generalRecommendations: [],
    reccomendations: [],
    rootCauseIdentification: []
  },
  mutations: {
    [SET_PATIENT_DATA] (state, payload) {
      Object.assign(state.patientData, payload)
    },
    [SET_RECOMMENDATION_LIST] (state, payload) {
      state.reccomendations = payload
    },
    [SET_GENERAL_REC] (state, payload) {
      state.generalRecommendations = [...state.generalRecommendations, { ...payload }]
    }
  },
  actions: {
    setPatientData ({ commit, state }, payload) {
      commit(SET_PATIENT_DATA, payload)
    },
    setRecommendations ({ commit, state }, payload) {
      commit(SET_PATIENT_DATA, payload)
    },
    setGeneralRec ({ commit, state }, payload) {
      commit(SET_GENERAL_REC, payload)
    }
  },
  modules: {}
})
