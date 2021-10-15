<template>
  <div id="homeContentBlock">
    {{ isLoading ? this.$loading(true) : this.$loading(false) }}
    <div class="homeContent">
      <div
        class="homeContentItem"
        v-for="productItem in productList"
        :key="productItem.productId"
        @click="movePage(productItem)"
      >
        <img :src="productItem.productImage1" />
        <div>{{ productItem.productName }}</div>
      </div>
    </div>
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
    ...productListHelper.mapState({
      isLoading: (state) => state.isLoading,
    }),
  },

  created() {
    this.getProduct({
      limit: 30,
      offset: 0,
      categoryLarge: 1000000,
    });
  },
  methods: {
    ...productListHelper.mapActions({
      getProduct: 'getProductList',
    }),
    movePage: function (productItem) {
      const productId = productItem.productId;
      this.$router.push(`/detail/${productId}`);
    },
  },
};
</script>

<style lang="stylus">
#homeContentBlock
  min-height 100%

  .homeContent
    border solid 1px

    .homeContentItem
      border solid 1px red
</style>
