import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const instance = new Router({
  mode: 'history',
  base: '/', //添加根目录
  routes: [
    {
      path: "/index.html",
      component: () => import('./views/home.vue')
    },
    {
      path: "/home",
      component: () => import('./views/home.vue')
    },
    {
      path: "/login",
      component: () => import('./views/member/login.vue')
    },
    {
      path: "/reg",
      component: () => import('./views/member/reg.vue')
    },
    {
      path: "/regDetail",
      component: () => import('./views/member/regDetail.vue')
    },
    {
      path: "/login",
      component: () => import('./views/member/login.vue')
    },
    {
      path: "/",//默认显示
      redirect: "/home"
    }
  ]
})

export default instance