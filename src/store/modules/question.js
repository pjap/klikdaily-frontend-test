import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { router } from "../../main.js"

Vue.use(VueAxios, axios)

const state = {
  questionData : []
}

const getters = {
  question : state => {
    return state.questionData
  }
}

const mutations = {
  'SET_QUESTION' (state, database) {
    state.questionData = database
  },
  'ADD_QUESTION' (state, newdata) {
    state.questionData.push(newdata)
  },
  'DELETE_QUESTION' (state, index) {
    state.questionData.splice(index, 1)
  }
}


const actions = {
  initQuestion : ({ commit }) => {
    axios.get('http://localhost:3000/question')
    .then(result => result.data.Data)
    .then(database => {
      commit('SET_QUESTION', database)
    })
  },
  addQuestion : ({ commit }, newdata) => {
    console.log('SAMPE SINI');
    axios.post('http://localhost:3000/question', {
      namaQuestion: newdata.namaQuestion,
      nilaiQuestion: newdata.nilaiQuestion,
     })
    .then(response => {
      Vue.swal({
        type: 'success',
        title: 'Data Anda Berhasil Di Simpan',
        showConfirmButton: false,
        timer: 3000
      })
      commit('ADD_QUESTION', response.data.Data)
    })
  },
  deleteQuestion : ({ commit }, deldata) => {
    Vue.swal({
      title: 'Anda Yakin ?',
      text: "Setelah Terhapus Data Tidak Bisa Dikembalikan!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Hapus Data Ini!',
      cancelButtonText: 'Batal'
    })
    .then(result => {
      if (result.value) {
        Vue.swal({
          type: 'success',
          title: 'Data Anda Berhasil Di Hapus',
          showConfirmButton: false,
          timer: 3000
        })
        axios.delete('http://localhost:3000/question/' + deldata.id)
        .then(response => {
          commit('DELETE_QUESTION', deldata.index)
        })
      }
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
