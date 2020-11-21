<template>
  <ul class="colors">
    <li class="colors__item" v-for="color in colors" :key="color.id">
      <label class="colors__label">
        <input
          class="colors__radio sr-only"
          type="radio"
          name="color"
          :value="color.id"
          v-model.number="currentColorId"
        />
        <span class="colors__value" :style="{ backgroundColor: color.value }">
        </span>
      </label>
    </li>
  </ul>
</template>

<script>
import colors from '../data/colors';

export default {
  props: ['colorIds', 'currentColor'],
  computed: {
    colors() {
      return this.colorIds.map((elem) => colors.find((color) => color.id === elem));
    },
    currentColorId: {
      get() {
        return this.currentColor;
      },
      set(value) {
        this.$emit('update:currentColor', value);
      },
    },
  },
};
</script>
