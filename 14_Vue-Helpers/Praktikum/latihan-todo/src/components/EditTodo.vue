<template>
  <button class="btn btn-success btn-sm" @click="editTodo">
    <i class="fa-solid fa-pen-to-square"></i>
  </button>
</template>

<script>
export default {
  name: "EditTodo",
  methods: {
    editTodo() {
      this.$emit("edit");
    },
  },
};
</script>
