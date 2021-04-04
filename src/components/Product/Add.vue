<template>
  <form class="add-product">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" v-model="product.nome" />
    <label for="name">Preço (R$)</label>
    <input type="number" id="price" name="price" v-model="product.preco" />

    <label for="pictures">Fotos</label>
    <input type="file" id="pictures" ref="pictures" />

    <label for="description">Descrição</label>
    <textarea
      id="description"
      name="description"
      v-model="product.descricao"
    ></textarea>

    <input
      type="button"
      value="Adicionar produto"
      class="btn"
      @click.prevent="addProduct"
    />
  </form>
</template>

<script>
import api from "@/services";

export default {
  name: "ProductAdd",

  data: () => ({
    product: {
      nome: "",
      preco: 0,
      descricao: "",
      fotos: null,
    },
  }),

  methods: {
    formatProduct() {
      this.product.usuario_id = this.$store.state["user"].user.id;
    },

    async addProduct() {
      this.formatProduct();

      await api.post("products", this.product);
      this.$store.dispatch("userProducts/fetchUserProducts");
    },
  },
};
</script>

<style scoped>
.add-product {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}

.btn {
  grid-column: 2;
}
</style>
