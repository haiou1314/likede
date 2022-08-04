import axios from "axios";
import { Message } from "element-ui";
import store from "@/store";
import router from '@/router'
import { getTokenTime } from './auth'

function istimeout() {
  const currentTime = Date.now(); //现在的时间
  const toeknTime = getTokenTime(); //登录时的时间
  const timeout = 2 * 60 * 60 * 1000; //token过期的时间
  return currentTime - toeknTime > timeout;
}

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}); // 创建一个axios的实例
service.interceptors.request.use(async (config) => {
  if (store.state.user.token) {
    if (istimeout()) {
      await store.dispatch("user/logout");
      router.push("/login");
      return Promise.reject(new Error("登录过期"));
    } else {
      config.headers.Authorization = store.state.user.token;
    }
  }

  return config;
}); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    let istrue = res.config.url.indexOf("/api/user-service/user/imageCode/");
    if (istrue === 0) {
      return res;
    }
    if (res.data.success) {
      return res;
    }
    return res;
    // Message.error(res.data.msg);
    // return Promise.reject(new Error(res.data.msg));
  },
  function (error) {
    console.log(error);
    // Message.error("系统错误");
    // return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
