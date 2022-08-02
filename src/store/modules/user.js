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
    // token获取
    async getToken({ commit }, payload) {
      const res = await login(payload);
      console.log(res);
      commit("setToken",res.token);
    },
  },
  getters: {},
};
