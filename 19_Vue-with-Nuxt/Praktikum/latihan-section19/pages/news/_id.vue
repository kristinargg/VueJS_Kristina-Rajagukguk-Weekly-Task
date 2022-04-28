<template>
  <v-container id="detail">
    <v-layout class="ma-2" row wrap>
      <h2 class="secondary--text mb-1">Details News</h2>
      <v-flex sm12 md12 lg12>
        <!-- <div class="text-center">
          <h3>{{ this.$store.state.listNews[$route.params.id].title }}</h3>
        </div> -->
        <v-img
          class="text-center rounded"
          width="100%"
          :src="this.$store.state.listNews[$route.params.id].urlToImage"
        />
        <div class="text-center">
          <h3>
            {{ this.$store.state.listNews[$route.params.id].title }}
          </h3>
        </div>
        <div class="red--text d-flex justify-space-between">
          <p>
            {{ this.$store.state.listNews[$route.params.id].author }}
          </p>
          <p>
            {{ this.$store.state.listNews[$route.params.id].publishedAt }}
          </p>
        </div>
        <div>
          <p>
            {{ this.$store.state.listNews[$route.params.id].content }}
          </p>
        </div>
        <div>
          <span
            >lanjutkan membaca
            <a :href="this.$store.state.listNews[$route.params.id].url"
              >disini</a
            ></span
          >
        </div>
        <nuxt-link to="/">
          <v-btn class="mt-3" color="primary">Kembali</v-btn>
        </nuxt-link>
      </v-flex>
    </v-layout>
    <nuxt-child />
  </v-container>
</template>
<script>
export default {
  name: 'DetailsNews',
}
</script>