<template>
  <div id="todo">
    <h1>My Todo List</h1>
    <div class="todo-form">
      <form>
        <input v-model="id" name="todo" placeholder="todo-name" />
        <button>Add New Todo</button>
      </form>
    </div>
    <div class="todo-list">
      <ul v-if="this.id == ''">
        <li v-for="(todo, index) in todos" :key="index" class="todo">
          <div class="content">
            <h3>{{ todo.todo }}</h3>
          </div>
          <!-- <div>
            <button>edit</button>
          </div> -->
        </li>
      </ul>
      <ul v-else>
        <li>
          <div class="content">
            <h3>{{ todos_by_pk.todo }}</h3>
          </div>
          <!-- <div>
            <button>edit</button>
          </div> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

const GET_ALL_TODOS = gql`
  query MyQuery {
    todos {
      id
      todo
    }
  }
`;

const GET_TODO_BY_ID = gql`
  query MyQuery($id: Int!) {
    todos_by_pk(id: $id) {
      todo
    }
  }
`;
export default {
  name: "TodoPage",
  components: {},
  data() {
    return {
      id: "",
      todos: "",
    };
  },
  apollo: {
    todos: {
      query: GET_ALL_TODOS,
    },
    todos_by_pk: {
      query: GET_TODO_BY_ID,
      variables() {
        return {
          id: this.id,
        };
      },
    },
  },
};
</script>

<style  scoped>
body {
  padding-top: 1em;
  padding-bottom: 1em;
}
input {
  display: block;
  margin: auto;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: groove;
  outline: none;
  font-size: 1.3em;
  padding: 15px 0;
  text-align: center;
}
.todo-form {
  margin-top: 30px;
}
.todo {
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  /* align-items: left; */
}
button {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
  background-color: rgb(180, 199, 211);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
}
h3 {
  margin: 0px;
  padding: 0px;
}
li {
  list-style-type: none;
  width: 50%;
  margin: auto;
  padding: 15px 0;
  background-color: rgb(216, 216, 216);
}
.content {
  flex: 1;
  margin-top: 10px;
}
i {
  cursor: pointer;
  color: red;
}
</style>
