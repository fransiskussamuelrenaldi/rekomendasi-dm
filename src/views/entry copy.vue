<template>
  <div
    class="bg-gray-100 text-gray-900 tracking-wider text-left leading-normal"
  >
    <nav id="header" class="bg-white fixed w-full z-10 top-0 shadow">
      <div
        class="w-full container mx-auto flex flex-wrap items-center justify-between my-4"
      >
        <div class="pl-4 md:pl-0">
          <a
            class="flex items-center text-orange-600 text-base xl:text-xl no-underline hover:no-underline font-extrabold"
            href="#"
          >
            <svg
              class="fill-current h-6 inline-block text-orange-600 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16 2h4v15a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V0h16v2zm0 2v13a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4h-2zM2 2v15a1 1 0 0 0 1 1h11.17a2.98 2.98 0 0 1-.17-1V2H2zm2 8h8v2H4v-2zm0 4h8v2H4v-2zM4 4h8v4H4V4z"
              />
            </svg>
            Tatalaksana Diagnosis Ketidakpatuhan Diabetes Mellitus
          </a>
        </div>
        <div class="pr-0 flex justify-end">
          <div class="flex relative inline-block float-right">
            <div class="relative text-sm">
              <div
                id="userMenu"
                class="bg-white rounded shadow-md mt-2 mr-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible"
              >
                <ul class="list-reset">
                  <li>
                    <a
                      href="#"
                      class="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline"
                      >My account</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline"
                      >Notifications</a
                    >
                  </li>
                  <li>
                    <hr class="border-t mx-2 border-gray-400" />
                  </li>
                  <li>
                    <a
                      href="#"
                      class="px-4 py-2 block text-orange-600 font-bold hover:bg-orange-600 hover:text-white no-underline hover:no-underline"
                      >Logout</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- container starts -->
    <div class="whole-container container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">
      <template v-if="!isResumeOpen">
        <div class="left-sidebar-pointers w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal">
          <p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p>
          <div class="block lg:hidden sticky inset-0">
            <button
              id="menu-toggle"
              class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-orange-600 appearance-none focus:outline-none"
            >
              <svg
                class="fill-current h-3 float-right"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </button>
          </div>
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
                  href="#section5"
                  class="block pl-4 align-middle text-gray-700 no-underline hover:text-orange-600"
                >
                  <span class="pb-1 md:pb-0 text-sm">Tindak Lanjut</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- TODO fix this not showing -->
          <div
            class="w-full lg:w-4/5 lg:ml-auto text-base md:text-sm text-gray-600 px-4 py-24 mb-12"
          >
            <span class="text-base text-orange-600 font-bold"></span>
            <a
              href="#"
              class="text-base md:text-sm text-orange-600 font-bold no-underline hover:underline"
              >Kembali ke atas</a
            >
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
            <pola-makan @pola-makan="pola - makan"></pola-makan>
          </div>

          <hr class="bg-gray-300 my-12" />

          <h2 class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
            Pengaturan Aktifitas Fisik
          </h2>
          <div id="section5" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
            <fisik></fisik>
          </div>

          <hr class="bg-gray-300 my-12" />

          <h2 class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
            Rekomendasi Akhir dan Identifikasi Masalah
          </h2>
          <div id="section6" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
            <template>
              <p>Rekomendasi :</p>
              <ul v-for="(item, index) in reccList" :key="index + 'rec'">
                {{
                  item
                }}
              </ul>
              <p>Identifikasi Masalah :</p>
              <ol v-for="(item, index) in reccList" :key="index + 'keyword'">
                {{
                  item.keyword
                }}
              </ol>
            </template>
          </div>
        </section>
      </template>
      <template v-else>
        <resume ref="resumeData" :patientData="patientData" :summary="coba"></resume>
      </template>

      <!-- footer and disclaimers -->
      <template>
       <div class="left-sidebar-pointers w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal"></div>
       <section class="w-full lg:w-4/5">
        <hr class="bg-gray-300 my-12" />
        <h2 v-if="!isResumeOpen" class="font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
          Tindak Lanjut
        </h2>
        <div id="section7" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
          <blockquote class="border-l-4 border-orange-600 italic my-4 pl-8 md:pl-12">
            Pastikan bahwa seluruh data sudah terisi dengan benar dan
            rekomendasi sudah muncul pada halaman ini untuk melanjutkan
          </blockquote>
          <div class="pt-8">
            <template v-if="!isResumeOpen">
              <button
                :disable="!isGoToResumeEnable"
                :class="[
                  !isGoToResumeEnable
                    ? 'bg-gray-400 text-white focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4'
                    : 'shadow bg-orange-700 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4',
                ]"
                type="button"
              >
                View Resume
              </button>
            </template>
            <template v-else>
              <button
                @click="copyToClipboard"
                class="shadow bg-orange-700 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4"
                type="button"
              >
                Copy
              </button>
               <button
                class="shadow bg-orange-700 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mr-4"
                type="button"
              >
                Print
              </button>
            </template>
          </div>
        </div>
      </section>
      </template>
      <!-- end footer and disclaimers -->
    </div>
  </div>
</template>

<script>
import userForm from '../components/user-form'
import resume from '../components/resume'
import herbal from '../views/herbal'
import obat from '../views/obat'
import polaMakan from '../views/pola-makan'
import fisik from '../views/fisik'
export default {
  data () {
    return {
      coba: {
        rec: 'wkwkkw'
      },
      reccList: [],
      patientData: {
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        weight: '',
        address: ''
      },
      isResumeOpen: true
    }
  },
  components: {
    userForm,
    herbal,
    obat,
    polaMakan,
    fisik,
    resume
  },
  computed: {
    isGoToResumeEnable () {
      return (
        this.patientData.firstName !== '' &&
        this.patientData.lastName !== '' &&
        this.patientData.age !== '' &&
        this.patientData.gender !== '' &&
        this.patientData.gender !== '' &&
        this.patientData.weight !== '' &&
        this.patientData.address !== ''
      )
    }
  },
  methods: {
    herbal (val) {
      this.reccList = [...val]
    },
    polaMakan (val) {
      this.reccList = val
    },
    fisik (val) {
      this.reccList = val
    },
    obat (val) {
      this.reccList = val
    },
    setPatientInput (obj) {
      const key = Object.keys(obj)[0]
      this.patientData[key] = obj[key]
    },
    copyToClipboard () {
      // TODO: Continue with UI
      const el = document.createElement('textarea')

      el.value = document.querySelector('#resumeContent').innerHTML
      document.body.appendChild(el)
      el.select()
      try {
        document.execCommand('copy')
        alert('Testing code was copied ' + el.value)
      } catch (error) {
        alert('Oops, unable to copy')
      } finally {
        document.body.removeChild(el)
      }
    }
  }
}
</script>
