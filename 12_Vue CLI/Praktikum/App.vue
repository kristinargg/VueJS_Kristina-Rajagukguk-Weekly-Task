<template>
  <div id="App">
    <div>
      <ol>
        <li v-for="list in todos" :key="list.id">
          {{ list }}
        </li>
      </ol>
    </div>
    <input type="text" v-model="todo" required />

    <button type="sumbit" @click="addTodo">Tambahkan</button>
    <h4 v-if="this.todos.length >= 4">Hebat!!</h4>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      todo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push(this.todo);
      this.todo = "";
    },
  },
};
</script>

<style>
</style>
