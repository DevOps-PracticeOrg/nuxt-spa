<template>
    <v-list class="m-SideHeader__inner py-0 d-flex flex-row">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        two-line
        class="c-List"
      >
      <div class="mx-auto">
        <v-list-item-content>

          <v-list-item-title class="d-flex align-strech justify-start">
            <div class="a-Icon" v-bind:class="{ isActive: (share_data.status === i) }">
              <div class="ep-Circle"></div>
              <div class="ep-Line" v-if="i==0"></div>
            </div>
            <p class="a-Txt align-self-center mb-0">{{item.title}}</p>
          </v-list-item-title>

        </v-list-item-content>
      </div>

      </v-list-item>

    </v-list>
</template>
<script>
export default {
  props: ["share_data"],
  data () {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: '項目作成',
        },
        {
          icon: 'mdi-apps',
          title: '配置',
        },
        {
          icon: 'mdi-apps',
          title: '確認',
        },
        {
          icon: 'mdi-apps',
          title: '提出',
        },
      ],
      nextIcon: "fas fa-long-arrow-alt-down",
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },

  mounted: function () {
    this.share_data["status_length"] = Object.keys(this.items).length;
  }
}
</script>

<style lang="scss" scoped>

.m-SideHeader__inner {
  @media screen and (min-width: 800px){
    display: block!important;
  }
}

.c-List {
  * {
    overflow: visible;
  }
  > * {
    display: inline-block;
    width: 120px;
  }

  .a-Txt {
    width: 100%;
    text-align: center;
    @media screen and (min-width: 800px){
      margin-left: 16px;
      text-align: left;
    }
  }

  .a-Icon {
    position: relative;
    height: 24px!important;
    width: 24px!important;
    @media screen and (max-width: 800px){
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    > * {
      height: inherit;
      width: inherit;
    }
    &.isActive {
      .ep-Circle {
        &:after{
          background: red;
        }
      }
    }


    .ep-Circle {
      position: absolute;
      z-index: 1;
      @media screen and (max-width: 800px){
        bottom: -20px;
      }
      &::before, &::after {
        content: "";
        display: inline-block;
        border-radius: 50%;


      }
      &::before {
        height: inherit;
        width: inherit;
        background: rgba($color: #dbdbdb, $alpha: 1);
      }
      &:after{
        position: absolute;
        height: 50%;
        width: 50%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    }

    .ep-Line {
      z-index: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      &::before {
        content: "";
        display: block;
        height: 4px;
        width: 75vw;
        background: rgba($color: #dbdbdb, $alpha: 1);
        margin-left: auto;
        margin-right: auto;

        position: absolute;
        @media screen and (max-width: 800px){
          bottom: -8px;
        }
        @media screen and (min-width: 800px){
          height: 200px;
          width: 4px;
          position: static;
        }
      }
    }

  }
}
</style>
