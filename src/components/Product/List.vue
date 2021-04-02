<template>
  <section class="products-container">
    <div v-if="products && products.length" class="products">
      <div v-for="product in products" :key="product.id" class="product">
        <router-link to="/">
          <img
            v-if="product.fotos"
            :src="product.fotos[0].src"
            :alt="product.fotos[0].titulo"
          />
          <p class="price">{{ product.preco }}</p>
          <h2 class="title">{{ product.nome }}</h2>
          <p>{{ product.descricao }}</p>
        </router-link>
      </div>
      <product-paginate
        :total="totalProducts"
        :itemsPerPage="productsPerPage"
      />
    </div>
    <div v-else-if="products && products.length === 0">
      <p class="no-results">
        A busca não encontrou resultados. Tente buscar outro termo.
      </p>
    </div>
    <div v-else>
      <page-loading />
    </div>
  </section>
</template>

<script>
import api from "@/services";
import { serialize } from "@/helpers/serialize";
import ProductPaginate from "@/components/Product/Paginate.vue";

export default {
  name: "ProductList",

  components: {
    ProductPaginate,
  },

  data: () => ({
    products: null,
    totalProducts: 0,
    productsPerPage: 9,
  }),

  async created() {
    await this.fetchProducts();
  },

  methods: {
    async fetchProducts() {
      this.products = null;
      window.setTimeout(async () => {
        const response = await api.get(this.url);
        const { data: products } = response;
        this.totalProducts = Number(response.headers["x-total-count"]);
        this.products = products;
      }, 1500);
    },
  },

  computed: {
    url() {
      const queryString = serialize(this.$route.query);
      return `/products?_limit=${this.productsPerPage}${queryString}`;
    },
  },

  watch: {
    url() {
      this.fetchProducts();
    },
  },
};
</script>

<style scoped>
.products-container {
  max-width: 1000px;
  margin: 0 auto;
}

.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;
}

.product {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  transition: all 0.2s;
}

.product:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  z-index: 1;
}

.product img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.title {
  margin-bottom: 10px;
}

.price {
  color: #e80;
  font-weight: bold;
}

.no-results {
  text-align: center;
}
</style>
