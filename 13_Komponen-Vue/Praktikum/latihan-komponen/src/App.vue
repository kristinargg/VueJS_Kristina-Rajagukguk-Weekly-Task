<template>
  <div id="app">
    <h2>Todo List</h2>
    <div>
      <ol>
        <li v-for="(list, index) in todos" :key="index" class="container">
          {{ list.name }}
          <remove-todo @remove="removeTodo" />
          <!-- <button v-if="!isEditing" @click="editTodo(index)">Edit</button> -->
          <edit-todo @edit="editTodo">
        </li>
      </ol>
    </div>
    <input type="text" v-model="todo" />
    <button @click="addTodo">Tambahkan</button>
    <h2 v-if="this.todos.length >= 4">Hebat!!</h2>
  </div>
</template>

<script>
import EditTodo from "@/components/EditTodo.vue";
import RemoveTodo from "@/components/RemoveTodo.vue";
export default {
  name: "App",
  components: {
    RemoveTodo,
    EditTodo,
  },
  data() {
    return {
      index: 1,
      todos: [],
      todo: "",
      isEditing: false,
      selectedTodo: null,
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ id: this.index++, name: this.todo });
      this.todo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    editTodo(index) {
      this.isEditing = true;
      this.todo = this.todos[index].name;
      this.selectedTodo = index;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
input {
  width: 80%;
  margin-right: 80px;
}
li {
  margin: 10px 0 10px 0;
}
</style>
