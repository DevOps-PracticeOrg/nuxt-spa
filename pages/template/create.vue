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
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title>

        </v-card-title>

        <v-card-text>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="secondary"
            @click="changeStatus(-1)"
          >
            戻る
          </v-btn>
        </v-card-actions>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            @click="changeStatus(1)"
          >
            次へ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
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
    }
  },
  computed: {
    share: function () {
      return this.share_data
    }
  },

  methods: {
    changeStatus (num) {
      this.$nuxt.$emit('changeStatus', num);
    }
  }
}
</script>
