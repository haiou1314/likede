<template>
  <ul class="ul">
    <li>6546</li>
    <li>111dsfsdf1111</li>
    <li>1111111</li>
    <li>111fsfsd1111</li>
    <li>111sfdfsd1111</li>
    <li>11111dgdfgdf11</li>
    <li>111fsdf1111</li>
    <li>11fsdf11111</li>
    <li>1111111</li>
  </ul>
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
.ul {
  margin-left: -40px;
  width: 1150px;
   height: 42px;
   line-height: 42px;
  display: flex;
  justify-content: space-between;
}
.ul li {
  width: 100%;
  flex: 1;
  background-color: #fff;
  text-align: left;
}
.ul li:nth-of-type(1){
  padding-left: 10px;
}
</style>
