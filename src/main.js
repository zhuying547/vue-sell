import axios from 'axios'
import 'common/stylus/index.styl'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
