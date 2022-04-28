<template>
  <button class="btn btn-danger btn-sm" @click="removeTodo(id)">
    <i class="fa-solid fa-trash"></i>
  </button>
</template>

<script>
export default {
  name: "RemoveTodo",
  methods: {
    removeTodo() {
      this.$emit("remove");
    },
  },
};
</script>
<style scoped>
</style>