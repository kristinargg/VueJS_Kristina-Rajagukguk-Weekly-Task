<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click="ListCategory(item.title)"
        >
          <!-- <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action> -->
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn class="ml-3" @click="switchTheme">
        <v-icon depressed small fab>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span
        >&copy; {{ new Date().getFullYear() }} ---- Kristina Rajagukguk</span
      >
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          // icon: 'mdi-apps',
          title: 'Entertainment',
          // to: '/',
        },
        {
          // icon: 'mdi-chart-bubble',
          title: 'Business',
          // to: '/business',
        },
        {
          title: 'Sports',
        },
        {
          title: 'Science',
        },
        {
          title: 'Health',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'News App',
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
    ListCategory(param) {
      this.$store.dispatch('ListCategory', param)
      this.$store.dispatch('fetchNews')
    },
    switchTheme() {
      if (this.$vuetify.theme.dark) {
        this.$vuetify.theme.themes.light.primary =
          this.$vuetify.theme.themes.dark.primary
      } else {
        this.$vuetify.theme.themes.dark.primary =
          this.$vuetify.theme.themes.light.primary
      }
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
