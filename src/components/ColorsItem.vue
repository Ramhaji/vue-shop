<template>
  <li class="colors__item">
    <label class="colors__label">
      <input class="colors__radio sr-only" type="radio" name="color" :value="itemColor.id" v-model.number="currentColor">
      <span class="colors__value" :style="{ backgroundColor: itemColor.value }" >
      </span>
    </label>
  </li>
</template>

<script>
export default {
  props: ['color', 'currentColorId'],
  computed: {
    itemColor() {
      return this.color;
    },
    currentColor: {
      get() {
        return this.currentColorId;
      },
      set(value) {
        this.$emit('update:currentColorId', value);
      },
    },
  },
};
</script>
