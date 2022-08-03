<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      class="login-form"
      auto-complete="on"
      label-position="left"
      :model="loginForm"
      :rules="loginFormRules"
    >
      <!-- from里面的盒子 -->
      <div class="box">
        <div>
          <img src="@/assets/img/logo.595745bd.png" alt="" />
        </div>
        <!-- section -->
        <div>
          <el-form-item prop="loginName">
            <el-input v-model="loginForm.loginName" placeholder="请输入账号">
              <template #prefix>
                <i class="icon el-icon-mobile-phone" />
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input v-model="loginForm.password" placeholder="请输入密码">
              <template #prefix>
                <i class="icon el-icon-lock" />
              </template>
              <template #suffix>
                <i class="icon el-icon-lock" />
              </template>
            </el-input>
          </el-form-item>

          <el-form-item prop="code" class="code">
            <el-input
              v-model="loginForm.code"
              class="input1"
              placeholder="请输入验证码"
            >
              <template #prefix>
                <i class="icon el-icon-price-tag" />
              </template>
            </el-input>
            <span class="img1" @click="refreshCode">
              <img :src="pic" alt="" />
            </span>
          </el-form-item>

          <el-button
            type="primary"
            class="btn"
            @click="login"
            :loading="isLogin"
            >登录</el-button
          >
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { code } from "@/api";
export default {
  created() {
    this.getCode();
  },
  name: "Login",
  data() {
    return {
      pic: "",
      loginForm: {
        loginName: "admin",
        password: "admin",
        code: "",
        clientToken: "",
        loginType: 0,
      },
      loginFormRules: {
        loginName: [
          { required: true, message: "请填写用户名" },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: "用户名格式不正确",
          },
        ],
        password: [
          { required: true, message: "请填写密码" },
          {
            pattern: /^[a-zA-Z0-9_-]{4,16}$/,
            message: "密码格式不正确",
          },
        ],
        code: [{ required: true, message: "请填写验证码" }],
      },
      isLogin: false,
    };
  },
  methods: {
    // 登录
    async login() {
      this.isLogin = true;
      try {
        await this.$refs.loginForm.validate();
        await this.$store.dispatch("user/getToken", this.loginForm);
        this.$router.push("/");
      } finally {
        this.isLogin = false;
      }
    },
    // 获取验证码
    async getCode() {
      try {
        this.loginForm.clientToken = "";
        for (let index = 0; index < 4; index++) {
          this.loginForm.clientToken += Math.floor(Math.random() * 10);
        }
        const res = await code(this.loginForm.clientToken);
        this.pic = window.URL.createObjectURL(res.data);
      } catch (error) {
        console.log("验证码获取失败");
      }
    },
    // 点击刷新验证码
    refreshCode() {
      this.getCode();
    },
  },
};
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #666;
$cursor: #666;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: red;
  background: url("../../assets/img/background.be4fae7d.png");
  .el-input {
    width: 100%;
    height: 50px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: white;
    color: #333;
    padding-left: 20px;
  }
  .img1 {
    position: relative;
    top: 20px;
    cursor: pointer;
  }
  .input1 {
    width: 316px;
  }
  .code {
    margin-top: -20px;
  }
  .btn {
    width: 448px;
    height: 47px;
    background-color: #6478ed;
  }
  .icon {
    font-size: 18px;
    padding-left: 5px;
    line-height: 48px;
  }
  .login-form {
    position: relative;
    width: 588px;
    max-width: 100%;
    padding: 160px 0 0;
    margin: 0 auto;
    overflow: hidden;
    .box {
      position: relative;
      box-sizing: border-box;
      padding-top: 80px;
      border-radius: 3%;
      width: 520px;
      height: 388px;
      background-color: #fff;
      > div:nth-of-type(1) {
        left: 50%;
        margin-left: -48px;
        top: -48px;
        position: absolute;
        img {
          width: 96px;
          height: 96px;
        }
      }
      > div:nth-of-type(2) {
        width: 448px;
        height: 280px;
        margin: 0 auto;
      }
    }
  }
  .el-form-item {
    margin-bottom: 30px;
  }
}
</style>
