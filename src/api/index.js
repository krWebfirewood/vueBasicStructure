import axios from 'axios';

export function createInstance() {
  return axios.create({
    baseURL: process.env.VUE_APP_API_PRODUCT_URL,
  });
}

const abca = 0;
export const instance = createInstance();
