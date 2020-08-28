<template>
  <v-app-bar
    :clipped-left="config.clipped"
    config.fixed
    app
  >

    <v-btn icon  @click.stop="$router.push('/')">
      <v-icon>fas fa-home</v-icon>
    </v-btn>

    <v-app-bar-nav-icon v-if="config.drawer != null" @click.stop="config.drawer = !config.drawer" />


    <v-toolbar-title v-text="config.title" />
    <v-spacer />

    <!-- <v-btn
      icon
      @click.stop="config.rightDrawer = !config.rightDrawer"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn> -->
  </v-app-bar>
</template>

<script>
import SideHeaderTop from '~/components/SideHeaderTop.vue';
export default {
  props: ["config"],
  data () {
    return {
    }
  },
  methods: {

  },
}
</script>
