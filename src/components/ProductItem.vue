<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
        <img v-bind:src="product.image" v-bind:alt="product.title" />
      </a>

      <h3 class="catalog__title">
        <a href="#"> {{ product.title }} </a>
      </h3>

      <span class="catalog__price"> {{ product.price }} ₽ </span>

      <ul class="colors colors--black">
        <ColorsItem  v-for="color in productColors" :key="color.id" :color="color"/>
      </ul>
  </li>
</template>

<script>
import filterColors from '../data/filterColors';
import ColorsItem from './ColorsItem.vue';

export default {
  components: {
    ColorsItem,
  },
  data() {
    return {
      color: this.product.colorIds[0],
    };
  },
  props: ['product'],
  computed: {
    productColors() {
      return this.product.colorIds.map((elem) => filterColors.find((item) => item.id === elem));
    },
  },
};
</script>
