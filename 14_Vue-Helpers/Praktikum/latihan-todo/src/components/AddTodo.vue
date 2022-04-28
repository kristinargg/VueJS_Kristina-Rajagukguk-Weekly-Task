<template>
  <div id="addtodo">
    <button class="btn btn-primary w-100" @click="addTodo">Add</button>
  </div>
</template>
<script>
export default {
  name: "addTodo",
  methods: {
    addTodo() {
      this.$emit("add");
    },
  },
};
</script>