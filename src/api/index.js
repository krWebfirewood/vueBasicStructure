import axios from 'axios';
import { setInterceptors } from './common/interceptors';

//axios 객체 생성
export function createInstance() {
  const axiosService = axios.create({
    /////////
    baseURL: process.env.VUE_APP_API_PRODUCT_URL,
  });
  return setInterceptors(axiosService);
}

export const instance = createInstance();
