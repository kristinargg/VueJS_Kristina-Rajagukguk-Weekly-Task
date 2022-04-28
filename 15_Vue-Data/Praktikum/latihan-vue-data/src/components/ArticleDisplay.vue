<template>
  <div id="article-display" class="container">
    <h1>NEWS</h1>
    <div class="row">
      <div
        class="col-9 col-md-6 col-lg-4 mb-3"
        v-for="(list, index) in newsList"
        :key="index"
      >
        <div class="card">
          <img :src="list.urlToImage" class="card-img-top" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h6 class="card-title">{{ list.author }}</h6>
              <p>
                {{ list.publishedAt }}
              </p>
            </div>

            <router-link
              :to="{
                name: 'DetailsNews',
                params: { id: index },
              }"
            >
              <h5 class="card-text mb-2">
                {{ list.title }}
              </h5>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ArticleDisplay",
  computed: {
    newsList() {
      return this.$store.state.news.listNews;
    },
  },
  methods: {
    fetchtNews() {
      this.$store.dispatch("news/fetchNews");
    },
  },
  mounted() {
    this.fetchtNews();
  },
};
</script>