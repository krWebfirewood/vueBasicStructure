import {instance} from "@/api";


function getListPopularProducts(limit, offset) {
  const url = `/api/v1/product/ranking-popular/list?corporationCode=1000&marketplaceCode=1010&limit=${limit}&offset=${offset}`;
  return instance.get(url);
}

export { getListPopularProducts };