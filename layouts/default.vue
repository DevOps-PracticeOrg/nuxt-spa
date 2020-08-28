<template>
  <v-app light>

    <div class="m-Header" v-bind:class="{ isActive: drawer }">
      <Header :config="config"/>

    </div>

    <v-navigation-drawer
        class="m-SideHeader"
        v-model="config.drawer"
        :hide-overlay="config.hideOverlay"
        :mini-variant="config.miniVariant"
        :clipped="config.clipped"
        config.fixed
        app
      >
      <SideHeaderTop />
    </v-navigation-drawer>

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
        drawer: false,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: '',
        hideOverlay: true,
      }
    }
  },

  mounted: function(){
    global.addEventListener('resize', this.getHideOverLayFlag)
  },
  methods: {
    getHideOverLayFlag: function () {
      let bp = this.$vuetify.breakpoint.name;
      console.log(bp);
      switch (bp) {
        case 'xs': return this.config.hideOverlay = false;
        case 'sm': return this.config.hideOverlay = false;
        case 'md': return this.config.hideOverlay = false;
        case 'lg': return this.config.hideOverlay = true;
        case 'xl': return this.config.hideOverlay = true;
      }
    },

  },
}
</script>
