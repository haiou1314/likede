import axios from "axios";
import { Message } from "element-ui";
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
}); // 创建一个axios的实例
service.interceptors.request.use((config) => {
  if (store.state.user.token) {
    config.headers.Authorization = "Bearer " + store.state.user.token;
  }
  return config;
}); // 请求拦截器
service.interceptors.response.use(
  (res) => {
    let istrue = res.config.url.indexOf("/api/user-service/user/imageCode/");
    if (istrue === 0) {
      return res;
    }
    console.log(res);
    const { success, msg } = res.data;
    console.log(success);
    if (success) {
      return res.data;
    }
    Message.error(msg);
    return Promise.reject(new Error(msg));
  },
  function (error) {
    Message.error("系统错误");
    return Promise.reject(error);
  }
); // 响应拦截器
export default service; // 导出axios实例
