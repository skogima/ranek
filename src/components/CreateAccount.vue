<template>
  <section>
    <h2>Crie a sua conta</h2>

    <transition mode="out-in">
      <button v-if="!create" class="btn" @click="create = true">Criar Conta</button>
      <account-form v-else>
        <button class="btn">
          Criar usuário
        </button>
      </account-form>
    </transition>
  </section>
</template>

<script>
import AccountForm from "@/components/AccountForm.vue";

export default {
  name: "CreateAccount",
  components: {
    AccountForm,
  },

  data: () => ({
    create: false,
  }),
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
