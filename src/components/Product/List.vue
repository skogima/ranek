<template>
  <section class="products-container">
    <div v-for="product in products" :key="product.id">
      <img
        v-if="product.fotos"
        :src="product.fotos[0].src"
        :alt="product.fotos[0].titulo"
      />
      <p class="price">{{ product.preco }}</p>
      <p class="title">{{ product.nome }}</p>
      <p>{{ product.descricao }}</p>
    </div>
  </section>
</template>

<script>
import api from '@/services';
import { serialize } from "@/helpers/serialize";

export default {
  name: "ProductList",

  data: () => ({
    products: null,
  }),

  async created() {
    await this.fetchProducts();
  },

  methods: {
    async fetchProducts() {
      const { data: products } = await api.get(this.url);
      this.products = products;
    }
  },

  computed: {
    url() {
      const queryString = serialize(this.$route.query);
      return `/products?_limit=9${queryString}`;
    },
  },

  watch: {
    url() {
      this.fetchProducts();
    }
  },
};
</script>

<style></style>
