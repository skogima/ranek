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
  </section>
</template>

<script>
export default {
  data: () => ({
    email: "",
    password: "",
  }),

  methods: {
    login() {
      console.log("oi");
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
  color: #87F;
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
  color: #87F;
  text-decoration: underline;
}
</style>
