<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <div class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img
            src="$store.state.user.userinfo.userName"
            class="user-avatar"
            v-imgErr="defaultimg"
          />
          <span>欢迎您 , {{ $store.state.user.userinfo.userName }}</span>
          <span @click="logout">退出</span>
          <i class="el-icon-caret-bottom" @click="logout" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import Hamburger from "@/components/Hamburger";

export default {
  data() {
    return {
      defaultimg:
        "https://img1.baidu.com/it/u=390829681,3002818272&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
    };
  },
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar", "avatar"]),
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      font-size: 16px;
      margin-right: 60px;
      color: white;
      line-height: 50px;
      img {
        border-radius: 50%;
        margin-right: -15px;
        margin-top: 15px;
      }
      .avatar-wrapper {
        position: relative;
        top: -7px;
        span {
          cursor: pointer;
          position: relative;
          top: -12px;
          margin-left: 30px;
        }
        .user-avatar {
          cursor: pointer;
          width: 35px;
          height: 35px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -18px;
          top: 23px;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
