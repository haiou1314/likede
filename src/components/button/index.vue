<template>
  <div>
    <div :style="styles" class="btn">
       <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      tyep: String,
      require: true,
    },
    styles: {
      type: String,
    },
  },
};
</script>

<style scoped>
.btn {
  cursor: pointer;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 36px;
}

</style>
