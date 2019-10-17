// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
// 引入iview插件
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
// 引入vue懒加载插件
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ViewUI)
// 懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('../static/loading/loading.gif'),
  loading: require('../static/loading/loading.gif'),
  attempt: 1
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
