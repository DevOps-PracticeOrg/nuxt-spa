<template>
  <v-layout
    column
    justify-center
  >
    <v-flex
      xs12
      sm8
      md6
    >

      <v-form>
        <Mycomponent :input_list="input_list"/>
      </v-form>

    </v-flex>
    <div class="d-flex align-content-space-between u-btn-wrapper">

      <v-btn
        class="ma-2"
        :loading="status_btn.back.loading"
        :disabled="status_btn.back.loading"
        color="secondary"
        @click="changeStatus(status_btn.back, -1)"
      >
        戻る
      </v-btn>

      <v-spacer />
      <v-btn
        class="ma-2"
        :loading="status_btn.next.loading"
        :disabled="status_btn.next.loading"
        color="primary"
        @click="changeStatus(status_btn.next, 1)"
      >
        次へ
      </v-btn>
    </div>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Mycomponent from '~/components/Mycomponent.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  layout: 'templateCreate',
  props: ["share_data"],
  data () {
    return {
      status_btn : {
        back: {
          loader: "",
          loading: false,
        },
        next: {
          loader: "",
          loading: false,
        },
      },
      input_list: {
        layer: "top",
        name: "top",
        btn: "大枠追加",
        items: [
          {
            layer: "first",
            name: "大枠0",
            btn: "カテゴリ追加",
            items: [
              {
                layer: "second",
                name: "カテゴリ0-0",
                btn: "アイテム追加",
                items: [
                  {
                    name: "アイテム0-0-0",
                     btn: "",
                    items: {
                    }
                  },
                ]
              },
              {
                layer: "second",
                name: "カテゴリ0-0",
                btn: "アイテム追加",
                items: [
                  {
                    name: "アイテム0-0-0",
                    btn: "",
                    items: {
                    }
                  },
                  {
                    name: "アイテム0-0-0",
                    btn: "",
                    items: {
                    }
                  },
                ]
              },
            ]
          },

        ],
      },
      test: null,
    }
  },
  computed: {
    share: function () {
      return this.share_data
    }
  },

  methods: {
    changeStatus (btn, num) {
      btn.loader = "loader";
      btn.loading = true;
      this.$nuxt.$emit('changeStatus', num);
      setTimeout(() => (btn.loading= false), 1000);
      btn.loader = null;
    },
    addInput: function (items) {

    },

  },

}
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
.c-Layer {
  margin: 4px;
  padding: 4px;
  .a-Txt {
    background: #fff;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }

  &.for0 {
    margin-bottom: 40px;
    background: red;
    .c-Layer__content {
      width: 300px;
    }
  }
  &.for1 {
    background: grey;
    .c-Layer__content {
      display: inline-block;
      width: 150px;
    }
  }
  &.for2 {
    background: black;
  }
}
.u-btn-wrapper {
  width: 100%;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
