import axios from "axios";

const state = () => ({
  listNews: [],
  infoError: "",
  // search: "live",
  category: [],
});
const mutations = {
  setListNews(state, param) {
    state.listNews = param;
  },
  setInfoError(state, param) {
    state.infoError = param;
  },
  // setCategory(state, param) {
  //   state.search = param;
  // },
  setCategory(state, param) {
    state.category = param;
  },
};
const actions = {
  fetchNews(Store) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=f8f972a177284d7d947111cc62186442`
      )
      .then((response) => {
        Store.commit("setListNews", response.data.articles);
        console.log("respone", response.data);
        Store.commit("setInfoError", "");
      })
      .catch((error) => {
        Store.commit("setInfoError", error);
      });
  },
  fetchNewsCategory(Store, param) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${param}&apiKey=f8f972a177284d7d947111cc62186442`
      )
      .then((response) => {
        Store.commit("setCategory", response.data.articles);
        console.log("respone", response.data);
        Store.commit("setInfoError", "");
      })
      .catch((error) => {
        Store.commit("setInfoError", error);
      });
  },
  // fetchNewsCategory(Store, setCategory) {
  //   Store.commit("setCategory", setCategory);
  // },
  // fetchNewsCategory(Store, setCategory) {
  //   axios
  //     .get(
  //       `https://newsapi.org/v2/everything?category=${setCategory}&apiKey=f8f972a177284d7d947111cc62186442`
  //     )
  //     .then((response) => {
  //       Store.commit("setCategory", response.data);
  //       Store.commit("setInfoError", "");
  //     })
  //     .catch((error) => {
  //       Store.commit("setInfoError", error);
  //     });
  // },
};
export default {
  state,
  mutations,
  actions,
};
