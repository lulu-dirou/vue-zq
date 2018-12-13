import Vue from 'vue'
import Router from './router' // router
import Store from '../../store/store' // vuex
import ElementUI from 'element-ui' // element插件
import Md5 from 'js-md5' // MD5加密
import Common from '../../common/js/common.js' //公用方法
import '../../sass/el-mytheme.scss' // element样式
import '../../sass/base.scss' // base样式
import '../../common/iconfont/iconfont.css' // iconfont字体图标
import App from './App.vue'


Vue.use(ElementUI);

Vue.prototype.$md5 = Md5
Vue.prototype.$common = Common
Vue.config.productionTip = false

new Vue({
  store: Store,
  router: Router,
  render: h => h(App),
}).$mount('#app')
