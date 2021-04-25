<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email" />
      <label for="password">Senha</label>
      <input type="password" id="password" name="password" v-model="password" />

      <button type="submit" class="btn" @click.prevent="login">Logar</button>
    </form>
    <p class="lost-password">
      <a href="/" target="_blank">Perdeu a senha? Clique aqui</a>
    </p>

    <create-account />
  </section>
</template>

<script>
import CreateAccount from "@/components/CreateAccount.vue";

export default {
  components: {
    CreateAccount,
  },

  data: () => ({
    email: "",
    password: "",
  }),

  methods: {
    async login() {
      const continueWith = this.$route.query.continue;

      await this.$store.dispatch("user/fetchUser", this.email);
      
      if (!continueWith) {
        this.$router.push({ name: "User" });
      }

      this.$router.push({ path: continueWith });
    },
  },
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.lost-password {
  text-align: center;
  margin: 20px auto 0 auto;
}

.lost-password a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
