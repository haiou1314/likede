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
      console.log(payload + "sdfss");
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
      commit("setToken", res.data.token);
      commit("setuserId", res.data.userId);
    },
    //用户信息获取
    async getuserinfo(context) {
      const res = await userinfoDateil(context.state.userId);
      context.commit("setuserinfon", res.data);
    },
  },
  getters: {},
};
