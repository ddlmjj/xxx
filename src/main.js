// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import vuetify from "./plugins/vuetify"
import tess from "dotenv"
tess.config()

if(process.env.TES === "tess") { console.log("yes") } else console.log("merde")

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  vuetify,
  template: '<App/>'
})
