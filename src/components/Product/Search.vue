<template>
  <form>
    <input type="text" name="search" id="search" v-model="search" />
    <input
      type="submit"
      id="submit"
      value="Buscar"
      @click.prevent="searchProducts"
    />
  </form>
</template>

<script>
export default {
  name: "ProductSearch",

  data: () => ({
    search: "",
  }),

  methods: {
    searchProducts() {
      this.$router.push({ query: { q: this.search } });
    },
  },
};
</script>

<style scoped></style>
