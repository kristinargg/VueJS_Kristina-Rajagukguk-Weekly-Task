import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import todoslist from "./todoslist";

Vue.use(Vuex);
const persistedDataState = createPersistedState({
  paths: ["todoslist"],
});

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    todoslist: {
      namespaced: true,
      ...todoslist,
    },
  },
});
