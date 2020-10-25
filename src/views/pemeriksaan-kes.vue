<template>
  <div class="container text-left">
    <!-- <p class="text-2xl"> Pemeriksaan Kesehatan </p> -->
    <div class="">
      <div class="group-input">
        <span class="text-gray-700">{{ c.isDoingCheckup.question }}</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input v-model="c.isDoingCheckup.val" type="radio" class="form-radio" :name="c.isDoingCheckup.keyword" :value=1>
            <span class="ml-2">Ya</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="c.isDoingCheckup.val" type="radio" class="form-radio" :name="c.isDoingCheckup.keyword" :value=0>
            <span class="ml-2">Tidak</span>
          </label>
        </div>
      </div>
      <template v-if="c.isDoingCheckup.val">
        <span class="text-gray-700">{{ c.isRoutine.question }}</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input v-model="c.isRoutine.val" type="radio" class="form-radio" :name="c.isRoutine.keyword" :value=1>
            <span class="ml-2">Ya</span>:
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="c.isRoutine.val" type="radio" class="form-radio" :name="c.isRoutine.keyword" :value=0>
            <span class="ml-2">Tidak</span>
          </label>
        </div>
        <div v-if="!c.isRoutine.val && c.isRoutine.val !== null" class="group-input">
          <span class="text-gray-700">{{ c.isNoTime.question }}</span>
          <div class="mt-2">
          <label class="inline-flex items-center">
            <input v-model="c.isNoTime.val" type="radio" class="form-radio" :name="c.isNoTime.keyword" :value=1>
            <span class="ml-2">Ya</span>:
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="c.isNoTime.val" type="radio" class="form-radio" :name="c.isNoTime.keyword" :value=0>
            <span class="ml-2">Tidak</span>
          </label>
          </div>
          <div v-if="!c.isNoTime.val && c.isNoTime.val !== null" class="group-input">
            <span class="text-gray-700">{{ c.isDistanceProb.question }}</span>
            <div class="mt-2">
            <label class="inline-flex items-center">
              <input v-model="c.isDistanceProb.val" type="radio" class="form-radio" :name="c.isDistanceProb.keyword" :value=1>
              <span class="ml-2">Ya</span>:
            </label>
            <label class="inline-flex items-center ml-6">
              <input v-model="c.isDistanceProb.val" type="radio" class="form-radio" :name="c.isDistanceProb.keyword" :value=0>
              <span class="ml-2">Tidak</span>
            </label>
            </div>
          </div>
        </div>
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
      c: {
        isDoingCheckup: {
          question: 'Apakah pasien melakukan pemeriksaan kesehatan?',
          keyword: 'Pemeriksaan kesehatan',
          showRootCauseIf: 0,
          val: null
        },
        isRoutine: {
          question: 'Apakah pemeriksaan kesehatan dilakukan secara rutin?',
          keyword: 'Pemeriksaan rutin',
          val: null
        },
        isNoTime: {
          question: 'Apakah pasien merasa sibuk sehingga tidak memiliki waktu untuk melakukan pemeriksaan?',
          keyword: 'Pasien merasa sibuk',
          showRootCauseIf: 1,
          val: null
        },
        isDistanceProb: {
          question: 'Apakah pasien mengalami kendala terkait dengan jarak?',
          keyword: 'Kendala jarak',
          showRootCauseIf: 1,
          val: null
        }
      },
      checkUpRecc: {
        isConsultBloodGl: {
          val: false,
          rec: 'Berikan konsultasi pentingnya melakukan kontrol gula darah secara rutin, dampak tidak melakukan pemeriksaan, buatkan jadwal kontrol'
        },
        isMaintainRoutine: {
          val: false,
          rec: 'Dorong pasien untuk mempertahankan kepatuhan pemeriksaan dan berobat'
        },
        isAddSelfCheck: {
          val: false,
          rec: 'Rekomendasikan pasien untuk melakukan kontrol mandiri, siapkan skema home care'
        },
        isHomecare: {
          val: false,
          rec: 'Siapkan skema home care, rekomendasikan untuk mengikuti kegiatan posyandu/posbindu'
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
      if (this.c.isDoingCheckup.val) {
        if (this.c.isRoutine.val) listRecc.push(this.checkUpRecc.isMaintainRoutine.rec)
        else if (!this.c.isRoutine.val && this.c.isRoutine.val !== null) {
          if (this.c.isNoTime.val) {
            listRecc.push(this.checkUpRecc.isAddSelfCheck.rec)
          } else if (!this.c.isNoTime.val && this.c.isNoTime.val !== null) {
            if (this.c.isDistanceProb.rec) listRecc.push(this.checkUpRecc.isHomecare.rec)
            else listRecc.push(this.checkUpRecc.isConsultBloodGl.rec)
          }
        }
      }
      if (!this.c.isDoingCheckup.val) {
        listRecc.push(this.checkUpRecc.isConsultBloodGl.rec)
      }
      return listRecc
    }
  },
  methods: {
    nextPage () {
      this.$emit('pemeriksaan-kes', this.getRecList)
      store.dispatch('setRootCause', this.getRootCause())
    },
    getRootCause () {
      const cause = []
      for (const key in this.c) {
        if (this.c[key].val !== null && (this.c[key].val === this.c[key].showRootCauseIf)) {
          cause.push(this.c[key].keyword)
        }
      }
      this.rootCause = cause
      return cause
    }
  }
}
</script>
