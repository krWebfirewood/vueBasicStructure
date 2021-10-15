import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueLoading from 'vuejs-loading-plugin';

Vue.config.productionTip = false;
Vue.use(VueLoading);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
