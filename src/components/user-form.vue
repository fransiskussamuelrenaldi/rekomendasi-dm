<template>
  <div class="p-8 mt-6 lg:mt-0 rounded shadow bg-white ">
    <form class="w-full max-w-lg">
      <div class="name flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
              Nama Pasien
          </label>
          <input
            v-model="name"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ref="name"
            type="text"
            placeholder="Ketik nama pasien"
            @input="handleInput('name')"
          >
          </div>
      </div>
      <div class="weight flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="address">
              Alamat
          </label>
          <input
            v-model="address"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ref="address"
            type="text"
            placeholder="Ketik alamat pasien"
            @input="handleInput('address')"
          >
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="city">
            Usia
          </label>
          <input
            v-model="age"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ref="age"
            type="text"
            pattern="[0-9]*"
            placeholder="Ketik umur"
            @keypress="formatNumber($event)"
            @input="handleInput('age')"
          >
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="state">
            Jenis Kelamin
          </label>
          <div class="relative">
            <select
              v-model="gender"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ref="gender"
              @change="handleInput('gender')"
            >
              <option disabled value="">Pilih jenis kelamin</option>
              <option>Pria</option>
              <option>Wanita</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <hr class="bg-gray-300 my-12" />

      <!-- Data Konsultan starts -->
      <div class="consultant flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="name">
              Nama Konsultan
          </label>
          <input
            v-model="consultantName"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ref="consultantName"
            type="text"
            placeholder="Ketik nama konsultan"
            @input="handleInput('consultantName')"
          >
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="state">
            Tenaga Konsultan
          </label>
          <div class="relative">
            <select
              v-model="consultantType"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ref="consultantType"
              @change="handleInput('consultantType')"
            >
              <option disabled value="">Pilih tenaga konsultan</option>
              <option>Dokter</option>
              <option>Apoteker</option>
              <option>Perawat</option>
              <option>Gizi</option>
              <option>Kesehatan Masyarakat</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
      <!-- Data Konsultan ends -->
      <hr class="bg-gray-300 my-12" />

      <!-- Data Pemeriksaan starts -->
      <div class="general-check flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
            Berat Badan (Kg)
          </label>
          <input
            v-model="weight"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ref="weight"
            type="text"
            pattern="[0-9]*"
            placeholder="Ketik berat badan"
            @keypress="formatNumber($event)"
            @input="handleInput('weight')"
          >
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
            Tinggi Badan (cm)
          </label>
          <input
            v-model="height"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ref="height"
            type="text"
            pattern="[0-9]*"
            placeholder="Ketik tinggi badan"
            @keypress="formatNumber($event)"
            @input="handleInput('height')"
          >
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
            BMI (kg/m2)
          </label>
          <input
            disabled
            v-model="calcBmi"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ref="calcBmi"
            type="text"
            pattern="[0-9]*"
            placeholder="-"
            @change="handleInput('calcBmi')"
          >
        </div>
      </div>

      <div class="general-check flex flex-wrap -mx-3 mb-6">
        <div class="flex-1 md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
            Gula Darah Puasa (mg/dL)
          </label>
          <input
            :disabled="isHba1cFilled"
            v-model="fastingBloodGlucose"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ref="fastingBloodGlucose"
            type="text"
            pattern="[0-9]*"
            :placeholder="isHba1cFilled ? '-' : 'Ketik gula darah puasa'"
            @keypress="formatNumber($event)"
            @input="handleInput('fastingBloodGlucose')"
          >
        </div>
        <div class="flex-grow-0 self-center mx-2 my-4 md:mb-0">
          atau
        </div>
        <div class="flex-1 md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
            HbA1C (%)
          </label>
          <input
            :disabled="isBloodGlucoseFilled"
            v-model="hba1c"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ref="hba1c"
            type="text"
            pattern="[0-9]*"
            :placeholder="isBloodGlucoseFilled ? '-' : 'Ketik kadar HbA1C'"
            @keypress="formatNumber($event)"
            @input="handleInput('hba1c')"
          >
        </div>
      </div>
      <!-- Data Pemeriksaan ends -->
    </form>
  </div>
</template>

