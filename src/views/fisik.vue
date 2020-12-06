<template>
  <div class="container text-left">
    <!-- <p class="text-2xl"> Aktivitas Fisik </p> -->
    <div class="">
      <div class="group-input">
        <span class="text-gray-700">{{ p.isDoing.question }}</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input v-model="p.isDoing.val" type="radio" class="form-radio" :name="p.isDoing.keyword" :value=1>
            <span class="ml-2">Ya</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="p.isDoing.val" type="radio" class="form-radio" :name="p.isDoing.keyword" :value=0>
            <span class="ml-2">Tidak</span>
          </label>
        </div>
      </div>
      <template v-if="p.isDoing.val">
        <span class="text-gray-700">{{ p.isRoutine.question }}</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input v-model="p.isRoutine.val" type="radio" class="form-radio" :name="p.isRoutine.keyword" :value=1>
            <span class="ml-2">Ya</span>:
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="p.isRoutine.val" type="radio" class="form-radio" :name="p.isRoutine.keyword" :value=0>
            <span class="ml-2">Tidak</span>
          </label>
        </div>
      </template>
      <template v-else-if="!p.isDoing.val && p.isDoing.val !== null">
      </template>
    <button
      @click="nextPage"
      :class="['mt-6 bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-500 rounded']">
      Rekomendasi
    </button>
    </div>
  </div>
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      rootCause: [],
      p: {
        isDoing: {
          question: 'Apakah pasien melakukan aktivitas fisik?',
          keyword: 'Aktivitas fisik',
          showRootCauseIf: 0,
          val: null
        },
        isRoutine: {
          question: 'Apakah pasien melakukan olah raga secara rutin?',
          keyword: 'Olah raga secara rutin',
          showRootCauseIf: 0,
          val: null
        },
        isNoTime: {
          question: 'Apakah pasien merasa tidak memiliki waktu untuk melakukan olahraga?',
          keyword: 'Tidak memiliki waktu untuk melakukan olah raga',
          showRootCauseIf: 0,
          val: null
        }
      },
      physRecc: {
        isMantainPE: {
          val: false,
          rec: 'Dorong pasien untuk olahraga secara rutin'
        },
        isAddRoutine: {
          val: false,
          rec: 'Ajak pasien rutin berolahraga, ajarkan pasien melakukan senam ringan 5 - 15 menit, mengirimkan video'
        },
        isJoinActivity: {
          val: false,
          rec: 'Ajak pasien untuk mengikutin kegiatan senam rutin dan prolaris senam rutin dan prlanis di puskesmas atau organisasi tertentu'
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
      if (this.p.isDoing.val) {
        if (this.p.isRoutine.val) listRecc.push(this.physRecc.isMantainPE.rec)
        else {
          if (this.p.isNoTime) listRecc.push(this.physRecc.isAddRoutine.rec)
          else listRecc.push(this.physRecc.isJoinActivity.rec)
        }
      }
      if (!this.p.isDoing.val && this.p.isDoing.val !== null) {
        listRecc.push(this.physRecc.isMantainPE.rec)
        listRecc.push(this.physRecc.isAddRoutine.rec)
        listRecc.push(this.physRecc.isJoinActivity.rec)
      }
      return listRecc
    }
  },
  methods: {
    nextPage () {
      this.$emit('fisik', this.getRecList)
      store.dispatch('setRootCause', this.getRootCause())
    },
    getRootCause () {
      const cause = []
      for (const key in this.p) {
        if (this.p[key].val !== null && (this.p[key].val === this.p[key].showRootCauseIf)) {
          cause.push(this.p[key].keyword)
        }
      }
      this.rootCause = cause
      return cause
    }
  }
}
</script>
