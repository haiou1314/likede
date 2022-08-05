<template>
  <div class="box">
    <div>{{ title }}</div>
    <el-form class="search">
      <el-form-item>
        <el-select v-model="input1" class="search" :placeholder="success">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
    },
    success: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      input1: "",
    };
  },
  methods: {
    change() {
      console.log(this.input1);
      this.$emit("change", this.input1);
      this.input1 = "";
    },
  },
};
</script>

<style scoped>
.box {
  display: flex;
}
.search{
  margin-top: 6px;
}
</style>
