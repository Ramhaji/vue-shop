<template>
  <component
    :is="currentPageComponent"
    :page-params="currentPageParams"
  />
</template>

<script>
import MainPage from '@/pages/MainPage.vue';
import ProductPage from '@/pages/ProducPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import eventBus from '@/eventBus';

const routs = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  components: {
    MainPage,
    ProductPage,
    NotFoundPage,
  },
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    };
  },
  computed: {
    currentPageComponent() {
      return routs[this.currentPage] || 'NotFoundPage';
    },
  },
  created() {
    eventBus.$on('goto-page', (pageName, pageParams) => this.gotoPage(pageName, pageParams));
  },
  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    },
  },
};
</script>
