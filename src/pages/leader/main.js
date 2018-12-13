import Vue from 'vue'
import Router from './router'
import ElementUI from 'element-ui'
import '../../sass/el-mytheme.scss'
import '../../sass/base.scss'
import App from './App.vue'


Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  router: Router,
  render: h => h(App),
}).$mount('#app')

