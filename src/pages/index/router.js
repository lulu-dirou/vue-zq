import Vue from "vue"
import Router from "vue-router"
import Store from '../../store/store'
import { MessageBox } from 'element-ui'


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
      path: "/declare",
      component: () => import('./views/declare/child.vue'),
      children: [
        {
          path: "sbtz",
          component: () => import('./views/declare/sbtz')
        },
        {
          path: "sbzc",
          component: () => import('./views/declare/sbzc')
        },
        {
          path: "sbxm",
          component: () => import('./views/declare/sbxm'),
        },
        {
          path: "sbjd",
          component: () => import('./views/declare/sbjd'),
        },
        {
          path: "/",//重定向，默认显示
          redirect: "sbtz"
        }
      ]
    },
    {
      path: "/appeal",
      component: () => import('./views/appeal/child.vue'),
    },
    {
      path: "/appeal/appealFrom",
      component: () => import('./views/appeal/appealFrom.vue'),
      meta: { requireAuth: true }
    },
    {
      path: "/appeal/detail",
      component: () => import('./views/appeal/detail.vue'),
      meta: { requireAuth: true }
    },
    {
      path: "/policy",
      component: () => import('./views/policy/child'),
      children: [
        {
          path: "zchb",
          component: () => import('./views/policy/zchb')
        },
        {
          path: "sbzc",
          component: () => import('./views/policy/sbzc')
        },
        {
          path: "zcjd",
          component: () => import('./views/policy/zcjd'),
        },
        {
          path: "zcdy",
          component: () => import('./views/policy/zcdy'),
          meta: { requireAuth: true }
        },
        {
          path: "/",//重定向，默认显示
          redirect: "zchb"
        }
      ]
    },
    {
      path: "/policy/detail",
      component: () => import('./views/policy/detail.vue')
    },
    {
      path: "/policy/detail_dm",
      component: () => import('./views/policy/detail_dm.vue')
    },
    {
      path: "/policy/detail_wz",
      component: () => import('./views/policy/detail_wz.vue')
    },
    {
      path: "/policy/detail_sb",
      component: () => import('./views/policy/detail_sb.vue')
    },
    {
      path: "/",//默认显示
      redirect: "/home"
    }
  ]
})

// 注册一个全局前置守卫用来拦截导航
instance.beforeEach(
  function(to, from, next){
    const token = Store.state.Member.token // 前面js引入store(vuex)来获取当前token
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (token) { // 通过vuex state获取当前的token是否存在
        next()
      } else {
        // element-MessageBox
        MessageBox.confirm("<i class='el-alert__icon el-icon-warning font-warning'></i> 请先登录", {
          dangerouslyUseHTMLString: true,
          confirmButtonText: '确定',
        }).then(() => {
           next({
              path: '/login',
              query: {redirect: to.fullPath}
            })
        }).catch(() => {
        })
        // alert('该页面需要登陆')
        // next({
        //   path: '/reg',
        //   query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        // })
      }
    } else {
      next()
    }
  }
)

export default instance