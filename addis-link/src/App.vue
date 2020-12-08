<template>
<div id="app">
  <v-app primary>
    <v-navigation-drawer enable-resize-watcher absolute temporary v-model="sideNav" class="hidden-sm-and-up">
        <v-card>
          <v-list dense>
          <v-list-item-group
            v-model="selectedItem"
            color="primary"
          >
              <v-list-item
                v-for="(item, i) in navigation"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <router-link style="cursor: pointer" tag="span" :to="item.link">
                  <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                </router-link>
              </v-list-item>
          </v-list-item-group>
        </v-list>
        </v-card>
      </v-navigation-drawer>
      <v-card
        color="grey lighten-4"
        text
      >
        <v-toolbar>
          <v-app-bar-nav-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
          <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">AddisLink</router-link></v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">
              <v-btn text v-for="item in navigation" :key="item.title">
                <router-link style="cursor: pointer" tag="span" :to="item.link">
                <v-icon left>{{item.icon}}</v-icon>
                {{item.title}}
                </router-link>
            </v-btn>  
          </v-toolbar-items>
        </v-toolbar>
      </v-card>
        <v-main>
          <router-view></router-view>
        </v-main>
    </v-app>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        sideNav : false,
        selectedItem: 1,
        navigation : [
          {icon: 'mdi-home', title: 'home',link: '/'},
          {icon: 'mdi-login', title: 'setting', link:'/user/login'},
          {icon: 'mdi-alarm-plus', title: 'meetups', link:'/meetups'},
          {icon: 'mdi-account', title: 'account',link: '/user/profile'},
          {icon: 'mdi-upload', title: 'create new', link:'/meetup/new'}
        ]
      }
    }
  }
</script>
<style lang="scss">

</style>
