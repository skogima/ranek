export const state = {
  login: false,
};

export const getters = {
  isLoggedIn(state) {
    return state.login;
  },
};

export const actions = {
  setLogin({ commit }, value) {
    commit("SET_LOGIN", value);
  },
};

export const mutations = {
  SET_LOGIN(state, payload) {
    state.login = payload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
