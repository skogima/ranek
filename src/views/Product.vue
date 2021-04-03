<template>
  <section>
    <div v-if="product" class="product">
      <ul class="pictures" v-if="product.fotos">
        <li v-for="(picture, index) in product.fotos" :key="index">
          <img :src="picture.src" :alt="picture.titulo" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.nome }}</h1>
        <p class="price">{{ product.preco | currencyFilter }}</p>
        <p class="description">{{ product.descricao }}</p>
        <button class="btn" :disabled="product.vendido === 'false'">
          {{ product.vendido !== 'false' ? 'Produto Vendido' : 'Comprar' }}
        </button>
      </div>
    </div>
    <page-loading v-else />
  </section>
</template>

<script>
import api from "@/services";

export default {
  props: ["id"],

  data: () => ({
    product: null,
  }),

  async created() {
    await this.getProduct();
  },

  methods: {
    async getProduct() {
      const { data: product } = await api.get(`products/${this.id}`);
      this.product = product;
    },
  },
};
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.price {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.description {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
