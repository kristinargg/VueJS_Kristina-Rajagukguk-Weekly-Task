<template>
  <div id="todo">
    <h1>My Todo List</h1>
    <div class="todo-form">
      <form>
        <input v-model="todo" name="todo" placeholder="todo-name" />
        <button @click="insert_todos(todo)">Add New Todo</button>
      </form>
      <!-- <form v-else>
        <input v-model="id" name="todo" placeholder="todo-name" />
        <button>Add New Todo</button>
      </form> -->
    </div>
    <div class="todo-list">
      <ul>
        <li
          v-for="todo in todos"
          :key="todo.id"
          class="todo"
          @dblclick="editTodo(todo, index)"
        >
          <div class="content">
            <h3 v-if="!isEditing">
              {{ todo.todo }}
            </h3>
            <input v-else type="text" v-model="todo.todo" />
          </div>
          <div>
            <button v-if="isEditing" @click="update_todos(todo)">UPDATE</button>
            <button v-else @click="editTodo(todo)">EDIT</button>
            <button @click="delete_todos(todo)">DELETE</button>
          </div>
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

const GET_ADD_TODO = gql`
  mutation addTodo($todo: String!) {
    insert_todos(objects: { todo: $todo }) {
      affected_rows
      returning {
        todo
      }
    }
  }
`;

const DELETE_TODO = gql`
  mutation MyMutation($id: Int!) {
    delete_todos(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`;
const UPDATE_TODO = gql`
  mutation updateTodo($todo: String, $id: Int!) {
    update_todos(_set: { todo: $todo }, where: { id: { _eq: $id } }) {
      returning {
        todo
      }
    }
  }
`;

const SUBCRIPTION_TODO = gql`
  subscription MySubscription {
    todos {
      id
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
      todos: [],
      isEditing: false,
      todo: "",
      type: "todos",
    };
  },
  apollo: {
    todos: {
      query: GET_ALL_TODOS,
    },
    $subscribe: {
      todos: {
        query: SUBCRIPTION_TODO,
        result({ data }) {
          this.todos = data.todos;
        },
      },
    },
  },
  methods: {
    editTodo(todo) {
      this.id = todo.id;
      this.isEditing = true;
    },
    insert_todos() {
      const todo = this.todo;
      this.todo = "";
      this.$apollo.mutate({
        mutation: GET_ADD_TODO,
        variables: {
          todo,
        },
      });
    },
    delete_todos(todo) {
      this.$apollo.mutate({
        mutation: DELETE_TODO,
        variables: {
          id: todo.id,
        },

        update: (store, { data: { delete_todos } }) => {
          if (delete_todos.affected_rows) {
            if (this.type == "todos") {
              const data = store.readQuery({
                query: GET_ALL_TODOS,
              });
              data.todos = data.todos.filter((t) => {
                return t.id !== todo.id;
              });
              store.writeQuery({
                query: GET_ALL_TODOS,
                data,
              });
            }
          }
        },
      });
    },
    update_todos(todo) {
      this.$apollo.mutate({
        mutation: UPDATE_TODO,
        variables: {
          id: todo.id,
          todo: todo.todo,
        },
        update: (store, { data: { update_todos } }) => {
          if (update_todos) {
            if (this.type == "todos") {
              const data = store.readQuery({
                query: GET_ALL_TODOS,
              });
              data.todos = data.todos.push((t) => {
                return t.id !== todo.id;
              });
              store.writeQuery({
                query: GET_ALL_TODOS,
                data,
              });
            }
          }
        },
      });
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
  margin-top: 12px;
}
i {
  cursor: pointer;
  color: red;
}
</style>
