const state = () => ({
  deskripsiTodo: "belum ada deskripsi",
  todos: [],
  isEditing: false,
});

const mutations = {
  setDeskripsi(state, param) {
    state.deskripsiTodo = param;
  },
  setTodo(state, todo) {
    state.todos = todo;
    // state.todos.push(todo);
  },
  // setRemove(state) {
  //   state.isEditing = false;
  // },
};
const actions = {
  getTodo(Store, todo) {
    Store.commit("setTodo", todo);
  },
  // updateDesc(Store) {
  //   Store.commit("setDeskripsi");
  // },
};
export default {
  state,
  mutations,
  actions,
};
