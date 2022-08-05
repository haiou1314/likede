<template>
  <div class="app-container">
    <div class="nav">
      <SearchBox title="工单编号：" success="请输入" class="searchbox" />
      <searchBox2 title="工单状态：" success="请选择" class="searchbox" />
      <mybutton style="background: #5F84FF" class="btn1">
        <span class="text">查询</span>
      </mybutton>
    </div>
    <div class="section">
      <div class="button">
        <mybutton style="background: #ff762f" class="btn">
          <i class="el-icon-search text"></i>
          <span class="text">新建</span>
        </mybutton>
        <mybutton style="background: #FBF4F0" class="btn">
          <span class="text text1">工单配置</span>
        </mybutton>
      </div>
      <div>
        <mytitle class="title" />
        <mytable />
      </div>
    </div>
  </div>
</template>

<script>
import { getOperationWorkOrderApi } from "@/api";
import SearchBox from "@/components/SearchBox";
import searchBox2 from "@/components/SearchBox/search2.vue";
import mybutton from "@/components/button";
import mytitle from "@/components/from/title.vue";
import mytable from "@/components/from/table.vue";
export default {
  components: {
    SearchBox,
    searchBox2,
    mybutton,
    mytitle,
    mytable,
  },
  data() {
    return {};
  },

  created() {
    this.getOperationWorkOrder();
  },

  methods: {
    // 获取所有的工单
    async getOperationWorkOrder() {
      const res = await getOperationWorkOrderApi();
      console.log(res);
    },
  },
};
</script>

<style scoped>
.nav {
  display: flex;
  background-color: #fff;
  width: 1159px;
  height: 64px;
  box-sizing: border-box;
  border-radius: 5px;
  padding-left: 20px;
  line-height: 64px;
}
.searchbox {
  margin-right: 30px;
}
.section {
  background-color: #fff;
  width: 1159px;
  margin-top: 18px;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 15px 20px;
}
.button {
  display: flex;
}
.btn {
  margin-right: 15px;
}
.title {
  margin-top: 20px;
}
.text {
  font-size: 14px;
  color: white;
}
.el-icon-search {
  margin-right: 5px;
}
.btn1{
  border-radius: 2px;
  margin-top: 13px;
  height: 36px;
}
.text1{
  color: #000;
}
</style>
