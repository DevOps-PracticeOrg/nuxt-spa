<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <!-- <v-list class="justify-space-around d-flex">
        <v-list-item
          v-for="(layer0, i) in input_list"
          :key="i"
        >
        </v-list-item>
      </v-list> -->

    <div class="d-flex align-content-space-between u-btn-wrapper">
      <v-btn class="ma-2" color="info">大枠追加</v-btn>
    </div>

    <v-form>
      <ul class="justify-space-around d-flex">
        <li class="c-Layer for0"
          v-for="(layer0, i) in input_list"
          :key="i"
        >
          <div class="c-Layer__content">
            <v-text-field class="a-Txt" v-model="layer0.name" />
            <v-btn class="ma-2" color="info" @click="addInput(layer0.items)">カテゴリ追加</v-btn>
          </div>

          <ul class="c-Layer__inner">
            <li class="c-Layer for1"
              v-for="(layer1, i) in layer0.items"
              :key="i"
            >
              <div class="c-Layer__content">
                <v-text-field class="a-Txt" v-model="layer1.name" />
                <v-btn class="ma-2" color="info" @click="addInput(layer1.items)">アイテム追加</v-btn>
              </div>
              <ul class="c-Layer__inner">
                <li class="c-Layer for2"
                  v-for="(layer2, i) in layer1.items"
                  :key="i"
                >
                  <div class="c-Layer__content">
                    <v-text-field class="a-Txt" v-model="layer2.name" />
                  </div>

                </li>
              </ul>
            </li>
          </ul>

        </li>
      </ul>
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
      sample: {
          order: 0,
          name: "2",
          items: [

            // {
            //   order: 0,
            //   name: "1-0",
            //   items: [
            //     {
            //       order: 0,
            //       name: "1-0-0",
            //       items: {
            //       }
            //     },
            //     {
            //       order: 1,
            //       name: "1-0-1",
            //       items: {
            //       }
            //     }
            //   ]
            // },

            // {
            //   name: "1-1",
            //   items: [
            //     {
            //       name: "1-1-0",
            //       items: {
            //       }
            //     },
            //     {
            //       name: "1-1-1",
            //       items: {
            //       }
            //     }
            //   ]
            // }
          ]
        },
      input_list: [
        {
          order: 0,
          name: "0",
          items: [

            {
              order: 0,
              name: "0-0",
              items: [
                {
                  order: 0,
                  name: "0-0-0",
                  items: {
                  }
                },
                {
                  order: 1,
                  name: "0-0-1",
                  items: {
                  }
                }
              ]
            },

            {
              name: "0-1",
              items: [
                {
                  name: "0-1-0",
                  items: {
                  }
                },
                {
                  name: "0-1-1",
                  items: {
                  }
                }
              ]
            }
          ]
        },

        {
          order: 0,
          name: "1",
          items: [

            {
              order: 0,
              name: "1-0",
              items: [
                {
                  order: 0,
                  name: "1-0-0",
                  items: {
                  }
                },
                {
                  order: 1,
                  name: "1-0-1",
                  items: {
                  }
                }
              ]
            },

            {
              name: "1-1",
              items: [
                {
                  name: "1-1-0",
                  items: {
                  }
                },
                {
                  name: "1-1-1",
                  items: {
                  }
                }
              ]
            }
          ]
        },


      ],
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
  }
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
