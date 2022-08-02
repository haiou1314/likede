import { login, userinfoDateil } from "@/api";
export default {
  namespaced: true,
  state: {
    token: "",
    userId: "",
    userinfo: "",
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setuserId(state, payload) {
      state.userId = payload;
    },
    setuserinfon(state, payload) {
      state.userinfo = payload;
    },
  },
  actions: {
    // token获取
    async getToken({ commit }, payload) {
      const res = await login(payload);
      commit("setToken", res.token);
      commit("setuserId", res.userId);
    },
    //用户信息获取
    async getuserinfo({ commit }) {
      const res = await userinfoDateil(1);
      console.log(res.data);
      commit("setuserinfon", res.data);
    },
  },
  getters: {},
};
