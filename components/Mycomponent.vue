<template>
  <div v-if="input_list.items">

    <v-card v-if="input_list.layer=='first'" tile class="c-Card">
      <div v-if="input_list.name != 'top'">
        <v-text-field v-if="input_list.name != 'top'" class="a-Txt" v-model="input_list.name" />
      </div>
      <ul class="d-flex flex-row"
        v-if="Object.keys(input_list.items).length > 0"
      >
        <li
          v-for="(inner, i) in input_list.items"
          :key="i"
          class="c-Card__inner flex-grow-1"
        >
          <Mycomponent
            :input_list="input_list.items[i]"
          />
        </li>
      </ul>
      <div>
        <v-btn class="ma-2" color="success" v-if="input_list.btn">{{input_list.btn}}</v-btn>
      </div>
    </v-card>

    <!-- <div v-else v-bind:class="{'c-Card__inner': input_list.layer=='second'}"> -->
    <div v-else v-bind:class="{'c-Card__inner': input_list.layer=='second'}">
      <div>
        <v-text-field v-if="input_list.name != 'top'" class="a-Txt" v-model="input_list.name" />
      </div>
      <ul v-if="Object.keys(input_list.items).length > 0">
        <li
          v-for="(inner, i) in input_list.items"
          :key="i"
          >
          <Mycomponent
            :input_list="input_list.items[i]"
          />
        </li>
      </ul>
      <div v-if="input_list.layer=='top'">
        <v-btn class="ma-2" color="primary">{{input_list.btn}}</v-btn>
      </div>
      <div v-else>
        <v-btn class="ma-2" color="info" v-if="input_list.btn">{{input_list.btn}}</v-btn>
      </div>
    </div>

  </div>
</template>

<script>

import Mycomponent from '~/components/Mycomponent.vue'

export default {
  name: "Mycomponent",
  components: {
    Mycomponent,
  },
  props: {
    input_list: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  computed: {

  },

  methods: {

  },

}
</script>
<style lang="scss" scoped>
.c-Card {
  padding: 24px;
}
.c-Card__inner {
  padding: 8px;
}
</style>
