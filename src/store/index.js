import Vue from "vue";
import Vuex from "vuex";
import login from "./modules/login";
import user from "./modules/user";
import userProducts from "./modules/userProducts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    user,
    userProducts,
  },
});
