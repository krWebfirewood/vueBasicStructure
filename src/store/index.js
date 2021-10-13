import Vue from 'vue';
import Vuex from 'vuex';

import ProductStore from './module/popularProduct';

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  modules: {
    product: ProductStore,
  },
});
