import api from "@/services";

export const state = {
  userProducts: null,
};

export const getters = {
  getUserProducts(state) {
    return state.userProducts;
  },
};

export const actions = {
  async fetchUserProducts({ commit, rootState }) {
    const { data } = await api.get(`/products?usuario_id=${rootState['user'].user.id}`);
    commit('SET_USER_PRODUCTS', data);
  },

  async addUserProduct({ commit }, payload) {
    commit("ADD_USER_PRODUCT", payload);
  },
  
  async setUserProducts({ commit }, payload) {
    commit("SET_USER_PRODUCTS", payload);
  },
};

export const mutations = {
  SET_USER_PRODUCTS(state, payload) {
    state.userProducts = payload;
  },
  ADD_USER_PRODUCT(state, payload) {
    state.userProducts.unshift(payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
