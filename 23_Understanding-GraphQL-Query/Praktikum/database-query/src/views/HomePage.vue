<template>
  <div class="home">
    <h1 class="title mb-5">Wellcome to page Home</h1>
    <!-- <div class="container">
      <div class="input-group mb-3" @click="todos_by_pk(`$id`)">
        <input
          type="text"
          class="form-control"
          v-model="id"
          placeholder="Enter ID Todo"
        />
      </div>
    </div>
    <div v-if="this.id == ''">
      <ul class="list-group" v-for="todo in todos" :key="todo.id">
        <li class="list-group-item">{{ todo.todo }}</li>
      </ul>
    </div>
    <div v-else>
      <ul class="list-group">
        <li class="list-group-item">
          {{ todos_by_pk.todo }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import gql from "graphql-tag";

// const GET_ALL_TODOS = gql`
//   query MyQuery {
//     todos {
//       id
//       todo
//     }
//   }
// `;

// const GET_TODO_BY_ID = gql`
//   query MyQuery($id: Int!) {
//     todos_by_pk(id: $id) {
//       todo
//     }
//   }
// `;
export default {
  name: "HomePage",
  // data() {
  //   return {
  //     id: "",
  //     todo: "",
  //   };
  // },
  // apollo: {
  //   todos: {
  //     query: GET_ALL_TODOS,
  //   },
  //   todos_by_pk: {
  //     query: GET_TODO_BY_ID,
  //     variables() {
  //       return {
  //         id: parseInt(this.id),
  //       };
  //     },
  //   },
  // },
};
</script>
<style>
.title {
  margin-top: 10rem;
}
</style>