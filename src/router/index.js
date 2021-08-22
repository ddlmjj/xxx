import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/panel.html',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  mode: "history",
  base: "localhost:8080",
})
