<template>
  <v-app light class="l-Base">

    <div class="m-Header">
      <Header :config="config"/>
    </div>

    <div class="m-SideHeader">
      <SideHeaderDocumentCreate :share_data="share_data"/>
    </div>

    <v-content class="m-Main">
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
        fixed: false,
        title: 'テンプレート作成'
      },
    }
  },
  computed: {
    drawer: function () {
      return this.config.drawer;
    },
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
      console.log( this.config.drawer)
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

<style lang="scss" scoped>
.m-SideHeader {

  margin-top: 60px;
  @media screen and (max-width: 799px){
    width: 100%!important;
    height: 80px!important;
  }
  @media screen and (min-width: 800px){
    width: 120px;
    height: auto;
    position: fixed;
  }
}
.m-Main {
  margin-top: 40px;
}
</style>
