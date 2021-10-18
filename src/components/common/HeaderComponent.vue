<template>
  <div id="headerBlock">
    <div
      class="headerItem"
      v-for="categoryItem in categoryList"
      :key="categoryItem.categoryId"
      @click="selectCategory(categoryItem)"
    >
      {{ categoryItem.categoryName }}
    </div>
  </div>
</template>

<script>
//전역 데이터 관리 vuex
//로컬 데이터는 할인꾹이랑 동일.
import { createNamespacedHelpers } from 'vuex';
const productListHelper = createNamespacedHelpers('product');
const categoryListHelper = createNamespacedHelpers('category');

export default {
  name: 'HeaderComponent',

  computed: {
    ...categoryListHelper.mapState({
      categoryList: (state) => state.categoryList,
    }),
  },

  created() {
    this.getCategory();
  },

  methods: {
    ...categoryListHelper.mapActions({
      getCategory: 'SET_CATEGORY_LIST',
    }),
    ...productListHelper.mapActions({
      selectCategory: 'getProductList',
    }),
  },
};
</script>

<style lang="stylus">
#headerBlock
  display flex
  margin-bottom 100px

  .headerItem
    width 100%
    height 50px
    border solid 1px red
    cursor pointer
</style>
