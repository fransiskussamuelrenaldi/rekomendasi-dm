<template>
  <div class="container text-left">
    <!-- <p class="text-2xl"> Obat </p> -->
    <div class="">
      <div class="group-input">
        <span class="text-gray-700">{{ o.isUsingMed.question }}</span>
        <div class="mt-2">
          <label class="inline-flex items-center">
            <input v-model="o.isUsingMed.val" type="radio" class="form-radio" :name="o.isUsingMed.keyword" :value=1>
            <span class="ml-2">Ya</span>
          </label>
          <label class="inline-flex items-center ml-6">
            <input v-model="o.isUsingMed.val" type="radio" class="form-radio" :name="o.isUsingMed.keyword" :value=0>
            <span class="ml-2">Tidak</span>
          </label>
        </div>
      </div>
      <template v-if="o.isUsingMed.val">
        <div v-if="o.isUsingMed.val" class="group-input">
          <span class="text-gray-700">{{ o.isBadExp.question }}</span>
          <div class="mt-2">
            <label class="inline-flex items-center">
              <input v-model="o.isBadExp.val" type="radio" class="form-radio" :name="o.isBadExp.keyword" :value=1>
              <span class="ml-2">Ya</span>
            </label>
            <label class="inline-flex items-center ml-6">
              <input v-model="o.isBadExp.val" type="radio" class="form-radio" :name="o.isBadExp.keyword" :value=0>
              <span class="ml-2">Tidak</span>
            </label>
          </div>
          <!-- bad exp starts -->
          <div v-if="o.isBadExp.val" class="group-input">
            <span class="text-gray-700">{{ o.isEso.question }}</span>
            <div class="mt-2">
            <label class="inline-flex items-center">
                <input v-model="o.isEso.val" type="radio" class="form-radio" :name="o.isEso.keyword" :value=1>
                <span class="ml-2">Ya</span>
            </label>
            <label class="inline-flex items-center ml-6">
                <input v-model="o.isEso.val" type="radio" class="form-radio" :name="o.isEso.keyword" :value=0>
                <span class="ml-2">Tidak</span>
            </label>
            </div>
            <div v-if="o.isEso.val" class="group-input">
              <span class="text-gray-700">{{ o.isEsoTolerable.question }}</span>
              <div class="mt-2">
              <label class="inline-flex items-center">
                  <input v-model="o.isEsoTolerable.val" type="radio" class="form-radio" :name="o.isEsoTolerable.keyword" :value=1>
                  <span class="ml-2">Ya</span>
              </label>
              <label class="inline-flex items-center ml-6">
                  <input v-model="o.isEsoTolerable.val" type="radio" class="form-radio" :name="o.isEsoTolerable.keyword" :value=0>
                  <span class="ml-2">Tidak</span>
              </label>
              </div>
              <div v-if="(!o.isEsoTolerable.val && o.isEsoTolerable.val !== null)" class="group-input">
                <span class="text-gray-700">{{ o.isEsoHandled.question }}</span>
                <div class="mt-2">
                <label class="inline-flex items-center">
                  <input v-model="o.isEsoHandled.val" type="radio" class="form-radio" :name="o.isEsoHandled.keyword" :value=1>
                  <span class="ml-2">Ya</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input v-model="o.isEsoHandled.val" type="radio" class="form-radio" :name="o.isEsoHandled.keyword" :value=0>
                  <span class="ml-2">Tidak</span>
                </label>
                </div>
              </div>
            </div>
            <div v-if="this.o.isEso.val !== null" class="group-input">
              <span class="text-gray-700">{{ o.isOrganolepticProb.question }}</span>
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input v-model="o.isOrganolepticProb.val" type="radio" class="form-radio" :name="o.isOrganolepticProb.keyword" :value=1>
                  <span class="ml-2">Ya</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input v-model="o.isOrganolepticProb.val" type="radio" class="form-radio" :name="o.isOrganolepticProb.keyword" :value=0>
                  <span class="ml-2">Tidak</span>
                </label>
              </div>
              <div v-if="this.o.isOrganolepticProb.val" class="group-input">
                <span class="text-gray-700">{{ o.isSizeProblem.question }}</span>
                <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input v-model="o.isSizeProblem.val" type="radio" class="form-radio" :name="o.isSizeProblem.keyword" :value=1>
                    <span class="ml-2">Ya</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input v-model="o.isSizeProblem.val" type="radio" class="form-radio" :name="o.isSizeProblem.keyword" :value=0>
                    <span class="ml-2">Tidak</span>
                  </label>
                </div>
                <div v-if="this.o.isSizeProblem.val !== null" class="group-input">
                  <span class="text-gray-700">{{ o.isTasteProblem.question }}</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input v-model="o.isTasteProblem.val" type="radio" class="form-radio" :name="o.isTasteProblem.keyword" :value=1>
                      <span class="ml-2">Ya</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input v-model="o.isTasteProblem.val" type="radio" class="form-radio" :name="o.isTasteProblem.keyword" :value=0>
                      <span class="ml-2">Tidak</span>
                    </label>
                  </div>
                </div>
                <div v-if="this.o.isTasteProblem.val !== null" class="group-input">
                  <span class="text-gray-700">{{ o.isSmellProblem.question }}</span>
                  <div class="mt-2">
                    <label class="inline-flex items-center">
                      <input v-model="o.isSmellProblem.val" type="radio" class="form-radio" :name="o.isSmellProblem.keyword" :value=1>
                      <span class="ml-2">Ya</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input v-model="o.isSmellProblem.val" type="radio" class="form-radio" :name="o.isSmellProblem.keyword" :value=0>
                      <span class="ml-2">Tidak</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="(!o.isBadExp.val && o.isBadExp.val !== null) || (o.isOrganolepticProb.val !== null)" class="group-input">
            <!-- start A1 -->
            <div class="group-input">
              <span class="text-gray-700">{{ o.isTraumatic.question }}</span>
              <div class="mt-2">
              <label class="inline-flex items-center">
                  <input v-model="o.isTraumatic.val" type="radio" class="form-radio" :name="o.isTraumatic.keyword" :value=1>
                  <span class="ml-2">Ya</span>
              </label>
              <label class="inline-flex items-center ml-6">
                  <input v-model="o.isTraumatic.val" type="radio" class="form-radio" :name="o.isTraumatic.keyword" :value=0>
                  <span class="ml-2">Tidak</span>
              </label>
              </div>
            </div>
            <div v-if="o.isTraumatic.val" class="group-input">
              <span class="text-gray-700">{{ o.isLifeOrFamProb.question }}</span>
              <div class="mt-2">
              <label class="inline-flex items-center">
                <input v-model="o.isLifeOrFamProb.val" type="radio" class="form-radio" :name="o.isLifeOrFamProb.keyword" :value=1>
                <span class="ml-2">Ya</span>
              </label>
              <label class="inline-flex items-center ml-6">
                <input v-model="o.isLifeOrFamProb.val" type="radio" class="form-radio" :name="o.isLifeOrFamProb.keyword" :value=0>
                <span class="ml-2">Tidak</span>
              </label>
              </div>
              <div v-if="o.isLifeOrFamProb.val !== null" class="">
                <div class="group-input">
                  <span class="text-gray-700">{{ o.isEconProb.question }}</span>
                  <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input v-model="o.isEconProb.val" type="radio" class="form-radio" :name="o.isEconProb.keyword" :value=1>
                    <span class="ml-2">Ya</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input v-model="o.isEconProb.val" type="radio" class="form-radio" :name="o.isEconProb.keyword" :value=0>
                    <span class="ml-2">Tidak</span>
                  </label>
                  </div>
                </div>
                <div v-if="o.isEconProb.val" class="group-input">
                  <span class="text-gray-700">{{ o.isHaveInsurance.question }}</span>
                  <div class="mt-2">
                  <label class="inline-flex items-center">
                    <input v-model="o.isHaveInsurance.val" type="radio" class="form-radio" :name="o.isHaveInsurance.keyword" :value=1>
                    <span class="ml-2">Ya</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                    <input v-model="o.isHaveInsurance.val" type="radio" class="form-radio" :name="o.isHaveInsurance.keyword" :value=0>
                    <span class="ml-2">Tidak</span>
                  </label>
                  </div>
                </div>
              </div>
            </div>
            <div v-if="!o.isTraumatic.val && o.isTraumatic.val !== null || (o.isTraumatic.val && o.isEconProb.val !== null)" class="group-input">
              <span class="text-gray-700">{{ o.isLazy.question }}</span>
              <div class="mt-2">
              <label class="inline-flex items-center">
                  <input v-model="o.isLazy.val" type="radio" class="form-radio" :name="o.isLazy.keyword" :value=1>
                  <span class="ml-2">Ya</span>
              </label>
              <label class="inline-flex items-center ml-6">
                  <input v-model="o.isLazy.val" type="radio" class="form-radio" :name="o.isLazy.keyword" :value=0>
                  <span class="ml-2">Tidak</span>
              </label>
              </div>
            </div>
              <div class="group-input">
                <span class="text-gray-700">{{ o.isForget.question }}</span>
                <div class="mt-2">
                <label class="inline-flex items-center">
                    <input v-model="o.isForget.val" type="radio" class="form-radio" :name="o.isForget.keyword" :value=1>
                    <span class="ml-2">Ya</span>
                </label>
                <label class="inline-flex items-center ml-6">
                    <input v-model="o.isForget.val" type="radio" class="form-radio" :name="o.isForget.keyword" :value=0>
                    <span class="ml-2">Tidak</span>
                </label>
                </div>
              </div>
            <div v-if="(o.isLazy.val !== null)" class="group-input">
              <div v-if="o.isForget.val">
                <div class="group-input">
                  <span class="text-gray-700">{{ o.isLivingWithFam.question }}</span>
                  <div class="mt-2">
                  <label class="inline-flex items-center">
                      <input v-model="o.isLivingWithFam.val" type="radio" class="form-radio" :name="o.isLivingWithFam.keyword" :value=1>
                      <span class="ml-2">Ya</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                      <input v-model="o.isLivingWithFam.val" type="radio" class="form-radio" :name="o.isLivingWithFam.keyword" :value=0>
                      <span class="ml-2">Tidak</span>
                  </label>
                  </div>
                </div>
              </div>
              <div v-if="o.isForget.val !== null">
                <div class="group-input">
                  <span class="text-gray-700">{{ o.isBusy.question }}</span>
                  <div class="mt-2">
                  <label class="inline-flex items-center">
                      <input v-model="o.isBusy.val" type="radio" class="form-radio" :name="o.isBusy.keyword" :value=1>
                      <span class="ml-2">Ya</span>
                  </label>
                  <label class="inline-flex items-center ml-6">
                      <input v-model="o.isBusy.val" type="radio" class="form-radio" :name="o.isBusy.keyword" :value=0>
                      <span class="ml-2">Tidak</span>
                  </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- bad exp ends -->
        </div>
      </template>
      <template v-else>
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
      o: {
        isUsingMed: {
          question: 'Apakah pasien pernah / sedang menggunakan obat antidiabetik?',
          keyword: 'Aktivitas fisik',
          val: null
        },
        isBadExp: {
          question: 'Apakah pasien memiliki pengalaman tidak menyenangkan terkait dengan penggunaan obat?',
          keyword: 'Penalaman tidak menyenangkan',
          showRootCauseIf: 1,
          val: null
        },
        isEso: {
          question: 'Apakah ada masalah dengan efek samping yang diterima setelah minum obat?',
          keyword: 'Efek samping',
          showRootCauseIf: 1,
          val: null
        },
        isEsoTolerable: {
          question: 'Apakah masih dapat mentolerir efek samping tersebut?',
          keyword: 'ESO tidak ditolerir',
          showRootCauseIf: 0,
          val: null
        },
        isOrganolepticProb: {
          question: 'Apakah ada masalah dengan organoleptik obat (bau, rasa bentuk)?',
          keyword: 'Masalah organoleptik',
          showRootCauseIf: 1,
          val: null
        },
        isEsoHandled: {
          question: 'Apakah efek samping terebut telah ditangani?',
          keyword: 'Penanganan ESO',
          val: null
        },
        isTraumatic: {
          question: 'Apakah pasien merasa trauma / depresi / tertekan saat menggunakan obat?',
          keyword: 'Trauma/depresi/tertekan',
          showRootCauseIf: 1,
          val: null
        },
        isLifeOrFamProb: {
          question: 'Apakah pasien memiliki beban pribadi atau keluarga?',
          keyword: 'Beban pribadi / keluarga',
          showRootCauseIf: 1,
          val: null
        },
        isEconProb: {
          question: 'Apakah pasien memiliki beban ekonomi?',
          keyword: 'Beban ekonomi',
          showRootCauseIf: 1,
          val: null
        },
        isHaveInsurance: {
          question: 'Apakah pasien miliki asuransi?',
          keyword: 'Asuransi',
          val: null
        },
        isLazy: {
          question: 'Apakah pasien malas menggunakan obat?',
          keyword: 'Malas menggunakan obat',
          showRootCauseIf: 1,
          val: null
        },
        isForget: {
          question: 'Apakah pasien sering lupa menggunakan obat?',
          keyword: 'Lupa menggunakan obat',
          showRootCauseIf: 1,
          val: null
        },
        isLivingWithFam: {
          question: 'Apakah pasien tinggal bersama keluarga dan/atau orang lain',
          keyword: 'Lingkungan tinggal',
          val: null
        },
        isBusy: {
          question: 'Apakah pasien memiliki aktivitas yang padat?',
          keyword: 'Aktivitas padat',
          showRootCauseIf: 1,
          val: null
        },
        isSizeProblem: {
          question: 'Apakah terdapat masalah ukuran?',
          keyword: 'Ukuran obat',
          showRootCauseIf: 1,
          val: null
        },
        isTasteProblem: {
          question: 'Apakah terdapat masalah rasa?',
          keyword: 'Rasa obat',
          showRootCauseIf: 1,
          val: null
        },
        isSmellProblem: {
          question: 'Apakah terdapat masalah bau?',
          keyword: 'Bau obat',
          showRootCauseIf: 1,
          val: null
        }
      },
      drugRec: {
        isSupportContinue: {
          val: false,
          rec: 'Dorong pasien untuk senentiasa patuh dalam menjalankan terapi'
        },
        isChangeMed: {
          val: false,
          rec: 'Lakukan penggantian obat, monitor apakan pasien nyaman dgn terapi baru'
        },
        isEsoMustConsult: {
          val: false,
          rec: 'Lakukan penanganan efek samping sesuai yang dirasakan oleh pasien, lakukan kerja sama interprofesi'
        },
        isNoticeEsoTable: {
          val: false,
          rec: 'Perhatikan tabel masalah efek samping tiap obat'
        },
        isChangeMedAndMonitor: {
          val: false,
          rec: 'Lakukan penggantian obat, monitor kembali, apakah pasien merasa nyaman dengan regimen terapi terbaru'
        },
        isNeedChangeBrand: {
          val: false,
          rec: 'Lakukan penggantian merk/obat lain sesuai kenyamanan'
        },
        isConsumeWithFood: {
          val: false,
          rec: 'Minumlah obat bersama dengan makanan'
        },
        isDoCounselling: {
          val: false,
          rec: 'Lakukan konseling secara pribadi untuk menggali masalah yang dihadapi'
        },
        isUseInsurance: {
          val: false,
          rec: 'Motivasi pasien menggunakan asuransi yang dimiliki untuk tinfakan prevetif / pencegahan penyakit'
        },
        isRecBpjs: {
          val: false,
          rec: 'Anjurkan pasien memiliki asuransi pemerintah (BPJS), sesuai kemampuan ekonomi'
        },
        isFamilyPMO: {
          val: false,
          rec: 'Koordinasikan dengan pihak keluarga / tetangga untuk membantu menjadi Pengawas Minum Obat'
        },
        isEsoUnhandled: {
          val: false,
          rec: 'Konsultasikan dengan kader / tetangga sekitar untuk menjadi Pengawas Minum Obat'
        },
        isAsessMotivation: {
          val: false,
          rec: 'Asesmen kembali motivasi pasien tidak patuh, konseling pasien untuk mendorong kepatuhan pada pasien demi hidup sehat'
        },
        isUseAlarm: {
          val: false,
          rec: 'Lakukan pemasangan alarm pengingat jam minum obat'
        },
        isCounselling: {
          val: false,
          rec: 'Konseling dan dorong pasien untuk patuh dalam melakukan pengobatan'
        },
        isAsessLifeProb: {
          val: false,
          rec: 'Identifikasi jenis beban yang dimiliki oleh pasien lakukan konseling untuk mendiskusikan solusi yang tepat'
        },
        isSolveProblem: {
          val: false,
          rec: 'Lakukan penyelesaian sesuai dengan identifikasi masalah yang didapatkan'
        }
      }
    }
  },
  mounted () {
    try {
      sessionStorage.setItem('defaultQuestionObat', JSON.stringify(this.o))
    } catch (error) {
      console.log(error)
    }
  },
  computed: {
    isDone () {
      return false
    },
    getRecList () {
      const listRecc = []
      let traumaticRelatedRecc = []
      if (this.o.isUsingMed.val) {
        if (this.o.isBadExp.val) {
          if (this.o.isEso.val !== null) { // has eso problems
            if (this.o.isEsoTolerable.val !== null) {
              if (this.o.isEsoTolerable.val) {
                listRecc.push(this.drugRec.isSupportContinue.rec)
              } else if (!this.o.isEsoTolerable.val && this.o.isEsoTolerable.val !== null) {
                if (this.o.isEsoHandled.val) {
                  listRecc.push(this.drugRec.isChangeMedAndMonitor.rec)
                  listRecc.push(this.drugRec.isNoticeEsoTable.rec)
                } else if (!this.o.isEsoHandled.val && this.o.isEsoHandled.val !== null) {
                  listRecc.push(this.drugRec.isEsoMustConsult.rec)
                }
              }
              if (this.o.isOrganolepticProb.val !== null) { // has organo probs
                if (this.o.isSizeProblem.val) {
                  listRecc.push(this.drugRec.isNeedChangeBrand.rec)
                }

                if (this.o.isSmellProblem.val || this.o.isTasteProblem.val) {
                  listRecc.push(this.drugRec.isConsumeWithFood.rec)
                }

                traumaticRelatedRecc = this.getTraumaticLogic
              }
            }
          }
        } else { // not bad exp
          traumaticRelatedRecc = this.getTraumaticLogic
        }
      }
      return [...listRecc, ...traumaticRelatedRecc]
    },
    getTraumaticLogic () {
      const listRecc = []
      if (this.o.isTraumatic.val) {
        listRecc.push(this.drugRec.isAsessLifeProb.rec)
        if (this.o.isLifeOrFamProb.val) listRecc.push(this.drugRec.isDoCounselling.rec)
        if (this.o.isEconProb.val) {
          if (this.o.isHaveInsurance.val) {
            listRecc.push(this.drugRec.isUseInsurance.rec)
          } else if (!this.o.isHaveInsurance.val && this.o.isHaveInsurance.val !== null) {
            listRecc.push(this.drugRec.isRecBpjs.rec)
          }
        }

        if (this.o.isLazy.val) {
          listRecc.push(this.drugRec.isAsessMotivation.rec)
        }

        if (this.o.isForget.val) {
          if (this.o.isLivingWithFam !== null) {
            listRecc.push(this.drugRec.isFamilyPMO.rec)
          }
        }

        if (this.o.isBusy.val) {
          listRecc.push(this.drugRec.isUseAlarm.rec)
        } else if (!this.o.isBusy.val && this.o.isBusy.val !== null) {
          listRecc.push(this.drugRec.isCounselling.rec)
        }
      } else {
        if (this.o.isLazy.val) {
          listRecc.push(this.drugRec.isAsessMotivation.rec)
        }

        if (this.o.isForget.val) {
          if (this.o.isLivingWithFam !== null) {
            listRecc.push(this.drugRec.isFamilyPMO.rec)
          }
        }

        if (this.o.isBusy.val) {
          listRecc.push(this.drugRec.isUseAlarm.rec)
        } else if (!this.o.isBusy.val && this.o.isBusy.val !== null) {
          listRecc.push(this.drugRec.isCounselling.rec)
        }
      }
      return listRecc
    }
  },
  methods: {
    nextPage () {
      this.$emit('obat', this.getRecList)
      store.dispatch('setRootCause', this.getRootCause())
    },
    getRootCause () {
      const cause = []
      for (const key in this.o) {
        if (this.o[key].val !== null && (this.o[key].val === this.o[key].showRootCauseIf)) {
          cause.push(this.o[key].keyword)
        }
      }
      this.rootCause = cause
      return cause
    }
  }
}
</script>
