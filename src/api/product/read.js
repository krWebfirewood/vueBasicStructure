import { instance } from '@/api';

function getListPopularProducts(limit, offset, categoryLarge) {
  const url = `/api/v2/product/product-baseline/list?categoryLarge=${categoryLarge}&categoryMiddle=&categorySmall=&corporationCode=${process.env.VUE_APP_CORPORATION_CODE}&marketplaceCode=${process.env.VUE_APP_MARKETPLACE_CODE}&orderCode=01&limit=${limit}&offset=${offset}`;
  return instance.get(url);
}

function getListCategory() {
  const url = `/api/v2/product/category/list?&corporationCode=${process.env.VUE_APP_CORPORATION_CODE}&marketplaceCode=${process.env.VUE_APP_MARKETPLACE_CODE}`;
  return instance.get(url);
}

export { getListPopularProducts, getListCategory };
