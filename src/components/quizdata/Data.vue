<template lang="html">
  <div class="container" style="margin-top:30px;">
    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addModal">+ Tambah Kata Baru</button>
    <br><br>
    <table class="table table-bordered table-striped text-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Kata Quiz Random</th>
          <th scope="col">Nilai Quiz</th>
          <th colspan="3" scope="col">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in questions" :key="item._id">
          <th scope="row">{{ index + 1}}</th>
          <td>{{ item.namaQuestion }}</td>
          <td>{{ item.nilaiQuestion }}</td>
          <td><button type="button" class="btn btn-sm btn-danger" @click="deleteQuestion(item._id, index)">Hapus</button></td>
        </tr>
      </tbody>
    </table>

    <!-- Add Modal -->
    <div id="addModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Form Tambah Kata</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="addQuestion">
              <div class="form-group m-b-25">
                <div class="col-12">
                  <label for="namaCheckpoint">Nama Kata</label>
                  <input class="form-control" type="text" placeholder="Masukan Nama Kata" v-model="tambahData.namaQuestion" required>
                </div>
              </div>
              <div class="form-group m-b-25">
                <div class="col-12">
                  <label for="longitude">Nilai Kata</label>
                  <input class="form-control" type="number" placeholder="Masukan Nilai Kata" v-model="tambahData.nilaiQuestion" required>
                </div>
              </div>
              <hr>
              <div class="form-group m-b-25">
              </div>
              <div class="col-12 text-right">
                <button type="submit" class="btn btn-success waves-effect waves-light">Simpan Data</button>
              </div>
            </form>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!-- End of Add Modal -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      tambahData : {
        namaQuestion : '',
        nilaiQuestion : 0
      }
    }
  },
  computed : {
    questions() {
      return this.$store.getters.question
    }
  },
  methods : {
    addQuestion() {
      const newdata = {
        namaQuestion : this.tambahData.namaQuestion,
        nilaiQuestion : this.tambahData.nilaiQuestion
      }
      this.$store.dispatch('addQuestion', newdata)
      this.tambahData.namaQuestion = ''
      this.tambahData.nilaiQuestion = 0
    },
    deleteQuestion(id, index) {
      const deldata = {
        id : id,
        index : index
      }
      this.$store.dispatch('deleteQuestion', deldata)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
