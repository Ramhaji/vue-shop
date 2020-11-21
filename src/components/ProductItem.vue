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
        <BaseColors :class="'colors--black'" :color-ids="product.colorIds" :current-color.sync="currentColorId" />
      </ul>
  </li>
</template>

<script>
import BaseColors from './BaseColors.vue';

export default {
  components: {
    BaseColors,
  },
  props: ['product'],
  data() {
    return {
      currentColorId: this.product.colorIds[0],
    };
  },

};
</script>
