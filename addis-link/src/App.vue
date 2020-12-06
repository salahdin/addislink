<template>
<v-app>
    <v-card
      color="grey lighten-4"
      flat
      tile
    >
      <v-toolbar dense>
        <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>

        <v-toolbar-title>AddisLink</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn flat>
            <v-icon left>mdi-magnify</v-icon>
            view Meetups
          </v-btn>  
        </v-toolbar-items>
      </v-toolbar>
    </v-card>
    <v-navigation-drawer v-model="sideNav">
      <v-list>
        <v-list-title>
          <v-list-title-action v-for="nav in navigation" :key="nav.title">
            <v-icon left>{{nav.icon}}</v-icon>
            {{nav.title}}
          </v-list-title-action>
        </v-list-title>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  export default {
    data(){
      return {
        sideNav : false,
        navigation : [
          {icon: 'mdi-home', title: 'home'},
          {icon: ' mdi-settings', title: 'setting'},
          {icon: 'mdi-alarm-plus', title: 'meetups'},
          {icon: 'mdi-account', title: 'account'}
        ]
      }
    }
  }
</script>
<style lang="scss">

</style>
