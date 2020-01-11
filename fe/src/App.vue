<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item
          value="true"
          v-for="(item,i) in items"
          :key="i"
          :to="item.to"
        >
            <v-list-item-action>
              <v-icon v-html="item.icon"></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <router-view />
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  props: {
    source: String
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: {
            path: '/'
          }
        },
        {
          icon: 'home',
          title: '홈',
          to: {
            path: '/Home'
          }
        },
        {
          icon: 'help',
          title: '사용자',
          to: {
            path: '/user'
          }
        }
      ],
      mainVariant: false,
      right: true,
      rightDrawer: false,
      title: 'vuetify.is'
    }
  }
}
</script>
