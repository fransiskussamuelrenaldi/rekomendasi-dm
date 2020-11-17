<template>
  <!-- container starts -->
  <div class="whole-container container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
    <template>
      <div class="left-sidebar-pointers w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
        <div
          class="w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"
          style="top: 6em"
          id="menu-content"
        >
          <ul class="list-reset py-2 md:py-0">
            <li
              class="py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-l-4 border-transparent font-bold border-orange-600"
            >
              <a
                href="#section1"
                class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
              >
                <span class="pb-1 md:pb-0 text-sm">Identitas Pasien</span>
              </a>
            </li>
            <li
              class="py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-l-4 border-transparent"
            >
              <a
                href="#section2"
                class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
              >
                <span class="pb-1 md:pb-0 text-sm"
                  >Penggunaan Orbat Herbal</span
                >
              </a>
            </li>
            <li
              class="py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-l-4 border-transparent"
            >
              <a
                href="#section3"
                class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
              >
                <span class="pb-1 md:pb-0 text-sm"
                  >Pengaturan Pola Makan</span
                >
              </a>
            </li>
            <li
              class="py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-l-4 border-transparent"
            >
              <a
                href="#section4"
                class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
              >
                <span class="pb-1 md:pb-0 text-sm"
                  >Pengaturan Aktifitas Fisik</span
                >
              </a>
            </li>

            <li
              class="py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-l-4 border-transparent"
            >
              <a
                href="#section4"
                class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
              >
                <span class="pb-1 md:pb-0 text-sm"
                  >Pemeriksaan Kesehatan </span
                >
              </a>
            </li>

            <li
              class="py-1 md:my-2 hover:bg-orange-100 lg:hover:bg-transparent border-l-4 border-transparent"
            >
              <a
                href="#section5"
                class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
              >
                <span class="pb-1 md:pb-0 text-sm">Tindak Lanjut</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section class="w-full lg:w-4/5">
        <h1
          class="flex items-center font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl"
        >
          Borang
        </h1>
        <hr class="bg-gray-300 my-12" />
        <h2
          id="section1"
          class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl"
        >
          Identitas Pasien
        </h2>
        <user-form @setPatientInput="setPatientInput"></user-form>
        <hr class="bg-gray-300 my-12" />

        <h2 class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Masalah Tentang Obat
        </h2>
        <div id="section2" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <obat @obat="obat"></obat>
        </div>

        <hr class="bg-gray-300 my-12" />

        <h2 class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Penggunaan Orbat Herbal
        </h2>
        <div id="section3" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <herbal @herbal="herbal"></herbal>
        </div>

        <hr class="bg-gray-300 my-12" />

        <h2 class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Pengaturan Pola Makan
        </h2>
        <div id="section4" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <pola-makan @pola-makan="polaMakan"></pola-makan>
        </div>

        <hr class="bg-gray-300 my-12" />

        <h2 class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Pengaturan Aktifitas Fisik
        </h2>
        <div id="section5" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <fisik @fisik="fisik"></fisik>
        </div>

        <hr class="bg-gray-300 my-12" />

        <h2 class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Pemeriksaan Kesehatan
        </h2>
        <div id="section6" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <pemeriksaan-kes @pemeriksaan-kes="pemeriksaanKes"></pemeriksaan-kes>
        </div>

        <hr class="bg-gray-300 my-12" />

        <h2 class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Rekomendasi Akhir dan Identifikasi Masalah
        </h2>
        <div id="section7" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <template>
            <p class="text-lg">Identifikasi Masalah</p>
            <ol v-for="(item, index) in rootCause" :key="index + 'cause'"> {{ item }}</ol>
          </template>
          <hr class="bg-gray-300 my-4" />
          <template>
            <p class="text-lg">Rekomendasi</p>
            <ul v-for="(item, index) in obatRec" :key="index + 'obat'"> {{ item }} </ul>
            <ul v-for="(item, index) in herbalRec" :key="index + 'herbal'"> {{ item }} </ul>
            <ul v-for="(item, index) in polaMakanRec" :key="index + 'makan'"> {{ item }} </ul>
            <ul v-for="(item, index) in fisikRec" :key="index + 'fisik'"> {{ item }} </ul>
            <ul v-for="(item, index) in pemeriksaanKesRec" :key="index + 'kes'"> {{ item }} </ul>
          </template>
        </div>
      </section>
    </template>

    <!-- footer and disclaimers -->
    <template>
      <div class="left-sidebar-pointers w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal"></div>
      <section class="w-full lg:w-4/5">
      <hr class="bg-gray-300 my-12" />
      <h2 class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
        Tindak Lanjut
      </h2>
      <!-- TODO: upsate if else -->
      <div id="section7" class="p-8 mt-6 mb-10 lg:mt-0 rounded shadow bg-white">
        <blockquote class="border-l-4 border-orange-600 italic my-4 pl-8 md:pl-12">
          Pastikan bahwa seluruh data sudah terisi dengan benar dan
          rekomendasi sudah muncul pada halaman ini untuk melanjutkan
        </blockquote>
        <div class="pt-8">
          <template>
            <button
              @click="onGoToResume"
              :disable="!isGoToResumeEnable"
              :class="[
                !isGoToResumeEnable
                  ? 'bg-gray-400 text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4'
                  : 'shadow bg-orange-700 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4',
              ]"
              type="button"
            >
              Lihat Rangkuman
            </button>
          </template>
        </div>
      </div>
    </section>
    </template>
    <!-- end footer and disclaimers -->
  </div>
