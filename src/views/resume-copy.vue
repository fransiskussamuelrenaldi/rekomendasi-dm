<template>
  <div>
    <div id="resumeContent" class="whole-container container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
      <div class="w-full p-8 mt-6 lg:mt-0 rounded shadow bg-white">
        <p class="flex items-center break-normal text-gray-700 px-2 mt-12 lg:mt-0 md:text-xl font-bold"> Identitas Pasien </p>
        <div v-if="patientData" class="px-2 py-4 identity-list">
          <table>
            <tr>
              <td>Nama Pasien </td>
              <td> : {{ patientData.name || '' }}</td>
            </tr>
            <tr>
              <td>NIK </td>
              <td> : {{ patientData.nik || '' }}</td>
            </tr>
            <tr>
              <td>Nomor KIS </td>
              <td> : {{ patientData.kis || '' }}</td>
            </tr>
            <tr>
              <td>Alamat</td>
              <td> : {{ patientData.address || '' }}</td>
            </tr>
            <tr>
              <td>Jenis Kelamin</td>
              <td> : {{ patientData.gender || '' }}</td>
            </tr>
            <tr>
              <td>Usia</td>
              <td> : {{ patientData.age || '-' }} tahun</td>
            </tr>
            <tr>
              <td>Berat Badan</td>
              <td> : {{ patientData.weight || '-' }} kg</td>
            </tr>
            <tr>
              <td>Tinggi Badan</td>
              <td> : {{ patientData.height || '-' }} cm</td>
            </tr>
            <tr>
              <td>BMI</td>
              <td> : {{ patientData.calcBmi || '-' }} kg/m<sup>2</sup></td>
            </tr>
          </table>
        </div>
      </div>

      <div class="w-full p-8 mt-6 rounded shadow bg-white">
        <p class="flex items-center break-normal text-gray-700 md:text-xl pb-4 font-bold"> Identifikasi Masalah Umum </p>
        <p><span class="text-gray-700 font-bold">{{ bmiRecommendation.type }} :</span> <span class="text-gray-700">{{ bmiRecommendation.rec }}</span></p>
        <p><span class="text-gray-700 font-bold">{{ glucoseRecommendation.type }} :</span> : <span class="text-gray-700">{{ glucoseRecommendation.rec }}</span></p>
      </div>
      <div class="w-full p-8 mt-6 rounded shadow bg-white">
        <p class="flex items-center break-normal text-gray-700 md:text-xl pb-4 font-bold"> Identifikasi Masalah Terkait Pengobatan </p>
        <ul v-for="(item, index) in rootCause" :key="index + 'root-obat'">
          {{ item  }}
        </ul>
      </div>
      <div class="w-full p-8 mt-6 rounded shadow bg-white">
        <p class="flex items-center break-normal text-gray-700 md:text-xl pb-4 font-bold"> Rekomendasi </p>
        <ul v-for="(item, index) in recommendations" :key="index + 'rec'">
          {{ item  }}
        </ul>
      </div>
    </div>
    <div class="whole-container container w-full flex flex-wrap mx-auto px-2 pt-8 md:pt-2 sm:pt-2 mt-2">
      <div class="w-full flex p-8 mt-6 rounded shadow bg-white">
        <button
          @click="copyToClipboard"
          class="shadow bg-orange-700 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4"
          type="button"
        >
          Copy
        </button>
          <button
          @click="onUserPrint"
          class="shadow bg-orange-700 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4"
          type="button"
        >
          Cetak
        </button>
        <button
          @click="back"
          class="shadow bg-orange-700 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4"
          type="button"
        >
          Kembali
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '../store'
import router from '../router'

export default {
  beforeRouteEnter (to, from, next) {
    if (store.state.patientData && !store.state.patientData.name) router.push({ name: 'entry' })
    else next()
    next()
  },
  computed: {
    ...mapState({
      patientData: state => state.patientData || {},
      recommendations: state => state.reccomendations || [],
      glucoseRecommendation: state => state.glucoseRecommendation || [],
      bmiRecommendation: state => state.bmiRecommendation || [],
      rootCause: state => state.rootCause || []
    })
  },
  methods: {
    back () {
      router.replace({ name: 'entry' })
      store.dispatch('setBmiRec', { type: '', rec: '' })
      store.dispatch('setGlucoseRec', { type: '', rec: '' })
      store.dispatch('setCalcBmi', { calcBmi: '' })
    },
    copyToClipboard () {
      // TODO: Add simple toast
      const el = document.createElement('textarea')

      el.value = document.querySelector('#resumeContent').innerText

      document.body.appendChild(el)
      el.select()
      try {
        document.execCommand('copy')
        alert('Rekomendasi anda telah disalin')
      } catch (error) {
        alert('Maaf terjadi kesalahan saat menyalin')
      } finally {
        document.body.removeChild(el)
      }
    },
    onUserPrint () {
      const prtHtml = document.getElementById('resumeContent').innerHTML
      let stylesHtml = ''
      for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
        stylesHtml += node.outerHTML
      }
      const WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0')

      WinPrint.document.write(`<!DOCTYPE html>
      <html>
        <head>
          ${stylesHtml}
        </head>
        <body>
          ${prtHtml}
        </body>
        <br>
        <br>
        <footer class="mx-4">2020 - Tatalaksana Diagnosis Ketidakpatuhan Pasien Diabetes Mellitus (FSR)</footer>
      </html>`)

      WinPrint.document.close()
      WinPrint.focus()
      WinPrint.print()
    }
  }
}
</script>
