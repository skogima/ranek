<template>
  <section>
    <h1>Produtos</h1>
    <product-add></product-add>
    <h2>Seus Produtos</h2>

    <transition-group tag="ul" name="list" v-if="userProducts">
      <li v-for="(product, index) in userProducts" :key="index">
        <product-item :product="product">
          <p>{{ product.descricao }}</p>

          <button class="delete" @click="deleteProduct(product.id)">
            Deletar
          </button>
        </product-item>
      </li>
    </transition-group>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import api from "@/services";
import ProductAdd from "@/components/Product/Add.vue";
import ProductItem from "@/components/Product/Item.vue";

export default {
  components: {
    ProductAdd,
    ProductItem,
  },

  async created() {
    await this.fetchProducts();
  },

  methods: {
    async fetchProducts() {
      await this.$store.dispatch("userProducts/fetchUserProducts");
    },

    async deleteProduct(id) {
      const confirmed = window.confirm("Deseja remover este produto?");
      if (confirmed) {
        await api.delete(`products/${id}`);
        await this.fetchProducts();
      }
    },
  },

  computed: {
    ...mapGetters({
      userProducts: "userProducts/getUserProducts",
    }),
  },
};
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.delete {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  overflow: hidden;
  cursor: pointer;
  text-indent: -150px;
  border: none;
}
</style>
