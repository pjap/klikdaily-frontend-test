<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Simple Word Random</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/quiz" tag="a" class="nav-item nav-link">
            <i class="dripicons-home"></i>Quiz Start
        </router-link>
        <router-link to="/question" tag="a" class="nav-item nav-link">
            <i class="dripicons-home"></i>Quiz Data
        </router-link>
      </div>
    </div>
</nav>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
