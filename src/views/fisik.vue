<template>
  <div class="container text-left px-12 mx-12">
    <p class="text-2xl"> Aktivitas Fisik </p>
    <div class="mt-4">
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
        <!-- <span class="text-gray-700">{{ p.isNoTime.question }}</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input v-model="p.isNoTime.val" type="radio" class="form-radio" :name="p.isNoTime.keyword" :value=1>
            <span class="ml-2">Ya</span>:
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="p.isNoTime.val" type="radio" class="form-radio" :name="p.isNoTime.keyword" :value=0>
            <span class="ml-2">Tidak</span>
          </label>
        </div> -->
      </template>
    <button
      @click="nextPage"
      :class="['my-6 bg-transparent text-gray-700 font-semibold py-2 px-4 border border-gray-500 rounded']">
      Rekomendasi
    </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      p: {
        isDoing: {
          question: 'Apakah pasien melakukan aktivitas fisik?',
          keyword: 'Aktivitas fisik',
          val: null
        },
        isRoutine: {
          question: 'Apakah pasien melakukan olah raga secara rutin?',
          keyword: 'OR rutin',
          val: null
        },
        isNoTime: {
          question: 'Apakah pasien merasa tidak memiliki waktu untuk melakukan olahraga?',
          keyword: 'OR rutin',
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
      if (!this.p.isDoing.val) {
        listRecc.push(this.physRecc.isMantainPE.rec)
        listRecc.push(this.physRecc.isAddRoutine.rec)
        listRecc.push(this.physRecc.isJoinActivity.rec)
      }
      return listRecc
    }
  },
  methods: {
    nextPage () {
      this.$emit('pola-makan', this.getRecList)
    }
  }
}
</script>
