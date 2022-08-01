import { login } from "@/api";
export default {
  namespaced: true,
  state: {
    token: "",
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  actions: {
    async getToken({ commit }, payload) {
      const res = await login(payload);
      console.log(res.data.token);
      commit("setToken", res.data.token);
    },
  },
  getters: {},
};
