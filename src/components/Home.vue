<template lang="html">
  <div>
    <h1 class="welcomeHeading">Selamat Datang :)</h1>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  components: {
    appHeader: Header
  }
}
</script>

<style lang="css" scoped>
  .welcomeHeading {
    text-align: center;
    margin: 20px;
    text-transform: uppercase;
  }
</style>
