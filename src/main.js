// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueResource from 'vue-resource'

Vue.use(ElementUI)
Vue.use(VueResource)

// 定义全局时间过滤器
Vue.filter('dateFormate', function (dateStr, pattern = 'YYYY-MM-DD HH-mm-ss') {
  // 使用moment插件格式化时间
  return dateStr == null ? null : moment(new Date(dateStr)).format(pattern)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
