<template>
  <section>
    <h2>Endereço de envio</h2>
    <account-form>
      <button class="btn" @click.prevent="checkout">Finalizar compra</button>
    </account-form>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import api from "@/services";
import AccountForm from "@/components/AccountForm.vue";

export default {
    name: "CheckoutForm",

    props: ["product"],

    components: {
        AccountForm,
    },

    methods: {
      async createTransaction() {
        try {
          await api.post("/transacao", this.purchase);
          this.$router.push("user/purchases");
        } catch (ex) {
          console.log(ex);
        }
      },

      async checkout() {
        console.log(this.user)
        await this.createTransaction();
      }
    },

    computed: {
      ...mapGetters({
        user: 'user/getUser',
      }),

      purchase() {
        return {
          purchaser_id: this.user.email,
          seller_id: this.product.usuario_id,
          product: this.product,
          address: {
            cep: this.user.cep,
            street: this.user.rua,
            number: this.user.numero,
            neighborhood: this.user.bairro,
            city: this.user.cidade,
            state: this.user.estado,
          },
        };
      },
    },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>
