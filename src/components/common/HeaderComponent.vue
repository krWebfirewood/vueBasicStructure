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
