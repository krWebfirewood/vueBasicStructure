import { getListCategory } from '../../../api/product/read';

const state = {
  categoryList: [],
};

// mutations
const mutations = {
  SET_CATEGORY_LIST(state, categoryList) {
    state.categoryList = categoryList;
  },
};

// actions
const actions = {
  SET_CATEGORY_LIST({ commit }) {
    getListCategory()
      .then((res) => {
        commit('SET_CATEGORY_LIST', res.data);
      })
      .catch((error) => {
        console.log('error>>>', error);
      });
  },
};

// getters
const getters = {
  GET_CATEGORY_LIST(state) {
    return state.categoryList;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
