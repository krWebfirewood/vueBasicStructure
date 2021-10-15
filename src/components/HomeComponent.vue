<template>
  <div id="homeContentBlock">
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
  },

  created() {
    this.getProduct({ limit: 30, offset: 0, categoryLarge: 1000000 });
  },
  methods: {
    ...productListHelper.mapActions({
      getProduct: 'FETCH_POPULAR_PRODUCT_LIST',
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
