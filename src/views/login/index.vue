<template>
  <div class="login-container">
    <el-form ref="loginForm" class="login-form" auto-complete="on" label-position="left">
      <!-- from里面的盒子 -->
      <div class="box">
        <!--   <div class="title-container">
          <h3 class="title">Login Form</h3>
        </div>

        <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="Username"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Password"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">Login</el-button>

        <div class="tips">
          <span style="margin-right:20px;">username: admin</span>
          <span> password: any</span>
        </div> -->
        <!-- logo -->
        <div>
          <img src="@/assets/img/logo.595745bd.png" alt="">
        </div>
        <!-- section -->
        <div>
          <el-input
            v-model="input2"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="icon el-icon-mobile-phone" />
            </template>
          </el-input>
          <el-input
            v-model="input2"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="icon el-icon-lock" />
            </template>
            <template #suffix>
              <i class="icon el-icon-lock" />
            </template>
          </el-input>
          <el-input
            v-model="input2"
            class="input1"
            placeholder="请输入验证码"
          >
            <template #prefix>
              <i class="icon el-icon-price-tag" />
            </template>
          </el-input>
          <span class="img1">
            <img src="@/assets/img/8VMRhHHiLNARvaRGZqcDQruEQxs123QP.jpg" alt="">
          </span>

          <br>
          <el-button type="primary" disabled class="btn">主要按钮</el-button>
        </div>
      </div>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      input2: ''
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

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

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>

.login-container {
   min-height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: red;
  background: url('../../assets/img/background.be4fae7d.png');
  .el-input{
    width: 100%;
    height: 50px;
    border:1px solid #ccc ;
    border-radius: 5px;
    color: white;
    margin-bottom: 25px;
    color: #333;
    padding-left: 20px;
  }
  .img1{
    position: relative;
    top: 20px;
  }
  .input1{
    width: 316px;
  }
  .btn{
    width:448px;
     height: 47px;
     background-color: #6478ED;
  }
.icon{
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
    .box{
    position: relative;
    box-sizing: border-box;
    padding-top: 80px;
    border-radius: 3%;
    width: 588px;
    height: 388px;
    background-color: #fff;
    >div:nth-of-type(1){
      left: 50%;
      margin-left: -48px;
      top: -48px;
      position: absolute;
      img{
          width: 96px;
          height: 96px;
      }
    }
    >div:nth-of-type(2){
      width: 448px;
      height: 280px;
      margin: 0 auto;
    }
  }

  }
}
</style>
