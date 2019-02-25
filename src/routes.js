import Home from './components/Home.vue'
import QuizData from './components/quizdata/Data.vue'
import Quiz from './components/quiz/Quiz.vue'

export const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/question', component: QuizData, name: 'quizdata' },
  { path: '/quiz', component: Quiz, name: 'quiz' },
]
