<template>
  <li class="catalog__item">
    <router-link
      class="catalog__pic"
      :to="{ name: 'product', params: { id: product.id, currentColorId }}"
    >
      <img
        :src="product.image"
        :alt="product.title"
      >
    </router-link>

    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>

    <span class="catalog__price"> {{ product.price | priceFormat }}</span>

    <ul class="colors colors--black">
      <BaseColors
        :class="'colors--black'"
        :color-ids="product.colorIds"
        :current-color.sync="currentColorId"
      />
    </ul>
  </li>
</template>

<script>
import BaseColors from '@/components/BaseColors.vue';
import gotoPage from '@/helpers/gotoPage';
import priceFormat from '@/helpers/priceFormat';

export default {
  components: {
    BaseColors,
  },
  filters: {
    priceFormat,
  },
  // eslint-disable-next-line vue/require-prop-types
  props: ['product'],
  data() {
    return {
      currentColorId: this.product.colorIds[0],
    };
  },
  methods: {
    gotoPage,
  },
};
</script>
