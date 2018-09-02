import './class-component-hooks' // currently leads to problems
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

Vue.config.devtools = true
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

