import { login, userinfoDateil } from "@/api";
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    token: "",
    userId: "",
    userinfo: {},
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setuserId(state, payload) {
      state.userId = payload;
    },
    setuserinfo(state, payload) {
      state.userinfo = payload;
    },
  },
  actions: {
    // token获取
    async getToken({ commit }, payload) {
      const res = await login(payload);
      commit("setToken", res.data.token);
      commit("setuserId", res.data.userId);
      setTokenTime()
    },
    //用户信息获取
    async getuserinfo(context) {
      const res = await userinfoDateil(context.state.userId);
      context.commit("setuserinfo", res.data);
    },
    // 登出
    logout({ commit }) {
      commit("setToken", "");
      commit("setuserinfo", {});
    },
  },
  getters: {},
};
