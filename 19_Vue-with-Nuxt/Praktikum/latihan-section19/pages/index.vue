<template>
  <v-app id="business">
    <h1 class="primary--text mb-2 text-center">News</h1>
    <v-layout row wrap>
      <v-container>
        <v-flex class="d-flex justify-space-between">
          <v-text-field
            v-model="keyword"
            @keyup.enter="searchNews(keyword)"
          ></v-text-field>
          <v-btn class="mt-5" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-flex>
      </v-container>

      <v-flex
        v-for="(article, index) in newsList"
        :key="index"
        xs12
        sm8
        md9
        lg12
      >
        <v-card class="mx-auto mb-12 mr-2 ml-2">
          <v-img :src="article.urlToImage" />
          <v-card-text class="primary--text d-flex justify-space-between">
            <div>{{ article.author }}</div>

            <div>{{ article.publishedAt }}</div>
          </v-card-text>
          <v-card-title>{{ article.title }}</v-card-title>

          <v-card-actions>
            <v-btn color="red" text outlined @click="readMore(index)">
              Read More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      keyword: '',
    }
  },
  computed: {
    newsList() {
      return this.$store.state.listNews
    },
  },
  mounted() {
    this.fetchNews()
  },

  methods: {
    fetchNews() {
      this.$store.dispatch('fetchNews')
    },
    readMore(index) {
      this.$router.push({ name: 'news-id', params: { id: index } })
    },
    searchNews(param) {
      this.$store.dispatch('newsSearch', param)
      this.$store.dispatch('fetchNews')
    },
  },
}
</script>
<style scoped>
</style>