<script>
import store from '../store'
export default {
  data () {
    return {
      name: '',
      age: '',
      gender: '',
      weight: '',
      height: '',
      address: '',
      consultantType: '',
      consultantName: '',
      fastingBloodGlucose: '',
      hba1c: ''
    }
  },
  computed: {
    isHba1cFilled () {
      return this.hba1c !== ''
    },
    isBloodGlucoseFilled () {
      return this.fastingBloodGlucose !== ''
    },
    calcBmi () {
      if (!this.weight || !this.height) return 0
      return (+this.weight / ((+this.height / 100) ** 2)).toFixed(2)
    },
    glucoseRec () {
      const glucose = {}
      if (this.isBloodGlucoseFilled) {
        if (this.fastingBloodGlucose < 70) {
          glucose.type = 'Hipoglikemia'
          glucose.rec = 'Anda tergolong dalam kategori hipoglikemi. Kondisi ini perlu segera mendapat penanganan tenaga medis. Konsultasikan dan periksakan kondisi kesehatan anda secara rutin.'
        } else if (this.fastingBloodGlucose < 99.9) {
          glucose.type = 'Gula Darah Normal'
          glucose.rec = 'Pertahankan, diabetes anda terkontrol. Lakukan pemeriksaan kesehatan secara rutin setiap satu bulan sekali. Minum obat secara teratur dan lakukan pola hidup sehat'
        } else if (this.fastingBloodGlucose < 125) {
          glucose.type = 'Prediabetes'
          glucose.rec = 'Kondisi anda tergolong dalam prediabetes. Lakukan pengaturan pola makan, aktivitas fisik dan olah raga, serta minum obat teratur. Lakukan konsultasi dengan tenaga kesehatan anda.'
        } else if (this.fastingBloodGlucose >= 126) {
          glucose.type = 'Diabetes'
          glucose.rec = 'Anda tergolong dalam kategori diabetes. Minumlah obat secara teratur, lakukan kontrol dan konsultasikan kondisi kesehatan anda secara rutin (minimal satu bulan satu kali). Lakukan pola hidup sehat secara ketat, lakukan olah raga secara rutin dan atur pola makan anda sesuai dengan anjuran tenaga kesehatan.'
        }
      } else if (this.isHba1cFilled) {
        if (this.hba1c < 5.7) {
          glucose.type = 'Normal'
          glucose.rec = 'Pertahankan, kondisi diabetes anda terkontrol. Silahkan periksa kembali dalam 3-6 bulan. Minum obat secara teratur dan lakukan pola hidup sehat.'
        } else if (this.hba1c < 6.4) {
          glucose.type = 'Prediabetes'
          glucose.rec = 'Kondisi anda tergolong dalam prediabetes. Lakukan pengaturan pola makan, aktivitas fisik dan olah raga, serta minum obat teratur. Lakukan konsu'
        } else if (this.hba1c >= 6.5) {
          glucose.type = 'Diabetes'
          glucose.rec = 'Anda tergolong dalam kategori diabetes. Minumlah obat secara teratur, lakukan kontrol dan konsultasikan kondisi kesehatan anda secara rutin (minimal satu bulan satu kali). Lakukan pola hidup sehat secara ketat, lakukan olah raga secara rutin dan atur pola makan anda sesuai dengan anjuran tenaga kesehatan.'
        }
      }
      if (glucose.rec) store.dispatch('setGlucoseRec', glucose)
      return glucose
    },
    bmiRec () {
      const bmi = {}
      if (this.calcBmi < 18.5) {
        bmi.type = 'Underweight'
        bmi.rec = 'Perlu adanya peningkatan asupan, berat badan anda di bawah normal, konsultasikan diet anda'
      } else if (this.calcBmi < 24.9) {
        bmi.type = 'BB Normal'
        bmi.rec = 'Pertahankan, anda termasuk ke dalam kelompok berat badan ideal'
      } else if (this.calcBmi < 29.9) {
        bmi.type = 'Pre-Obesitas'
        bmi.rec = 'Berat Badan anda sedikit di atas normal, lakukan aktivitas fisik, olah raga ringan, dan konsultasikan diet pada profesional kesehatan.'
      } else if (this.calcBmi < 34.9) {
        bmi.type = 'Obesitas Kelas I'
        bmi.rec = 'Berat Badan anda di atas normal, lakukan aktivitas fisik dan olah raga rutin, pantau status kesehatan, dan konsultasikan diet pada profesional kesehatan.'
      } else if (this.calcBmi < 39.9) {
        bmi.type = 'Obesitas Kelas II'
        bmi.rec = 'Anda termasuk kelompok obesitas kelas II. Butuh usaha secara intens. Lakukan aktivitas dan olah raga rutin, pantau status kesehatan secara berkala, dan lakukan konsultasi diet pada profesional kesehatan'
      } else if (this.calcBmi >= 40) {
        bmi.type = 'Obesitas Kelas III'
        bmi.rec = 'Anda termasuk kelompok obesitas kelas III. Butuh usaha yang maksimal. Lakukan aktivitas dan olah raga rutin, pantau status kesehatan secara berkala, dan lakukan konsultasi diet pada profesional kesehatan'
      }

      if (bmi.rec) store.dispatch('setBmiRec', bmi)
      return bmi
    }
  },
  methods: {
    formatNumber (evt) {
      if (!evt) evt = window.event
      var charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    handleInput (refName) {
      this.$emit('setPatientInput', {
        [refName]: this[refName]
      })
    }
  }
}
</script>

<style>
</style>
