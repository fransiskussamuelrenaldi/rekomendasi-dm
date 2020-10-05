<template>
  <div class="p-8 mt-6 lg:mt-0 rounded shadow bg-white ">
    <form class="w-full max-w-lg">
      <div class="name flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="firstName">
              Nama Depan
          </label>
          <input
            v-model="firstName"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            ref="firstName"
            type="text"
            placeholder="Ketik nama depan"
            @input="handleInput('firstName')"
          >
          </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="lastName">
              Nama Belakang
          </label>
          <input
            v-model="lastName"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            ref="lastName"
            type="text"
            placeholder="Ketik nama belakang"
            @input="handleInput('lastName')"
          >
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
            <option>Laki-laki</option>
            <option>Wanita</option>
            <option>Tidak ingin diidentifikasi</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="weight">
          Berat Badan
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
            placeholder="Ketik alamat"
            @input="handleInput('address')"
          >
        </div>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      weight: '',
      address: ''
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
