<template>
  <div id="resumeContent">
    <div class="top">Identitas Pasien:</div>
    <p> Nama Depan : {{ patientData.firstName }}</p>
    <p> Nama Belakang : {{ patientData.lastName }}</p>
    <p> Jenis Kelamin : {{ patientData.gender }}</p>
    <p> Usia : {{ patientData.age || '-' }} tahun</p>
    <p> Berat Badan : {{ patientData.weight || '-' }} kg</p>
    <p> Alamat : {{ patientData.address }}</p>

    <hr class="bg-gray-300 my-12" />
    {{summary}}
  </div>
</template>

<script>
export default {
  props: {
    patientData: {
      required: true,
      type: Object,
      default: () => {}
    },
    summary: {
      required: true,
      type: Object,
      default: () => {}
    }
  }
}
</script>
