import { instance } from '@/api';

function getListPopularProducts(limit, offset, categoryLarge) {
  const url = `/api/v2/product/product-baseline/list?categoryLarge=${categoryLarge}&categoryMiddle=&categorySmall=&corporationCode=1000&marketplaceCode=1010&orderCode=01&limit=${limit}&offset=${offset}`;
  return instance.get(url);
}

function getListCategory() {
  const url = `/api/v2/product/category/list?&corporationCode=1000&marketplaceCode=1010`;
  return instance.get(url);
}

export { getListPopularProducts, getListCategory };