</template>

<script>
import store from '../store'
import userForm from '../components/user-form'
import herbal from '../views/herbal'
import obat from '../views/obat'
import polaMakan from '../views/pola-makan'
import fisik from '../views/fisik'
import pemeriksaanKes from '../views/pemeriksaan-kes'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      herbalRec: [],
      polaMakanRec: [],
      fisikRec: [],
      obatRec: [],
      pemeriksaanKesRec: [],
      generalCheckRec: [],
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
        hba1c: ''
      },
      isResumeOpen: false
    }
  },
  components: {
    userForm,
    herbal,
    obat,
    polaMakan,
    fisik,
    pemeriksaanKes
  },
  computed: {
    ...mapState({
      rootCause: state => state.rootCause || []
    }),
    isGoToResumeEnable () {
      return (
        this.patientData.name !== '' &&
        this.patientData.age !== '' &&
        this.patientData.gender !== '' &&
        this.patientData.weight !== '' &&
        this.patientData.height !== '' &&
        this.patientData.address !== '' &&
        this.patientData.consultantType !== '' &&
        this.patientData.consultantName !== '' &&
        (this.patientData.fastingBloodGlucose !== '' || this.patientData.hba1c !== '')
      )
    },
    getAllRecommendation () {
      return [...(this.herbalRec || []), ...(this.polaMakanRec || []), ...(this.fisikRec || []), ...(this.obatRec || []), ...(this.pemeriksaanKesRec || [])]
    }
  },
  methods: {
    herbal (val) {
      this.herbalRec = val
    },
    polaMakan (val) {
      this.polaMakan = val
    },
    fisik (val) {
      this.fisikRec = val
    },
    obat (val) {
      this.obatRec = val
    },
    pemeriksaanKes (val) {
      this.pemeriksaanKesRec = val
    },
    generalCheck (val) {
      this.generalCheckRec = val
    },
    showResumePage () {
      this.isResumeOpen = true
    },
    setPatientInput (obj) {
      const key = Object.keys(obj)[0]
      this.patientData[key] = obj[key]
    },
    onGoToResume () {
      store.dispatch('setPatientData', this.patientData)
      store.dispatch('setRecommendations', this.getAllRecommendation)
      this.$router.push({ name: 'resume' })
    }
  }
}
</script>
