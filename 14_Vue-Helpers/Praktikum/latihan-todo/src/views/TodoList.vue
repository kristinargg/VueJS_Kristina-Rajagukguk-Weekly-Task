<template>
  <div id="todolist" class="container">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <h2>Todo List</h2>
          <div
            class="row"
            v-for="(list, index) in todoList"
            :key="index"
            @dblclick="editTodo()"
          >
            <div class="col-sm-6 col-md-10">
              <ol class="list-group text-start mb-3">
                <li class="list-group-item">
                  <span v-if="!isEditing">
                    <router-link
                      :to="{ name: 'Deskripsi', params: { id: list.index } }"
                    >
                      {{ list.name }}
                    </router-link>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    v-else
                    v-model="list.name"
                    @keyup.enter="updateTodo()"
                  />
                </li>
              </ol>
            </div>
            <div class="col-6 col-md-2">
              <edit-todo @edit="editTodo(index)" />
              <remove-todo class="ms-3" @remove="removeTodo(index)" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-10">
              <div class="form-group">
                <input type="text" class="form-control" v-model="todo" />
              </div>
            </div>
            <div class="col-md-2 align-self-center">
              <button class="btn btn-primary w-100" @click="addTodo(this.todo)">
                Add
              </button>

              <!-- <add-todo @add="addTodo" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import AddTodo from "@/components/AddTodo.vue";
import EditTodo from "@/components/EditTodo.vue";
import RemoveTodo from "@/components/RemoveTodo.vue";
export default {
  name: "TodoList",
  components: {
    EditTodo,
    RemoveTodo,
    // AddTodo,
  },
  computed: {
    todoList() {
      return this.$store.state.todoslist.todos;
    },
  },
  data() {
    return {
      // todos: [],
      // todos: this.$store.state.todoslist.todos,
      todo: "",
      isEditing: false,
    };
  },
  methods: {
    addTodo() {
      this.$store.dispacth("getTodo", { id: this.index++, name: this.todo });
      // this.todos.push({ id: this.index++, name: this.todo });
      this.todo = "";
    },
    editTodo() {
      this.isEditing = true;
    },
    updateTodo() {
      this.isEditing = false;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>