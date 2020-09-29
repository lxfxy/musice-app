import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Api from "./api/api";
import Utils from "./utils/utils";

Vue.config.productionTip = false

Vue.use(Api);
Vue.use(Utils);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
