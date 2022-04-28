<template>
  <button @click="removeTodo(index)">hapus</button>
</template>

<script>
export default {
  methods: {
    removeTodo() {
      this.$emit("remove");
    },
  },
};
</script>