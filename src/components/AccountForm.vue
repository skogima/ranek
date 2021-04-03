<template>
  <form>
    <label for="name">Nome</label>
    <input id="name" name="name" type="text" v-model="nome" />
    <label for="email">Email</label>
    <input id="email" name="email" type="email" v-model="email" />
    <label for="password">Senha</label>
    <input id="passoword" name="passoword" type="password" v-model="senha" />
    <label for="cep">Cep</label>
    <input id="cep" name="cep" type="text" v-model="cep" @keyup="fillCep" />
    <label for="street">Rua</label>
    <input id="street" name="street" type="text" v-model="rua" />
    <label for="number">Numero</label>
    <input id="number" name="number" type="text" v-model="numero" />
    <label for="neighborhood">Bairro</label>
    <input id="neighborhood" name="neighborhood" type="text" v-model="bairro" />
    <label for="city">Cidade</label>
    <input id="city" name="city" type="text" v-model="cidade" />
    <label for="state">Estado</label>
    <input id="state" name="state" type="text" v-model="estado" />
    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers/form";
import { fetchCep } from "@/services";

export default {
  computed: {
    ...mapFields({
      fields: [
        "email",
        "nome",
        "senha",
        "rua",
        "cep",
        "numero",
        "bairro",
        "estado",
        "cidade",
      ],
      base: "user/getUser",
      mutation: "user/SET_USER",
    }),
  },

  methods: {
    async fillCep() {
      const cep = this.cep.replace(/\D/g, ""); 
      if (cep.length === 8) {
        const { data } = await fetchCep(cep);

        this.rua = data.logradouro;
        this.bairro = data.bairro;
        this.cidade = data.localidade;
        this.estado = data.uf;
      }
    },
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
