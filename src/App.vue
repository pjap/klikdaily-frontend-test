<template>
  <div>
      <appHeader></appHeader>
      <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initQuestion')
  }
}
</script>

<style >
</style>
