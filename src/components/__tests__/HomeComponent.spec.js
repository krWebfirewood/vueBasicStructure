import Vue from 'vue';
import HomeComponent from '../HomeComponent';

describe('HomeComponent.vue', () => {
  test('컴포넌트가 마운팅되면 isLogin 존재하고 초기값으로 설정되어 있어야 한다.', () => {
    const instance = new Vue(HomeComponent).$mount();
    console.log('################', instance);
    expect(instance.productList).toBe([]);
  });
});
