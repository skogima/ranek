import api from "@/services";

export const state = {
  user: {
    id: "",
    email: "",
    nome: "",
    senha: "",
    rua: "",
    cep: "",
    numero: "",
    bairro: "",
    estado: "",
    cidade: "",
  },
};

export const getters = {
  getUser(state) {
    return state.user;
  },
};

export const actions = {
  async fetchUser({ commit }, userId) {
    const { data: user } = await api.get(`users/${userId}`);

    commit("SET_USER", user);
    commit("login/SET_LOGIN", true, { root: true });
  },
};

export const mutations = {
  SET_USER(state, payload) {
    state.user = Object.assign(state.user, payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
