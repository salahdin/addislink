import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import { firebase } from '@firebase/app';
import { store } from './store/index.js'
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),

  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyBmrsDuFgsLMImzSPBlHZWOSHBx5oAm5K8",
      authDomain: "addislink-9cb77.firebaseapp.com",
      databaseURL: "https://addislink-9cb77.firebaseio.com",
      projectId: "addislink-9cb77",
    })
  }
}).$mount('#app')
