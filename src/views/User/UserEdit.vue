<template>
  <section>
    <account-form>
      <button class="btn" @click.prevent="updateUser">Atualizar dados</button>
    </account-form>
  </section>
</template>

<script>
import api from "@/services";
import AccountForm from "@/components/AccountForm.vue";

export default {
  name: "UserEdit",

  components: {
    AccountForm,
  },

  data: () => ({
    displayError: false,
  }),

  methods: {
    async updateUser() {
      try {
        const user = this.$store.state["user"].user;
        
        await api.put(`users/${user.id}`, user);

        await this.$store.dispatch("user/fetchUser", user.id);
        this.$router.push({ name: "User" });
      } catch {
        this.displayError = true;
      }
    },
  },
};
</script>

<style></style>
