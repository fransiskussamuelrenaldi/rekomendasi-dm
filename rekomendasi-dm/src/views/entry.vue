<template>
  <div>
    gatau jir apaan
    <div class="container mx-auto px-4 py-12 flex justify-center">
      <user-form></user-form>
    </div>
    <span v-if="list.length">REKOMENDASI WOY</span>
    <div class="border py-6" v-for="(item, index) in list" :key="index">
      {{ item }}
    </div>
    <router-view
      @herbal="herbal"
      @pola-makan="polaMakan"
      @fisik="fisik"
      @obat="obat"
    ></router-view>
  </div>
</template>

<script>
import userForm from '../components/user-form'
export default {
  data () {
    return {
      list: []
    }
  },
  components: {
    userForm
  },
  methods: {
    herbal (val) {
      this.list = [...val]
    },
    polaMakan (val) {
      this.list = val
    },
    fisik (val) {
      this.list = val
    },
    obat (val) {
      this.list = val
    }
  }
}
</script>
