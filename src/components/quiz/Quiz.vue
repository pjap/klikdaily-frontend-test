
<template lang="html">
  <div class="container" style="margin-top:30px;">
    <div v-if="introStage">
      <div class="jumbotron">
        <h1 class="display-4">Welcome, To The Quiz!</h1>
        <p class="lead">This is a simple test using vue and bootstrap, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>This quiz is very simple , you just only guest what is the word random out.</p>
          <button class="btn btn-lg btn-primary" @click="startQuiz">START GAME</button>
        </div>
    </div>

    <div v-if="questionStage">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">{{questions[currentQuestion].namaQuestion | rndtxt}}</h4>
          <input type="text" class="form-control" v-model="guess">
          <p class="card-text">its always be randomize again when you texting the answer</p>
          <button class="btn btn-primary" @click="handleAnswer">Check The Answer</button>
        </div>
      </div>
    </div>

    <div v-if="resultsStage">
      <p>You got {{correct}} right out of {{questions.length}} questions. Your percentage is {{perc}}%.</p>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      introStage : true,
      questionStage : false,
      resultsStage : false,
      questions:[],
      currentQuestion : 0,
      answers : [],
      correct : 0,
      perc : null,
      guess : ''
    }
  },
  methods : {
    startQuiz() {
      let objects = (this.$store.getters.question).sort(() => Math.random() - 0.5)
      this.questions = objects

      this.introStage = false;
      this.questionStage = true;
    },
    handleAnswer() {
      if (this.guess == '') {
        Vue.swal({
          type: 'error',
          title: 'Cannot be blank',
          showConfirmButton: false,
          timer: 3000
        })
      } else {
        Vue.swal({
          type: 'success',
          title: 'Go To Next Word',
          showConfirmButton: false,
          timer: 3000
        })
        this.answers[this.currentQuestion] = this.guess
        if((this.currentQuestion+1) === this.questions.length) {
          this.handleResults()
          this.questionStage = false
          this.resultsStage = true
        } else {
          this.currentQuestion++
        }
      }
    },
    handleResults() {
      this.questions.forEach((question, index) => {
        if (this.answers[index] === question.namaQuestion)
        this.correct++
      })
      this.perc = (( this.correct / this.questions.length ) * 100).toFixed(2)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
