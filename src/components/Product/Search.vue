<template>
  <form>
    <input
      type="text"
      placeholder="Buscar..."
      name="search"
      id="search"
      v-model="search"
    />
    <input
      type="submit"
      id="submit"
      value="Buscar"
      :disabled="disabled"
      @click.prevent="searchProducts"
    />
  </form>
</template>

<script>
export default {
  name: "ProductSearch",

  data: () => ({
    search: "",
    disabled: true,
  }),

  methods: {
    searchProducts() {
      this.$router.push({ query: { q: this.search } });
    },
  },

  watch: {
    search() {
      this.disabled = this.search.trim().length === 0;
      if (this.disabled) {
        this.searchProducts();
      }
    },
  }
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#search {
  width: 100%;
  border: none;
  padding: 20px;
}

#search:focus, #search:hover {
  transform: scale(1.1);
}

#submit {
  width: 62px;
  height: 62px;
  background: url("../../assets/search.svg") no-repeat center center;
  box-shadow: none;
  outline: none;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
}

#submit:disabled {
  cursor: default;
}
</style>
