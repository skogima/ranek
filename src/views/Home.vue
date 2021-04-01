<template>
  <section>
    <h1>👍 Compre ou venda 👎</h1>
    <product-search />
    <product-list />
  </section>
</template>

<script>
import ProductList from "@/components/Product/List.vue";
import ProductSearch from "@/components/Product/Search.vue";

export default {
  components: {
    ProductList,
    ProductSearch,
  },
};
</script>

<style scoped>
h1 {
    color: #87f;
    margin-top: 40px;
    font-size: 2rem;
    text-align: center;
}
</style>
