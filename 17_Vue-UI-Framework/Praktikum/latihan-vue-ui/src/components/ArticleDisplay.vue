<template>
  <v-app id="article-display" class="text-center">
    <h1 class="primary--text mb-2">NEWS</h1>
    <v-container>
      <v-layout row wrap>
        <v-flex class="d-flex justify-space-between">
          <!-- <v-text-field
            v-model="newsSearch"
            dense
            prepend-inner-icon="mdi-magnify"
            placeholder="Search"
            @keyup.enter="fetchNewsSearch()"
          >
          </v-text-field> -->
          <!-- <v-btn icon>
            <v-icon v-model="newsSearch" @click="fetchNewsSearch()"
              >mdi-magnify</v-icon
            >
          </v-btn> -->
        </v-flex>
        <v-flex v-for="(list, index) in newsList" :key="index" sm6 md9 lg12>
          <v-flex v-if="!isSearch">
            <v-flex>
              <v-card class="mx-auto mb-12 mr-2 ml-2">
                <v-img :src="list.urlToImage" />
                <v-card-text class="primary--text d-flex justify-space-between">
                  <div>{{ list.author }}</div>

                  <div>{{ list.publishedAt }}</div>
                </v-card-text>
                <v-card-title>{{ list.title }}</v-card-title>

                <v-card-actions>
                  <v-btn color="red" text outlined @click="readMore(index)">
                    Read More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-flex>
          <v-flex v-else>
            <v-flex v-for="(search, index) in newsSearch" :key="index">
              <v-card class="mx-auto mb-12 mr-2 ml-2">
                <v-img :src="search.urlToImage" />
                <v-card-text class="primary--text d-flex justify-space-between">
                  <div>{{ search.author }}</div>
                  <div>{{ search.publishedAt }}</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="red" text outlined @click="readMore(index)">
                    Read More
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "ArticleDisplay",
  // data() {
  //   return {
  //     isSearch: false,
  //   };
  // },
  computed: {
    newsList() {
      return this.$store.state.news.listNews;
    },
    newsSearch() {
      return this.$store.state.news.search;
    },
  },
  methods: {
    fetchtNews() {
      this.$store.dispatch("news/fetchNews");
    },
    readMore(index) {
      this.$router.push({ name: "DetailsNews", params: { id: index } });
    },
    // fetchNewsSearch() {
    //   this.$store.dispatch("news/fetchNewsSearch");
    // },
    // fetchNewsCategory() {
    //   this.$store.dispatch("news/fetchNewsCategory", this.newsCategory);
    // },
  },
  mounted() {
    this.fetchtNews();
    this.fetchNewsSearch();
    // this.fetchNewsCategory();
  },
};
</script>
<style scoped>
</style>