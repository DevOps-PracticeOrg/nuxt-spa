<template>
    <v-list>
      <v-list-group
        v-for="item in items2"
        :key="item.title"
        v-model="item.active"
        router
        exact
      >
        <template v-slot:activator>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          :to="subItem.to"
        >
          <v-list-item-content>
            <v-list-item-title v-text="subItem.title" class="text-center"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list-group>

    </v-list>
</template>
<script>
export default {
  data () {
    return {
      items2: [

        {
          active: true,
          icon: 'mdi-apps',
          title: 'テンプレ',
          items: [
            { title: '作成', to: '/template/create' },
            { title: '閲覧', to: '/template'},
          ],
        },

        {
          icon: 'mdi-apps',
          title: '書類',
          items: [
            { title: '作成', to: '/document/create' },
            { title: '閲覧', to: '/document'},
          ],
        },


        {
          icon: 'mdi-apps',
          title: 'ワークフロー',
          items: [
            { title: '作成', to: '/document/create' },
            { title: '閲覧', to: '/document'},
          ],
        },
      ],
      items: [
        // {
        //   icon: 'mdi-apps',
        //   title: '下書き',
        //   to: '/document?status=drafted'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: '承認済み',
        //   to: '/document?status=approved'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: '却下',
        //   to: '/document?status=rejected'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: 'テンプレ作成',
        //   to: '/template/create'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: 'テンプレ閲覧',
        //   to: '/template'
        // },

        // {
        //   icon: 'mdi-apps',
        //   title: '書類作成',
        //   to: '/document/create'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: '書類閲覧',
        //   to: '/document'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: 'ワークフロー作成',
        //   to: '/template/create'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: 'ワークフロー閲覧',
        //   to: '/template'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: '下書き',
        //   to: '/document?status=drafted'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: '承認済み',
        //   to: '/document?status=approved'
        // },
        // {
        //   icon: 'mdi-apps',
        //   title: '却下',
        //   to: '/document?status=rejected'
        // },
      ],

      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>


