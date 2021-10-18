// state
import { getListPopularProducts } from '@/api/product/read';
import { AsyncMutationCreator } from '../../lib/mutstion-types';
import asyncCommit from '../../lib/asyncCommit';

const FIRSTNAME = {
  FETCH_POPULAR_PRODUCT_LIST: AsyncMutationCreator(
    'FETCH_POPULAR_PRODUCT_LIST',
  ),
};

const moduleName = 'product';

const state = {
  productList: [],
  isLoading: true,
};

// mutations
const mutations = {
  [FIRSTNAME.FETCH_POPULAR_PRODUCT_LIST.PENDING](state, value) {
    state.isLoading = true;
    console.log('PENDING', state, value);
  },
  [FIRSTNAME.FETCH_POPULAR_PRODUCT_LIST.SUCCESS](state, value) {
    console.log('SUCCESS');
    state.isLoading = false;
    state.productList = value;
  },
  [FIRSTNAME.FETCH_POPULAR_PRODUCT_LIST.FAILURE](state, value) {
    state.isLoading = false;
    console.log('FAILURE', state, value);
  },
};

// actions
const actions = {
  async getProductList(context, payload) {
    await asyncCommit(
      moduleName,
      FIRSTNAME.FETCH_POPULAR_PRODUCT_LIST,
      getListPopularProducts(
        (payload.limit ??= 30),
        (payload.offset ??= 0),
        payload.categoryLarge,
      ),
    );
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
