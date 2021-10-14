<template>
  <div>
    <div v-for="(item, idx) in productList" :key="item.productId">
      {{ item.productName }}
    </div>
    <button @click="getProduct({ limit: 20, offset: 0 })">클릭</button>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const productListHelper = createNamespacedHelpers('product');

export default {
  name: 'HomeComponent',
  data() {
    return {
      foo: 'bar',
    };
  },
  computed: {
    ...productListHelper.mapState({
      productList: (state) => state.productList,
    }),
  },

  created() {
    //this.getHomeData();
    // this.$store.dispatch('product/FETCH_POPULAR_PRODUCT_LIST', {limit: 10, offset: 1});
  },
  methods: {
    ...productListHelper.mapActions({
      getProduct: 'FETCH_POPULAR_PRODUCT_LIST',
    }),
    // async getHomeData() {
    //   try {
    //     const currentPage = {limit: 10, offset: 0}
    //     await this.$store.dispatch('FETCH_POPULAR_PRODUCT_LIST', currentPage);
    //     console.warn(this.productList)
    //   } catch (e) {
    //     console.log(e);
    //   } finally {
    //
    //   }
    // }
  },
};
</script>

<style scoped></style>
