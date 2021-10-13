// state
import { getListPopularProducts } from '@/api/product/read';

const state = {
  productList: [],
};

// mutations
const mutations = {
  SET_PRODUCT_LIST(state, productList) {
    state.productList = productList;
  },
};

// actions
const actions = {
  FETCH_POPULAR_PRODUCT_LIST({ commit }, payload) {
    console.warn(payload);
    getListPopularProducts(payload.limit, payload.offset)
      .then((res) => {
        console.log('FETCH_POPULAR_PRODUCT_LIST', res);
        commit('SET_PRODUCT_LIST', res.data);
      })
      .catch((error) => {
        console.log('error>>>', error);
      });
  },
};

// getters
const getters = {
  productList(state) {
    return state.productList;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
