<template>
  <button @click="editTodo(index, todo)">Edit</button>
</template>

<script>
export default {
  methods: {
    editTodo() {
      this.$emit("edit");
    },
  },
};
</script>