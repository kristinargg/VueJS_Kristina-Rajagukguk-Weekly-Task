<template>
  <div id="deskripsi" class="row">
    <router-link to="/"
      ><button class="btn btn-danger btn-sm mb-3">kembali</button>
    </router-link>
    <h1>{{ this.$store.state.todos[$route.params.id] }}</h1>
    <h5 @dblclick="editDesc">
      <div v-if="!isEditing">
        <span>
          {{ deskripsiTodo }}
        </span>
      </div>
      <div class="d-flex justify-content-center col-sm-6 col-md-10" v-else>
        <input
          type="text"
          class="form-control ms-5"
          v-model="deskripsiTodo"
          @keyup.enter="updateDesc"
        />
        <button class="btn btn-primary ms-2" @click="updateDesc">simpan</button>
      </div>
    </h5>
  </div>
</template>

<script>
export default {
  name: "DescriptionTodo",
  computed: {
    deskripsiTodo() {
      return this.$store.state.todoslist.deskripsiTodo;
    },
  },
  data() {
    return {
      isEditing: false,
      deskTodo: [],
      desc: "",
    };
  },
  methods: {
    editDesc() {
      this.isEditing = true;
      // this.deskripsiTodo.push(this.desc);
    },
    updateDesc() {
      this.isEditing = false;
      this.$store.dispatch("todolist/updateDesc");
      // this.deskripsiTodo.push(this.deskTodo);
    },
  },
};
</script>