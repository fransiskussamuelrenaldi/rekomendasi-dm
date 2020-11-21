import Vue from 'vue'
import Vuex from 'vuex'

// Mutations
import {
  SET_PATIENT_DATA,
  SET_RECOMMENDATION_LIST,
  SET_GENERAL_REC,
  SET_EMPTY_GENERAL_REC,
  SET_DRUG_REC,
  SET_ROOT_CAUSE,
  SET_BMI_REC,
  SET_GLUCOSE_REC
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
    bmiRecommendation: {},
    glucoseRecommendation: {},
    drugReccomendations: [],
    rootCause: []
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
    },
    [SET_DRUG_REC] (state, payload) {
      state.drugReccomendations = payload
    },
    [SET_ROOT_CAUSE] (state, payload) {
      state.rootCause = [...state.rootCause, ...payload]
    },
    [SET_EMPTY_GENERAL_REC] (state) {
      state.generalRecommendations = []
    },
    [SET_BMI_REC] (state, payload) {
      state.bmiRecommendation = payload
    },
    [SET_GLUCOSE_REC] (state, payload) {
      state.glucoseRecommendation = payload
    }

  },
  actions: {
    setPatientData ({ commit, state }, payload) {
      commit(SET_PATIENT_DATA, payload)
    },
    setRecommendations ({ commit, state }, payload) {
      commit(SET_RECOMMENDATION_LIST, payload)
    },
    setGeneralRec ({ commit, state }, payload) {
      commit(SET_GENERAL_REC, payload)
    },
    setDrugReccomendation ({ commit, state }, payload) {
      commit(SET_DRUG_REC, payload)
    },
    setRootCause ({ commit, state }, payload) {
      commit(SET_ROOT_CAUSE, payload)
    },
    setEmptyGeneralRec ({ commit, state }) {
      commit(SET_EMPTY_GENERAL_REC)
    },
    setGlucoseRec ({ commit, state }, payload) {
      commit(SET_GLUCOSE_REC, payload)
    },
    setBmiRec ({ commit, state }, payload) {
      commit(SET_BMI_REC, payload)
    }
  },
  modules: {}
})
