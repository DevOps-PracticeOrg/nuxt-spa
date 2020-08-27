<template>
  <v-app light class="l-Base">

    <div class="m-Header" v-bind:class="{ isActive: config.drawer }">
      <Header :config="config"/>

      <v-navigation-drawer
        v-model="config.drawer"
        :mini-variant="config.miniVariant"
        :clipped="config.clipped"
        config.fixed
        app
      >
        <SideHeaderDocumentCreate :share_data="share_data"/>
      </v-navigation-drawer>
    </div>

    <v-content>
      <v-container>
        <nuxt :share_data="share_data"/>
      </v-container>
    </v-content>


    <v-footer
      :absolute="!config.fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SideHeaderDocumentCreate from '~/components/SideHeaderDocumentCreate.vue';
import Header from '~/components/Header.vue';
export default {
  data () {
    return {

      share_data: {
        status: 0,
      },
      config: {
        clipped: false,
        drawer: true,
        fixed: false,
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'テンプレート作成'
      },
    }
  },
  methods: {
    changeStatus: function (change) {


      //正の数
      if (change >= 0) {
        if (this.share_data.status < this.share_data.status_length - 1) {
          this.share_data.status = this.share_data.status + (change);
        }

      //負の数
      } else if (this.share_data.status > 0) {
        this.share_data.status = this.share_data.status + (change);
      }
    },

    setListener() {
      this.$nuxt.$on("changeStatus", this.changeStatus);
    },
  },

  created() {
    this.setListener()
  },
}
</script>
