<template>
  <div class="app-container">
    <div>
      <SearchBox />
    </div>
    <div></div>
  </div>
</template>

<script>
import { getOperationWorkOrderApi } from "@/api";
import SearchBox from "@/components/SearchBox";
export default {
  components: {
    SearchBox,
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

<style scoped></style>
