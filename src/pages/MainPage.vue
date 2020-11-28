<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        v-bind.sync="filterItems"
      />
      <section class="catalog">
        <ProductList
          :products="products"
        />
        <BasePagination
          v-model="page"
          :count="countProducts"
          :per-page="productsPerPage"
        />
      </section>
    </div>
  </main>
</template>

<script>
import products from '@/data/products';
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';

export default {
  components: {
    ProductList,
    BasePagination,
    ProductFilter,
  },
  data() {
    return {
      filterItems: {
        filterPriceFrom: 0,
        filterPriceTo: 0,
        filterCategoryId: 0,
        filterColorId: 0,
      },
      page: 1,
      productsPerPage: 6,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterItems.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price > this.filterItems.filterPriceFrom);
      }

      if (this.filterItems.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.filterItems.filterPriceTo);
      }

      if (this.filterItems.filterCategoryId) {
        filteredProducts = filteredProducts.filter((product) => product.categoryId === this.filterItems.filterCategoryId);
      }

      if (this.filterItems.filterColorId) {
        filteredProducts = filteredProducts.filter((product) => product.colorIds.includes(this.filterItems.filterColorId));
      }

      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>
