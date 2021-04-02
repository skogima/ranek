<template>
  <ul v-if="totalPages > 1">
    <li v-for="page in pages" :key="page">
      <router-link :to="{ query: query(page) }">
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    itemsPerPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    query(page) {
      return {
        ...this.$route.query,
        _page: page,
      };
    },
  },

  computed: {
    pages() {
      const currentPage = Number(this.$route.query._page);
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.totalPages;
      const pagesArray = Array.from({ length: total }, (_, k) => k + 1);
      
      pagesArray.splice(0, currentPage - offset);
      pagesArray.splice(range, total);
        console.log(pagesArray);
      return pagesArray;
    },

    totalPages() {
      const total = Math.ceil(this.total / this.itemsPerPage);
      return total === Infinity ? 0 : Math.ceil(total);
    },
  },
};
</script>

<style scoped>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a:hover {
  background: #87f;
  color: #fff;
}
</style>
