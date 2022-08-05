<template>
  <div>
    属性方式：
    <el-input placeholder="请选择日期" v-model="input1"> </el-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
    };
  },
};
</script>

<style scoped></style>
