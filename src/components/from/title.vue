<template>
  <div class="box">
    <ul class="ul">
      <li>序号</li>
      <li>工单编号</li>
      <li>设备编号</li>
      <li>工单类型</li>
      <li>工单方式</li>
      <li>工单状态</li>
      <li>运营人员</li>
      <li>创建日期</li>
      <li>操作</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul,
li {
  margin: 0;
  list-style: none;
}
.box {
  background-color: #f3f6fb;
}
.ul {
  position: relative;
  left: -40px;
  height: 42px;
  width: 1150px;
  line-height: 42px;
  display: flex;
  justify-content: space-between;
}
.ul li {
  text-align: left;
  width: 100%;
  flex: 1;
  text-align: left;
}
.ul li:nth-of-type(1){
  padding-left: 10px;
}
</style>
