<template>
  <div id="detail" class="container">
    <div class="row">
      <div class="col">
        <div>
          <img
            class="text-center w-100"
            :src="this.$store.state.news.listNews[$route.params.id].urlToImage"
          />
        </div>
        <div class="text-center m-3">
          <h3>{{ this.$store.state.news.listNews[$route.params.id].title }}</h3>
        </div>
        <div class="d-flex justify-content-between">
          <p>{{ this.$store.state.news.listNews[$route.params.id].author }}</p>
          <p>
            {{ this.$store.state.news.listNews[$route.params.id].publishedAt }}
          </p>
        </div>
        <div>
          <p>{{ this.$store.state.news.listNews[$route.params.id].content }}</p>
        </div>
        <div>
          <span
            >lanjutkan membaca
            <a :href="this.$store.state.news.listNews[$route.params.id].url"
              >disini</a
            ></span
          >
        </div>
        <router-link to="/">
          <button class="btn btn-danger btn-sm mt-3">Kembali</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailsNews",
};
</script>
<style>
</style>