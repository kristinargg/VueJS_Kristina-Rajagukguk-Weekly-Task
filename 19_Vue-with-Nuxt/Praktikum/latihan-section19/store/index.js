import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const state = () => ({
  listNews: [],
  category: [],
  search: '',
})

export const mutations = {
  setListNews(state, param) {
    state.listNews = param
  },
  setListCategory(state, param) {
    state.category = param
  },
  setSearch(state, param) {
    state.search = param
  },
}

export const actions = {
  fetchNews(Store) {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&category=' +
          this.state.category +
          '&q=' +
          this.state.search +
          '&apiKey=f8f972a177284d7d947111cc62186442'
      )
      .then((response) => {
        Store.commit('setListNews', response.data.articles)
      })
  },
  ListCategory(Store, param) {
    Store.commit('setListCategory', param)
  },
  newsSearch(Store, param) {
    Store.commit('setSearch', param)
  },
}
