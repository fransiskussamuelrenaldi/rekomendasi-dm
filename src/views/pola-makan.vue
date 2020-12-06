<template>
  <div class="container text-left">
    <!-- <p class="text-2xl"> Pola Makan </p> -->
    <div class="">
      <div class="group-input">
        <span class="text-gray-700">{{ f.isDoing.question }}</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input v-model="f.isDoing.val" type="radio" class="form-radio" :name="f.isDoing.keyword" :value=1>
            <span class="ml-2">Ya</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="f.isDoing.val" type="radio" class="form-radio" :name="f.isDoing.keyword" :value=0>
            <span class="ml-2">Tidak</span>
          </label>
        </div>
      </div>
      <template v-if="f.isDoing.val">
          <span class="text-gray-700">{{ f.isConsulting.question }}</span>
          <div class="mt-2">
            <label class="inline-flex items-center">
              <input v-model="f.isConsulting.val" type="radio" class="form-radio" :name="f.isConsulting.keyword" :value=1>
              <span class="ml-2">Ya</span>:
            </label>
            <label class="inline-flex items-center ml-6">
              <input v-model="f.isConsulting.val" type="radio" class="form-radio" :name="f.isConsulting.keyword" :value=0>
              <span class="ml-2">Tidak</span>
            </label>
          </div>
      </template>
      <template v-else>
      </template>
    </div>
    <button
      @click="nextPage"
      :class="['mt-6 bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-500 rounded']">
      Rekomendasi
    </button>
  </div>
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      rootCause: [],
      f: {
        isDoing: {
          question: 'Apakah pasien melakukan pengaturan pola makan?',
          keyword: 'Pengaturan pola makan',
          showRootCauseIf: 0,
          val: null
        },
        isConsulting: {
          question: 'Apakah pasien berkonsultasi dengan tenaga kesehatan dalam melakukan pemilihan makanan?',
          keyword: 'Berkonsultasi dengan tenaga kesehatan',
          showRootCauseIf: 0,
          val: null
        }
      },
      foodRecc: {
        isCheckPeriodically: {
          val: false,
          rec: 'Dorong pasien untuk konseling gizi secara berkala'
        },
        isCheckHomeCare: {
          val: false,
          rec: 'Lakukan penjaringan pada pasien dengan menhubungi melalui telepon atau home care counseling'
        }
      }
    }
  },
  computed: {
    isDone () {
      return false
    },
    getRecList () {
      const listRecc = []
      if (this.f.isDoing.val) {
        if (this.f.isConsulting) listRecc.push(this.foodRecc.isCheckPeriodically.rec)
        else if (!this.f.isConsulting && this.f.isConsulting !== null) {
          listRecc.push(this.foodRecc.isCheckHomeCare.rec)
        }
      }
      if (!this.f.isDoing.val && this.f.isDoing.val !== null) {
        listRecc.push(this.foodRecc.isCheckPeriodically.rec)
        listRecc.push(this.foodRecc.isCheckHomeCare.rec)
      }
      return listRecc
    }
  },
  methods: {
    nextPage () {
      this.$emit('pola-makan', this.getRecList)
      store.dispatch('setRootCause', this.getRootCause())
    },
    getRootCause () {
      const cause = []
      for (const key in this.f) {
        if (this.f[key].val !== null && (this.f[key].val === this.f[key].showRootCauseIf)) {
          cause.push(this.f[key].keyword)
        }
      }
      this.rootCause = cause
      return cause
    }
  }
}
</script>
