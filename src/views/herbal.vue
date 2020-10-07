<template>
  <div class="container text-left">
    <!-- <p class="text-2xl"> Herbal </p> -->
    <div class="">
      <div class="group-input">
        <span class="text-gray-700">{{ h.isUsing.question }}</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input v-model="h.isUsing.val" type="radio" class="form-radio" :name="h.isUsing.keyword" :value=1>
            <span class="ml-2">Ya</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="h.isUsing.val" type="radio" class="form-radio" :name="h.isUsing.keyword" :value=0>
            <span class="ml-2">Tidak</span>
          </label>
        </div>
      </div>
      <template v-if="h.isUsing.val">
        <div v-if="h.isUsing.val" class="group-input">
          <span class="text-gray-700">{{ h.isAdjuvan.question }}</span>
          <div class="mt-2">
            <label class="inline-flex items-center">
              <input v-model="h.isAdjuvan.val" type="radio" class="form-radio" :name="h.isAdjuvan.keyword" :value=1>
              <span class="ml-2">Ya</span>:
            </label>
            <label class="inline-flex items-center ml-6">
              <input v-model="h.isAdjuvan.val" type="radio" class="form-radio" :name="h.isAdjuvan.keyword" :value=0>
              <span class="ml-2">Tidak</span>
            </label>
          </div>
        </div>
        <div v-if="!h.isAdjuvan.val && h.isAdjuvan.val !== null" class="group-input">
          <span class="text-gray-700">{{ h.isSingleUse.question }}</span>
          <div class="mt-2">
            <label class="inline-flex items-center">
              <input v-model="h.isSingleUse.val" type="radio" class="form-radio" :name="h.isSingleUse.keyword" :value=1>
              <span class="ml-2">Ya</span>:
            </label>
            <label class="inline-flex items-center ml-6">
              <input v-model="h.isSingleUse.val" type="radio" class="form-radio" :name="h.isSingleUse.keyword" :value=0>
              <span class="ml-2">Tidak</span>
            </label>
          </div>
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
export default {
  data () {
    return {
      h: {
        isUsing: {
          question: 'Apakah pasien menggunakan obat herbal?',
          keyword: 'Obat herbal',
          val: null,
          isShow: true
        },
        isAdjuvan: {
          question: 'Apakah digunakan sebagai adjuvan/tambahan terhadap obat resep yang diberikan?',
          keyword: 'Adjuvan',
          val: null,
          isShow: false
        },
        isSingleUse: {
          question: 'Konfirmasi apakah obat herbal digunakan secara tunggal untuk mengobati DM?',
          keyword: 'Obat herbal tunggal',
          val: null,
          isShow: false
        }
      },
      herbalReccomendations: {
        isAdjuvan: {
          val: false,
          rec: 'Berikan penjelasan tentang waktu minum obat herbal dan obat real, motivasi pasien utk menggunakan obat scr rasional'
        },
        isObatTunggal: {
          val: false,
          rec: 'Berikan penjelasan tentang waktu minum obat herbal sbg adjuvan dan perlu kontrol rutin'
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
      if (this.h.isUsing.val && this.h.isAdjuvan.val) listRecc.push(this.herbalReccomendations.isAdjuvan.rec)
      if (this.h.isUsing.val && !this.h.isAdjuvan.val && this.h.isSingleUse.val) listRecc.push(this.herbalReccomendations.isObatTunggal.rec)
      return listRecc
    }
  },
  methods: {
    nextPage () {
      this.$emit('herbal', this.getRecList)
    }
  }
}
</script>
