import router from "@/router/index.js";
import store from "@/store/index.js";
const whiteList = ["/login", "/404"];
router.beforeEach((to, from, next) => {
  const token = store.state.user.token;
  if (token) {
    if (!store.state.user.userinfo.userId) {
      store.dispatch("user/getuserinfo");
    }
    if (to.path === "/login") {
      next("/");
    } else {
      next();
    }
  } else {
    const isCludes = whiteList.includes(to.path);
    if (isCludes) {
      next();
    } else {
      next("/login");
    }
  }
});
