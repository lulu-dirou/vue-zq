import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const instance = new Router({
  mode: 'history',
  routes: [
    {
      path: "/aaa",
      component: () => import('./views/aaa.vue')
    },
    {
      path: "/",//重定向，默认显示
      redirect: "/aaa"
    }
  ]
})

export default instance