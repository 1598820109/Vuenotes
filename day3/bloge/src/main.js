
import Vue from 'vue'
import App from './App'
import router from './router'
import ViewUI from 'view-design';

// 引入iview
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
