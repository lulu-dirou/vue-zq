import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const instance = new Router({
  mode: 'history',
  routes: [
    {
      path: "/home",
      component: () => import('./views/home.vue')
    },
    {
      path: "/",//默认显示
      redirect: "/home"
    }
  ]
})

export default instance