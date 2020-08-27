<template>
  <v-app light>

    <div class="m-Header">
      <Header :config="config"/>

      <v-navigation-drawer
        v-model="config.drawer"
        :mini-variant="config.miniVariant"
        :clipped="config.clipped"
        config.fixed
        app
      >
        <SideHeaderTop />
      </v-navigation-drawer>
    </div>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>


    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :absolute="!config.fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SideHeaderTop from '~/components/SideHeaderTop.vue';
import Header from '~/components/Header.vue';
export default {
  data () {
    return {
      config: {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: ''
      }
    }
  }
}
</script>
